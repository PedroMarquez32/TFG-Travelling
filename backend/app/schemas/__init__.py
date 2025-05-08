# Importar los schemas base primero
from .user import UserBase, UserCreate, User, UserRole
from .trip import TripBase, TripCreate, Trip
from .booking import BookingBase, BookingCreate, Booking, BookingStatus
from .custom_trip import CustomTripBase, CustomTripCreate, CustomTrip, CustomTripStatus
from .review import ReviewBase, ReviewCreate, Review
from .favorite import FavoriteBase, FavoriteCreate, Favorite
from .notification import NotificationBase, NotificationCreate, Notification, NotificationType, NotificationPriority
