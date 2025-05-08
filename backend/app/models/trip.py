from sqlalchemy import Column, Integer, String, Float, Date, DateTime, ForeignKey, Table, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from ..database import Base

# Tabla de asociación para las características de los viajes
trip_features = Table(
    'trip_features',
    Base.metadata,
    Column('trip_id', Integer, ForeignKey('trips.id')),
    Column('feature_id', Integer, ForeignKey('features.id'))
)

class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    destination = Column(String, index=True)
    description = Column(String)
    price = Column(Float)
    start_date = Column(Date)
    end_date = Column(Date)
    max_participants = Column(Integer)
    current_participants = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    is_active = Column(Boolean, default=True)
    original_price = Column(Float)  # Precio original del viaje
    
    # Relationships
    bookings = relationship("Booking", back_populates="trip")
    features = relationship("Feature", secondary=trip_features, back_populates="trips")
    reviews = relationship("Review", back_populates="trip")
    images = relationship("TripImage", back_populates="trip")
    price_history = relationship("PriceHistory", back_populates="trip")
    favorites = relationship("Favorite", back_populates="trip")

class Feature(Base):
    __tablename__ = "features"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)
    
    # Relationships
    trips = relationship("Trip", secondary=trip_features, back_populates="features")

class TripImage(Base):
    __tablename__ = "trip_images"

    id = Column(Integer, primary_key=True, index=True)
    trip_id = Column(Integer, ForeignKey("trips.id"))
    image_url = Column(String)
    is_main = Column(Boolean, default=False)
    
    # Relationships
    trip = relationship("Trip", back_populates="images")

class PriceHistory(Base):
    __tablename__ = "price_history"

    id = Column(Integer, primary_key=True, index=True)
    trip_id = Column(Integer, ForeignKey("trips.id"))
    price = Column(Float)
    recorded_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    trip = relationship("Trip", back_populates="price_history")
