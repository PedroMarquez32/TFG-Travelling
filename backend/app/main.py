from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from .database import engine, get_db
from .models import user, trip, custom_trip, booking, review, favorite, notification
from .schemas import user as user_schema
from .schemas import trip as trip_schema
from .schemas import custom_trip as custom_trip_schema
from .schemas import booking as booking_schema
from .schemas import review as review_schema
from .routers import auth, users, trips, bookings, custom_trips, reviews, favorites, notifications
from fastapi.responses import RedirectResponse

# Create database tables
user.Base.metadata.create_all(bind=engine)
trip.Base.metadata.create_all(bind=engine)
custom_trip.Base.metadata.create_all(bind=engine)
booking.Base.metadata.create_all(bind=engine)
review.Base.metadata.create_all(bind=engine)
favorite.Base.metadata.create_all(bind=engine)
notification.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Travel Agency API",
    description="API para la gestión de una agencia de viajes",
    version="1.0.0",
    docs_url="/",
    redoc_url="/redoc"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(trips.router, prefix="/trips", tags=["trips"])
app.include_router(bookings.router, prefix="/bookings", tags=["bookings"])
app.include_router(custom_trips.router, prefix="/custom-trips", tags=["custom-trips"])
app.include_router(reviews.router, prefix="/reviews", tags=["reviews"])
app.include_router(favorites.router, prefix="/favorites", tags=["favorites"])
app.include_router(notifications.router, prefix="/notifications", tags=["notifications"])

# Root endpoint
@app.get("/")
def read_root():
    return RedirectResponse(url="/docs")

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "healthy"}
