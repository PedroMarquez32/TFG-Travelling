from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from enum import Enum

class BookingStatus(str, Enum):
    PENDING = "pending"
    CONFIRMED = "confirmed"
    CANCELLED = "cancelled"
    COMPLETED = "completed"

class BookingBase(BaseModel):
    trip_id: Optional[int] = None
    custom_trip_id: Optional[int] = None
    number_of_participants: int
    special_requests: Optional[str] = None

class BookingCreate(BookingBase):
    pass

class Booking(BookingBase):
    id: int
    user_id: int
    status: BookingStatus
    booking_date: datetime
    total_price: float

    class Config:
        from_attributes = True 