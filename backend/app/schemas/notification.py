from pydantic import BaseModel
from datetime import datetime
from typing import Optional, Dict, Any
from enum import Enum

class NotificationType(str, Enum):
    PRICE_DROP = "price_drop"
    TRIP_REMINDER = "trip_reminder"
    BOOKING_UPDATE = "booking_update"
    SYSTEM = "system"
    FAVORITE_UPDATE = "favorite_update"
    REVIEW_RESPONSE = "review_response"
    CUSTOM_TRIP_UPDATE = "custom_trip_update"

class NotificationPriority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"

class NotificationBase(BaseModel):
    type: NotificationType
    priority: NotificationPriority
    title: str
    message: str
    notification_metadata: Optional[Dict[str, Any]] = None

class NotificationCreate(NotificationBase):
    user_id: int

class Notification(NotificationBase):
    id: int
    user_id: int
    is_read: bool
    created_at: datetime

    class Config:
        from_attributes = True 