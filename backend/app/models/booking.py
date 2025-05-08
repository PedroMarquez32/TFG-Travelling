from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
from ..database import Base
from ..schemas.booking import BookingStatus

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    trip_id = Column(Integer, ForeignKey("trips.id"), nullable=True)
    custom_trip_id = Column(Integer, ForeignKey("custom_trips.id"), nullable=True)
    status = Column(Enum(BookingStatus), default=BookingStatus.PENDING)
    booking_date = Column(DateTime, default=datetime.utcnow)
    total_price = Column(Float)
    number_of_participants = Column(Integer)
    special_requests = Column(String)
    
    # Relationships
    user = relationship("User", back_populates="bookings")
    trip = relationship("Trip", back_populates="bookings")
    custom_trip = relationship("CustomTrip", back_populates="bookings") 