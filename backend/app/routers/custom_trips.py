from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from ..schemas import custom_trip as custom_trip_schema
from ..models import custom_trip as custom_trip_model
from ..models import user as user_model
from ..auth.jwt import get_current_user
from ..models.notification import Notification, NotificationType, NotificationPriority

router = APIRouter()

@router.post("/", response_model=custom_trip_schema.CustomTrip)
def create_custom_trip(
    custom_trip: custom_trip_schema.CustomTripCreate,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    db_custom_trip = custom_trip_model.CustomTrip(
        user_id=current_user.id,
        **custom_trip.dict()
    )
    db.add(db_custom_trip)
    
    # Create notification for new custom trip request
    notification = Notification(
        user_id=current_user.id,
        type=NotificationType.CUSTOM_TRIP_UPDATE,
        title="Nueva solicitud de viaje personalizado",
        message=f"Tu solicitud de viaje a {custom_trip.destination} ha sido recibida",
        priority=NotificationPriority.MEDIUM,
        notification_metadata={"custom_trip_id": db_custom_trip.id}
    )
    db.add(notification)
    
    db.commit()
    db.refresh(db_custom_trip)
    return db_custom_trip

@router.get("/", response_model=List[custom_trip_schema.CustomTrip])
def get_custom_trips(
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    return db.query(custom_trip_model.CustomTrip)\
        .filter(custom_trip_model.CustomTrip.user_id == current_user.id)\
        .all()

@router.get("/{custom_trip_id}", response_model=custom_trip_schema.CustomTrip)
def get_custom_trip(
    custom_trip_id: int,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    custom_trip = db.query(custom_trip_model.CustomTrip)\
        .filter(
            custom_trip_model.CustomTrip.id == custom_trip_id,
            custom_trip_model.CustomTrip.user_id == current_user.id
        ).first()
    if not custom_trip:
        raise HTTPException(status_code=404, detail="Custom trip not found")
    return custom_trip

@router.put("/{custom_trip_id}/status")
def update_custom_trip_status(
    custom_trip_id: int,
    status: custom_trip_schema.CustomTripStatus,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    if current_user.role != "ADMIN":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Only administrators can update custom trip status"
        )
    
    custom_trip = db.query(custom_trip_model.CustomTrip)\
        .filter(custom_trip_model.CustomTrip.id == custom_trip_id)\
        .first()
    if not custom_trip:
        raise HTTPException(status_code=404, detail="Custom trip not found")
    
    custom_trip.status = status
    
    # Create notification for status update
    notification = Notification(
        user_id=custom_trip.user_id,
        type=NotificationType.CUSTOM_TRIP_UPDATE,
        title="Actualización de estado de viaje personalizado",
        message=f"El estado de tu viaje a {custom_trip.destination} ha sido actualizado a {status}",
        priority=NotificationPriority.HIGH,
        notification_metadata={"custom_trip_id": custom_trip_id, "new_status": status}
    )
    db.add(notification)
    
    db.commit()
    return {"message": "Custom trip status updated successfully"} 