from sqlalchemy import Column, Integer, DateTime, ForeignKey, Table
from sqlalchemy.orm import relationship
from datetime import datetime
from ..database import Base

class Favorite(Base):
    __tablename__ = "favorites"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    trip_id = Column(Integer, ForeignKey("trips.id"))
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="favorites")
    trip = relationship("Trip", back_populates="favorites") 