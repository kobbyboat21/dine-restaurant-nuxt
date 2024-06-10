class BookingRepository:
    def __init__(self, DB):
        # Assign MongoDB database to object
        self.DB = DB
        self.db_name = "test"
        self.collection_name = "books"
        self.collection = self.DB.create_collection(self.db_name, self.collection_name)

    def create_booking(self, booking_data):
        self.DB.create_document(self.collection, booking_data)

    def read_booking(self, query=None):
        '''
            Read booking by:
                - Booking ID
                - Booking Name
                - Booking Date
                - Booking Time
                - Booking Section
                - Booking Capacity

        '''
        return self.DB.read_document(self.collection, query)

    def update_booking(self, query, update):
        '''
            Update a booking's:
                - Booking ID
                - Booking Name
                - Booking Date
                - Booking Time
                - Booking Section
                - Booking Capacity
                
        '''
        self.DB.update_document(self.collection, query, update)

    def delete_booking(self, query):
        self.DB.delete_document(self.collection, query)

    def aggregate(self, pipeline):
        return list(self.collection.aggregate(pipeline))
