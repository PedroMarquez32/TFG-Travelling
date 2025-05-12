from pydantic_settings import BaseSettings
from typing import Optional, List

class Settings(BaseSettings):
    # Database settings
    DATABASE_URL: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_SERVER: str
    POSTGRES_PORT: str
    POSTGRES_DB: str
    
    # JWT settings
    SECRET_KEY: str = "your-secret-key-here"  # Cambia esto en producción
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    
    # CORS settings
    CORS_ORIGINS: List[str] = ["http://localhost:4200"]  # Añade específicamente tu frontend
    
    class Config:
        env_file = ".env"
        case_sensitive = False

settings = Settings() 