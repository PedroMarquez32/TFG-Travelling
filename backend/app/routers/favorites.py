from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from ..database import get_db
from ..models import favorite as favorite_model
from ..models import trip as trip_model
from ..models import notification as notification_model
from ..schemas import trip as trip_schema
from ..auth.jwt import get_current_user
from datetime import datetime
from ..models import user as user_model

router = APIRouter()

@router.post("/trips/{trip_id}/favorite")
def add_favorite(
    trip_id: int,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    trip = db.query(trip_model.Trip).filter(trip_model.Trip.id == trip_id).first()
    
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    
    existing_favorite = db.query(favorite_model.Favorite).filter(
        favorite_model.Favorite.user_id == current_user.id,
        favorite_model.Favorite.trip_id == trip_id
    ).first()
    
    if existing_favorite:
        raise HTTPException(status_code=400, detail="Trip already in favorites")
    
    favorite = favorite_model.Favorite(user_id=current_user.id, trip_id=trip_id)
    db.add(favorite)
    
    # Crear notificación
    notification = notification_model.Notification(
        user_id=current_user.id,
        type=notification_model.NotificationType.FAVORITE_UPDATE,
        title="Viaje añadido a favoritos",
        message=f"Has añadido el viaje '{trip.title}' a tus favoritos",
        priority=notification_model.NotificationPriority.LOW,
        notification_metadata={"trip_id": trip_id}
    )
    db.add(notification)
    
    db.commit()
    return {"message": "Trip added to favorites"}

@router.get("/favorites", response_model=List[trip_schema.Trip])
def get_favorites(
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user),
    sort_by: Optional[str] = Query(None, description="Sort by: price, date, name"),
    filter_by: Optional[str] = Query(None, description="Filter by: upcoming, past, all")
):
    user = db.query(user_model.User).filter(user_model.User.email == current_user).first()
    query = db.query(trip_model.Trip).join(
        favorite_model.Favorite,
        favorite_model.Favorite.trip_id == trip_model.Trip.id
    ).filter(favorite_model.Favorite.user_id == user.id)
    
    # Aplicar filtros
    if filter_by == "upcoming":
        query = query.filter(trip_model.Trip.start_date > datetime.utcnow())
    elif filter_by == "past":
        query = query.filter(trip_model.Trip.end_date < datetime.utcnow())
    
    # Aplicar ordenamiento
    if sort_by == "price":
        query = query.order_by(trip_model.Trip.price)
    elif sort_by == "date":
        query = query.order_by(trip_model.Trip.start_date)
    elif sort_by == "name":
        query = query.order_by(trip_model.Trip.title)
    
    return query.all()

@router.get("/favorites/price-alerts")
def get_price_alerts(
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user)
):
    user = db.query(user_model.User).filter(user_model.User.email == current_user).first()
    favorites = db.query(favorite_model.Favorite).filter(
        favorite_model.Favorite.user_id == user.id
    ).all()
    
    price_alerts = []
    for favorite in favorites:
        trip = favorite.trip
        if trip.price < trip.original_price:  # Necesitarías añadir original_price al modelo Trip
            price_alerts.append({
                "trip_id": trip.id,
                "title": trip.title,
                "current_price": trip.price,
                "original_price": trip.original_price,
                "discount_percentage": ((trip.original_price - trip.price) / trip.original_price) * 100
            })
    
    return price_alerts 