from typing import List, Optional
from sqlalchemy.orm import Session
from ..models import notification as notification_model
from ..models import user as user_model
from ..models import trip as trip_model
from ..models import booking as booking_model
from ..models import favorite as favorite_model

class NotificationService:
    @staticmethod
    def create_notification(
        db: Session,
        user_id: int,
        type: notification_model.NotificationType,
        title: str,
        message: str,
        priority: notification_model.NotificationPriority = notification_model.NotificationPriority.MEDIUM,
        notification_metadata: Optional[dict] = None
    ):
        notification = notification_model.Notification(
            user_id=user_id,
            type=type,
            title=title,
            message=message,
            priority=priority,
            notification_metadata=notification_metadata
        )
        db.add(notification)
        db.commit()
        return notification

    @staticmethod
    def create_price_drop_notification(
        db: Session,
        trip: trip_model.Trip,
        old_price: float,
        new_price: float
    ):
        # Notificar a todos los usuarios que tienen este viaje en favoritos
        favorites = db.query(favorite_model.Favorite).filter(
            favorite_model.Favorite.trip_id == trip.id
        ).all()
        
        for favorite in favorites:
            NotificationService.create_notification(
                db=db,
                user_id=favorite.user_id,
                type=notification_model.NotificationType.PRICE_DROP,
                title="¡Bajada de precio!",
                message=f"El precio del viaje '{trip.title}' ha bajado de {old_price}€ a {new_price}€",
                priority=notification_model.NotificationPriority.HIGH,
                notification_metadata={
                    "trip_id": trip.id,
                    "old_price": old_price,
                    "new_price": new_price,
                    "discount_percentage": ((old_price - new_price) / old_price) * 100
                }
            )

    @staticmethod
    def create_trip_reminder_notification(
        db: Session,
        trip: trip_model.Trip,
        days_before: int
    ):
        # Notificar a todos los usuarios que tienen una reserva para este viaje
        bookings = db.query(booking_model.Booking).filter(
            booking_model.Booking.trip_id == trip.id,
            booking_model.Booking.status == booking_model.BookingStatus.CONFIRMED
        ).all()
        
        for booking in bookings:
            NotificationService.create_notification(
                db=db,
                user_id=booking.user_id,
                type=notification_model.NotificationType.TRIP_REMINDER,
                title="Recordatorio de viaje",
                message=f"Tu viaje '{trip.title}' comienza en {days_before} días",
                priority=notification_model.NotificationPriority.MEDIUM,
                notification_metadata={
                    "trip_id": trip.id,
                    "days_before": days_before,
                    "start_date": trip.start_date.isoformat()
                }
            ) 