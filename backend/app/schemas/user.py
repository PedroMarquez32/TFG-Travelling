from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from enum import Enum

class UserRole(str, Enum):
    ADMIN = "admin"
    USER = "user"

class UserBase(BaseModel):
    email: str
    username: str
    full_name: str
    phone_number: Optional[str] = None
    address: Optional[str] = None

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    role: UserRole
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
