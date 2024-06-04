class ModelOrders:
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


if __name__ == "__main__":
    # Connect to MongoDB
    mongo = MongoDB("mongodb://root:example@localhost:27017/")
    mongo.connect()

    # Create an instance of ModelOrders
    orders = ModelOrders(mongo)

    # Create a new order
    order_data = {
        "order_id": 1,
        "platform_name": "Uber Eats",
        "order_items": ["Large McChicken Meal", "Oreo Milkshake"],
        "order_value": 11.98,
        "payment_method": "Credit Card",
        "timestamps": {
            "placed": "2023-06-04T10:30:00Z",
            "prepared": None,
            "out_for_delivery": None,
            "delivered": None
        }
    }
    orders.create_order(order_data)

    # Read orders
    all_orders = orders.read_order()
    for order in all_orders:
        print(order)

    # Update an order
    query = {"order_id": 1}
    update = {"$set": {"timestamps.prepared": "2023-06-04T11:00:00Z"}}
    orders.update_order(query, update)

    # Delete an order
    # query = {"order_id": 1}
    # orders.delete_order(query)

