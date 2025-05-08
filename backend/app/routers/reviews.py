from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from ..models import review as review_model
from ..models import trip as trip_model
from ..models import user as user_model
from ..schemas import review as review_schema
from ..auth.jwt import get_current_user
from ..models.notification import Notification, NotificationType, NotificationPriority
from datetime import datetime

router = APIRouter()

@router.post("/{trip_id}", response_model=review_schema.Review)
def create_review(
    trip_id: int,
    review: review_schema.ReviewCreate,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    # Verify trip exists
    trip = db.query(trip_model.Trip).filter(trip_model.Trip.id == trip_id).first()
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    
    # Check if user has already reviewed this trip
    existing_review = db.query(review_model.Review).filter(
        review_model.Review.user_id == current_user.id,
        review_model.Review.trip_id == trip_id
    ).first()
    
    if existing_review:
        raise HTTPException(status_code=400, detail="You have already reviewed this trip")
    
    # Create review
    db_review = review_model.Review(
        user_id=current_user.id,
        trip_id=trip_id,
        rating=review.rating,
        comment=review.comment
    )
    db.add(db_review)
    
    # Create notification for the review
    notification = Notification(
        user_id=current_user.id,
        type=NotificationType.REVIEW_RESPONSE,
        title="Review Posted",
        message=f"Your review for the trip '{trip.title}' has been posted successfully",
        priority=NotificationPriority.LOW,
        notification_metadata={"trip_id": trip_id, "review_id": db_review.id}
    )
    db.add(notification)
    
    db.commit()
    db.refresh(db_review)
    return db_review

@router.get("/trip/{trip_id}", response_model=List[review_schema.Review])
def get_trip_reviews(
    trip_id: int,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    reviews = db.query(review_model.Review)\
        .filter(review_model.Review.trip_id == trip_id)\
        .offset(skip)\
        .limit(limit)\
        .all()
    return reviews

@router.get("/user/me", response_model=List[review_schema.Review])
def get_user_reviews(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    reviews = db.query(review_model.Review)\
        .filter(review_model.Review.user_id == current_user.id)\
        .offset(skip)\
        .limit(limit)\
        .all()
    return reviews

@router.put("/{review_id}", response_model=review_schema.Review)
def update_review(
    review_id: int,
    review_update: review_schema.ReviewCreate,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    db_review = db.query(review_model.Review)\
        .filter(
            review_model.Review.id == review_id,
            review_model.Review.user_id == current_user.id
        ).first()
    
    if not db_review:
        raise HTTPException(status_code=404, detail="Review not found or you don't have permission to modify it")
    
    db_review.rating = review_update.rating
    db_review.comment = review_update.comment
    db_review.updated_at = datetime.utcnow()
    
    db.commit()
    db.refresh(db_review)
    return db_review

@router.delete("/{review_id}")
def delete_review(
    review_id: int,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    db_review = db.query(review_model.Review)\
        .filter(
            review_model.Review.id == review_id,
            review_model.Review.user_id == current_user.id
        ).first()
    
    if not db_review:
        raise HTTPException(status_code=404, detail="Review not found or you don't have permission to delete it")
    
    db.delete(db_review)
    db.commit()
    return {"message": "Review deleted successfully"} 