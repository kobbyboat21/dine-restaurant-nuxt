import json
from bson import json_util

class BookingService:
    def __init__(self, BOOKINGS_REPOSITORY):
        self.BOOKINGS_REPOSITORY = BOOKINGS_REPOSITORY

    def upcoming_bookings(self):
        query = {
            "status": {"$eq": "upcoming"}
        }
        cursor = self.BOOKINGS_REPOSITORY.read_booking(query)
        bookings = [json.loads(json_util.dumps(cursor)) for doc in cursor]
        return bookings

    def completed_bookings(self):
        query = {
            "status": {"$eq": "completed"}
        }
        cursor = self.BOOKINGS_REPOSITORY.read_booking(query)
        bookings = [json.loads(json_util.dumps(cursor)) for doc in cursor]
        return bookings


    def cancelled_bookings(self):
        query = {
            "status": {"$eq": "cancelled"}
        }
        cursor = self.BOOKINGS_REPOSITORY.read_booking(query)
        bookings = [json.loads(json_util.dumps(cursor)) for doc in cursor]
        return bookings


    def remaining_capacity(self):
        total_cap = 200 # Will be manually inputted in settings by restarant down the line
        remaining = total_cap - len(self.upcoming_bookings()) #count upcoming bookings

        return remaining


    # Testing the api connects to the db correctly...
    def populate(self, quantity):
        print(f"Populating {quantity} bookings into the DB...")
        for booking in range(quantity):
            print(f"Generating Booking #{booking+ 1}...")
            booking_details = self.generate_test_booking()
            print(f"{booking_details}")
            self.BOOKINGS_REPOSITORY.create_booking(booking_details)
            print(f"Storing Booking #{booking + 1}  to DB...")


    def generate_test_booking(self):
        from faker import Faker
        import random
        from datetime import datetime

        fake = Faker()

        booking_id = fake.uuid4()
        booking_name = fake.name()
        booking_date = datetime.now()
        booking_section = random.choice(['Front View', 'Back View', 'Bar Island'])
        booking_status = random.choice(['upcoming', 'cancelled', 'completed'])
        # booking_status = 'cancelled'
        booking_capacity = fake.random_int(min=2, max=6)

        return {
                "id": booking_id,
                "name": booking_name,
                "section": booking_section,
                "status": booking_status,
                "capacity": booking_capacity,
                "datetime": booking_date,
        }

    
