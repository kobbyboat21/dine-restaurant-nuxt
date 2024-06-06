class OrderRepository:
    def __init__(self, DB):
        # Assign MongoDB database to object
        self.DB = DB
        self.db_name = "orders_db"
        self.collection_name = "orders"
        self.collection = self.DB.create_collection(self.db_name, self.collection_name)

    def create_order(self, order_data):
        self.DB.create_document(self.collection, order_data)

    def read_order(self, query=None):
        '''
            Read order by:
                - Order ID
                - Platform Name
                - Order Item(s) Name
                - Order Value (Transaction Price)
                - Payment Method
                - Timestamp: Placed
                - Timestamp: Prepared
                - Timestamp: Out for Delivery
                - Timestamp: Delivered
        '''
        return self.DB.read_document(self.collection, query)

    def update_order(self, query, update):
        '''
            Update an order's:
                - Order ID
                - Platform Name
                - Order Item(s) Name
                - Order Value (Transaction Price)
                - Payment Method
                - Timestamp: Placed
                - Timestamp: Prepared
                - Timestamp: Out for Delivery
                - Timestamp: Delivered
        '''
        self.DB.update_document(self.collection, query, update)

    def delete_order(self, query):
        self.DB.delete_document(self.collection, query)

    def aggregate(self, pipeline):
        return list(self.collection.aggregate(pipeline))
