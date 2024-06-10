from flask import Blueprint
from .service import BookingService
from .repository import BookingRepository
from util.db.mongo import MongoDB


MONGO_URI = "mongodb://root:example@localhost:27017/"
BLUEPRINT_BOOKINGS = Blueprint('bookings', __name__)

@BLUEPRINT_BOOKINGS.route('/api/bookings', methods=['GET'])
def version():
    return 'v0.1 - bookings'

# Upcoming Bookings
@BLUEPRINT_BOOKINGS.route('/api/bookings/upcoming', methods=['GET'])
def upcoming_bookings():
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    booking_repository = BookingRepository(mongo)
    booking_service = BookingService(booking_repository)
    return booking_service.upcoming_bookings()


# Completed Bookings
@BLUEPRINT_BOOKINGS.route('/api/bookings/completed', methods=['GET'])
def completed_bookings():
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    booking_repository = BookingRepository(mongo)
    booking_service = BookingService(booking_repository)
    return booking_service.completed_bookings()

# Cancelled Bookings
@BLUEPRINT_BOOKINGS.route('/api/bookings/cancelled', methods=['GET'])
def cancelled_bookings():
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    booking_repository = BookingRepository(mongo)
    booking_service = BookingService(booking_repository)
    return booking_service.cancelled_bookings()

# Remaining Capacity
@BLUEPRINT_BOOKINGS.route('/api/bookings/remaining_capacity', methods=['GET'])
def remaining_capacity():
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    booking_repository = BookingRepository(mongo)
    booking_service = BookingService(booking_repository)
    return booking_service.remaining_capacity()

# Populate
@BLUEPRINT_BOOKINGS.route('/api/bookings/populate', methods=['GET'])
def populate():
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    booking_repository = BookingRepository(mongo)
    booking_service = BookingService(booking_repository)
    booking_service.populate(10)
    return 'success'
