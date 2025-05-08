from pydantic import BaseModel
from typing import Optional
from datetime import datetime, date
from enum import Enum

class CustomTripStatus(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"

class CustomTripBase(BaseModel):
    destination: str
    number_of_days: int
    number_of_participants: int
    start_date: date
    budget: float
    special_requirements: Optional[str] = None

class CustomTripCreate(CustomTripBase):
    pass

class CustomTripUpdate(BaseModel):
    destination: Optional[str] = None
    number_of_days: Optional[int] = None
    number_of_participants: Optional[int] = None
    start_date: Optional[date] = None
    budget: Optional[float] = None
    special_requirements: Optional[str] = None
    status: Optional[CustomTripStatus] = None

class CustomTrip(CustomTripBase):
    id: int
    user_id: int
    status: CustomTripStatus
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
