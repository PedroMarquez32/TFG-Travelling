from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime, date

class FeatureBase(BaseModel):
    name: str
    description: Optional[str] = None

class FeatureCreate(FeatureBase):
    pass

class Feature(FeatureBase):
    id: int

    class Config:
        from_attributes = True

class TripImageBase(BaseModel):
    image_url: str
    is_main: bool = False

class TripImageCreate(TripImageBase):
    pass

class TripImage(TripImageBase):
    id: int
    trip_id: int

    class Config:
        from_attributes = True

class TripBase(BaseModel):
    title: str
    destination: str
    description: str
    price: float
    start_date: date
    end_date: date
    max_participants: int

class TripCreate(TripBase):
    features: List[int] = []  # Lista de IDs de características
    images: List[str] = []    # Lista de URLs de imágenes

class TripUpdate(BaseModel):
    title: Optional[str] = None
    destination: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    max_participants: Optional[int] = None
    is_active: Optional[bool] = None

class Trip(TripBase):
    id: int
    current_participants: int
    created_at: datetime
    updated_at: datetime
    is_active: bool
    features: List[Feature] = []
    images: List[TripImage] = []

    class Config:
        from_attributes = True
