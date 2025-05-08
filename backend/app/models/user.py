from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
from ..database import Base
from ..schemas.user import UserRole

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(Enum(UserRole), default=UserRole.USER)
    full_name = Column(String)
    phone_number = Column(String, nullable=True)
    address = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    is_active = Column(Boolean, default=True)

    # Relationships
    bookings = relationship("Booking", back_populates="user")
    custom_trips = relationship("CustomTrip", back_populates="user")
    reviews = relationship("Review", back_populates="user")
    favorites = relationship("Favorite", back_populates="user")
    notifications = relationship("Notification", back_populates="user")
