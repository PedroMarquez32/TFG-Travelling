from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Enum, JSON
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from ..database import Base
from ..schemas.notification import NotificationType, NotificationPriority

class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    type = Column(Enum(NotificationType))
    priority = Column(Enum(NotificationPriority), default=NotificationPriority.MEDIUM)
    title = Column(String)
    message = Column(String)
    is_read = Column(Boolean, default=False)
    notification_metadata = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="notifications") 