from pydantic_settings import BaseSettings
from typing import Optional, List

class Settings(BaseSettings):
    # Database settings
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_SERVER: str
    POSTGRES_PORT: str
    POSTGRES_DB: str
    
    # JWT settings
    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    REFRESH_TOKEN_EXPIRE_DAYS: int
    
    # CORS settings
    CORS_ORIGINS: List[str] = ["*"]
    
    class Config:
        env_file = ".env"

settings = Settings() 