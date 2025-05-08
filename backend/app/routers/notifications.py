from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from ..models import notification as notification_model
from ..schemas import notification as notification_schema
from ..auth.jwt import get_current_user
from ..models import user as user_model

router = APIRouter()

@router.get("/notifications", response_model=List[notification_schema.Notification])
def get_notifications(
    db: Session = Depends(get_db),
    current_user: user_model.User = Depends(get_current_user)
):
    notifications = db.query(notification_model.Notification).filter(
        notification_model.Notification.user_id == current_user.id
    ).order_by(notification_model.Notification.created_at.desc()).all()
    return notifications

@router.put("/notifications/{notification_id}/read")
def mark_notification_as_read(
    notification_id: int,
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user)
):
    user = db.query(user_model.User).filter(user_model.User.email == current_user).first()
    notification = db.query(notification_model.Notification).filter(
        notification_model.Notification.id == notification_id,
        notification_model.Notification.user_id == user.id
    ).first()
    
    if not notification:
        raise HTTPException(status_code=404, detail="Notification not found")
    
    notification.is_read = True
    db.commit()
    return {"message": "Notification marked as read"} 