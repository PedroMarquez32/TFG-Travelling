from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List, Optional
from ..database import get_db
from ..models import booking as booking_model
from ..models import trip as trip_model
from ..models import user as user_model
from ..schemas import booking as booking_schema
from ..auth.jwt import get_current_user
from ..services.notification_service import NotificationService

router = APIRouter()

@router.post("/", response_model=booking_schema.Booking)
def create_booking(
    booking: booking_schema.BookingCreate,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    # Verificar que el viaje existe y tiene cupo
    if booking.trip_id:
        trip = db.query(trip_model.Trip).filter(trip_model.Trip.id == booking.trip_id).first()
        if not trip:
            raise HTTPException(status_code=404, detail="Trip not found")
        if trip.current_participants + booking.number_of_participants > trip.max_participants:
            raise HTTPException(status_code=400, detail="Not enough spots available")

    # Crear la reserva
    db_booking = booking_model.Booking(
        user_id=current_user.id,
        trip_id=booking.trip_id,
        custom_trip_id=booking.custom_trip_id,
        number_of_participants=booking.number_of_participants,
        special_requests=booking.special_requests,
        total_price=trip.price * booking.number_of_participants if booking.trip_id else 0,
        status=booking_schema.BookingStatus.PENDING
    )
    
    db.add(db_booking)
    
    # Actualizar el número de participantes del viaje
    if booking.trip_id:
        trip.current_participants += booking.number_of_participants
    
    # Crear notificación
    NotificationService.create_notification(
        db=db,
        user_id=current_user.id,
        type=notification_model.NotificationType.BOOKING_UPDATE,
        title="Reserva creada",
        message=f"Tu reserva ha sido creada y está pendiente de confirmación",
        priority=notification_model.NotificationPriority.HIGH,
        notification_metadata={
            "booking_id": db_booking.id,
            "trip_id": booking.trip_id,
            "status": db_booking.status.value
        }
    )
    
    db.commit()
    db.refresh(db_booking)
    return db_booking

@router.get("/", response_model=List[booking_schema.Booking])
def get_bookings(
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user),
    status: Optional[booking_schema.BookingStatus] = None
):
    query = db.query(booking_model.Booking).filter(
        booking_model.Booking.user_id == current_user.id
    )
    
    if status:
        query = query.filter(booking_model.Booking.status == status)
    
    return query.all()

@router.get("/{booking_id}", response_model=booking_schema.Booking)
def get_booking(
    booking_id: int,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    booking = db.query(booking_model.Booking).filter(
        booking_model.Booking.id == booking_id,
        booking_model.Booking.user_id == current_user.id
    ).first()
    
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    
    return booking

@router.put("/{booking_id}/cancel")
def cancel_booking(
    booking_id: int,
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    booking = db.query(booking_model.Booking).filter(
        booking_model.Booking.id == booking_id,
        booking_model.Booking.user_id == current_user.id
    ).first()
    
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    
    if booking.status != booking_schema.BookingStatus.PENDING:
        raise HTTPException(status_code=400, detail="Can only cancel pending bookings")
    
    booking.status = booking_schema.BookingStatus.CANCELLED
    
    # Si es un viaje regular, liberar los cupos
    if booking.trip_id:
        trip = db.query(trip_model.Trip).filter(trip_model.Trip.id == booking.trip_id).first()
        trip.current_participants -= booking.number_of_participants
    
    # Crear notificación
    NotificationService.create_notification(
        db=db,
        user_id=current_user.id,
        type=notification_model.NotificationType.BOOKING_UPDATE,
        title="Reserva cancelada",
        message="Tu reserva ha sido cancelada",
        priority=notification_model.NotificationPriority.MEDIUM,
        notification_metadata={
            "booking_id": booking.id,
            "trip_id": booking.trip_id,
            "status": booking.status.value
        }
    )
    
    db.commit()
    return {"message": "Booking cancelled successfully"} 