from pydantic import BaseModel
from datetime import datetime

class FavoriteBase(BaseModel):
    trip_id: int

class FavoriteCreate(FavoriteBase):
    pass

class Favorite(FavoriteBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True 