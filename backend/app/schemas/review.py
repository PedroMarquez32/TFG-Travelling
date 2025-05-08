from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ReviewBase(BaseModel):
    rating: float
    comment: Optional[str] = None

class ReviewCreate(ReviewBase):
    rating: float
    comment: str

class Review(ReviewBase):
    id: int
    user_id: int
    trip_id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True 