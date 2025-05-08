from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from ..schemas import trip as trip_schema
from ..models import trip as trip_model
from ..auth.jwt import get_current_user
from ..models import user as user_model
from ..models import user_role as user_role_model

router = APIRouter()

@router.post("/", response_model=trip_schema.Trip)
def create_trip(
    trip: trip_schema.TripCreate,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    if current_user.role != user_role_model.UserRole.ADMIN:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Only administrators can create trips"
        )
    
    db_trip = trip_model.Trip(
        title=trip.title,
        destination=trip.destination,
        description=trip.description,
        price=trip.price,
        start_date=trip.start_date,
        end_date=trip.end_date,
        max_participants=trip.max_participants
    )
    
    db.add(db_trip)
    db.commit()
    db.refresh(db_trip)
    
    # Add features
    for feature_id in trip.features:
        feature = db.query(trip_model.Feature).filter(trip_model.Feature.id == feature_id).first()
        if feature:
            db_trip.features.append(feature)
    
    # Add images
    for image_url in trip.images:
        image = trip_model.TripImage(image_url=image_url, trip_id=db_trip.id)
        db.add(image)
    
    db.commit()
    db.refresh(db_trip)
    return db_trip

@router.get("/", response_model=List[trip_schema.Trip])
def read_trips(
    skip: int = 0,
    limit: int = 100,
    destination: str = None,
    min_price: float = None,
    max_price: float = None,
    db: Session = Depends(get_db)
):
    query = db.query(trip_model.Trip)
    
    if destination:
        query = query.filter(trip_model.Trip.destination.ilike(f"%{destination}%"))
    if min_price:
        query = query.filter(trip_model.Trip.price >= min_price)
    if max_price:
        query = query.filter(trip_model.Trip.price <= max_price)
    
    return query.offset(skip).limit(limit).all()

@router.get("/{trip_id}", response_model=trip_schema.Trip)
def read_trip(trip_id: int, db: Session = Depends(get_db)):
    trip = db.query(trip_model.Trip).filter(trip_model.Trip.id == trip_id).first()
    if trip is None:
        raise HTTPException(status_code=404, detail="Trip not found")
    return trip

@router.put("/{trip_id}", response_model=trip_schema.Trip)
def update_trip(
    trip_id: int,
    trip: trip_schema.TripUpdate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    if current_user["role"] != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Only administrators can update trips"
        )
    
    db_trip = db.query(trip_model.Trip).filter(trip_model.Trip.id == trip_id).first()
    if db_trip is None:
        raise HTTPException(status_code=404, detail="Trip not found")
    
    for field, value in trip.dict(exclude_unset=True).items():
        setattr(db_trip, field, value)
    
    db.commit()
    db.refresh(db_trip)
    return db_trip

@router.delete("/{trip_id}")
def delete_trip(
    trip_id: int,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    if current_user["role"] != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Only administrators can delete trips"
        )
    
    db_trip = db.query(trip_model.Trip).filter(trip_model.Trip.id == trip_id).first()
    if db_trip is None:
        raise HTTPException(status_code=404, detail="Trip not found")
    
    db.delete(db_trip)
    db.commit()
    return {"message": "Trip deleted successfully"} 