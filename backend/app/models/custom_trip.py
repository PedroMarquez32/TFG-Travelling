from sqlalchemy import Column, Integer, String, Float, Date, DateTime, ForeignKey, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from ..database import Base

class CustomTripStatus(enum.Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"

class CustomTrip(Base):
    __tablename__ = "custom_trips"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    destination = Column(String, index=True)
    number_of_days = Column(Integer)
    number_of_participants = Column(Integer)
    start_date = Column(Date)
    budget = Column(Float)
    status = Column(Enum(CustomTripStatus), default=CustomTripStatus.PENDING)
    special_requirements = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="custom_trips")
    bookings = relationship("Booking", back_populates="custom_trip")
