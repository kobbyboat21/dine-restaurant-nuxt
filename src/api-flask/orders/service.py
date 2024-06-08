class OrderService:
    def __init__(self, ORDERS_REPOSITORY):
        self.ORDERS_REPOSITORY = ORDERS_REPOSITORY

    def upcoming_orders(self):
        from bson import json_util
        query = {
            "$or": [
                {"TIMESTAMPS.PREPARED": None},
                {"TIMESTAMPS.OUT_FOR_DELIVERY": None},
                {"TIMESTAMPS.DELIVERED": None}
            ]
        }
        orders = self.ORDERS_REPOSITORY.read_order(query)
        orders = json_util.dumps(orders)
        return orders

    def completed_orders(self):
        from bson import json_util
        query = {
            "TIMESTAMPS.DELIVERED": {"$ne": None}
        }
        orders = self.ORDERS_REPOSITORY.read_order(query)
        orders = json_util.dumps(orders)
        return orders

    def most_popular_items(self):
        pipeline = [
            {"$unwind": "$ORDER_ITEMS"},
            {"$group": {"_id": "$ORDER_ITEMS", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
            {"$limit": 3}
        ]
        #TODO: Deserialise List and find most popular items from that - this is buggy
        return self.ORDERS_REPOSITORY.aggregate(pipeline)

    def most_popular_platform(self):
        pipeline = [
            {"$group": {"_id": "$PLATFORM_NAME", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
            {"$limit": 1}
        ]
        result = self.ORDERS_REPOSITORY.aggregate(pipeline)
        if result:
            return result[0]["_id"] # Return the platform name with highest count
        else:
            return 'NO DATA' # Return 'NO DATA' if no results


    def most_popular_payment_method(self):
        pipeline = [
            {"$match": {"PAYMENT_METHOD": {"$ne": None}}}, # Filter out documents with null payment_method [2]
            {"$group": {"_id": "$PAYMENT_METHOD", "count": {"$sum": 1}}}, # Group by payment_method and count occurrences
            {"$sort": {"count": -1}}, # Sort by count in descending order
            {"$limit": 1} # Take the first result, which is the most popular
        ]
        result = self.ORDERS_REPOSITORY.aggregate(pipeline)
        if result:
            return result[0]["_id"] # Return the payment_method with highest count
        else:
            return 'NO DATA' # Return 'NO DATA' if no results


    def median_order_value(self):
        pipeline = [
            {"$match": {"ORDER_VALUE": {"$ne": None}}},  # Filter out documents with null ORDER_VALUE
            {"$group": {"_id": None, "order_values": {"$push": "$ORDER_VALUE"}}},  # Group all order values into an array
            {"$unwind": "$order_values"},  # Flatten the array of order values
            {"$sort": {"order_values": 1}},  # Sort the order values in ascending order
            {"$group": {"_id": None, "count": {"$sum": 1}, "sorted_values": {"$push": "$order_values"}}},  # Get the count and sorted order values
            {"$project": {"_id": 0, "count": 1, "sorted_values": 1, "median_index": {"$floor": {"$divide": ["$count", 2]}}}},  # Calculate the index of the median value
            {"$project": {"_id": 0, "count": 1, "sorted_values": 1, "median_index": 1, "median_value": {"$cond": [{"$eq": [{"$mod": ["$count", 2]}, 0]}, {"$arrayElemAt": ["$sorted_values", "$median_index"]}, {"$arrayElemAt": ["$sorted_values", {"$subtract": ["$median_index", 1]}]}]}}},  # Get the median value from the sorted array
            {"$project": {"_id": 0, "median_value": 1}}  # Project the median value
        ]

        result = self.ORDERS_REPOSITORY.aggregate(pipeline)
        if result:
            return str(result[0]["median_value"])
        else:
            return 'NO DATA'


    def populate_orders(self, quantity):
        print(f"Populating {quantity} orders into the DB...")
        for order in range(quantity):
            print(f"Generating Order #{order + 1}...")
            order_details = self.generate_test_order()
            print(f"Order #{order}: \n {order_details} \n\n---")
            self.ORDERS_REPOSITORY.create_order(order_details)
            print(f"Storing Order #{order + 1} to DB...")

    def generate_test_order(self):
        from faker import Faker
        from datetime import datetime, timedelta
        import random

        fake = Faker()

        order_id = fake.uuid4()
        customer_id = fake.uuid4()
        platform_name = fake.company()
        order_items_list = [fake.catch_phrase() for _ in range(random.randint(1, 5))]
        order_value = round(random.uniform(10.0, 500.0), 2)
        payment_method = random.choice(['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery'])

        # Generate random timestamps
        now = datetime.now()
        placed = now
        # prepared = now + timedelta(minutes=random.randint(10, 60))
        # out_for_delivery = prepared + timedelta(minutes=random.randint(30, 120))
        # delivered = out_for_delivery + timedelta(minutes=random.randint(30, 120))
        prepared = None
        out_for_delivery = None
        delivered = None

        timestamps = {
            "PLACED": placed.isoformat(),
            # "PREPARED": prepared.isoformat(),
            # "OUT_FOR_DELIVERY": out_for_delivery.isoformat(),
            # "DELIVERED": delivered.isoformat(),
            "PREPARED": prepared,
            "OUT_FOR_DELIVERY": out_for_delivery,
            "DELIVERED": delivered,
        }

        name = fake.name()
        address = fake.address()

        delivery_info = {
            "NAME": name,
            "ADDRESS": address,
        }

        order_model = {
            "ORDER_ID": order_id,
            "CUSTOMER_ID": customer_id,
            "PLATFORM_NAME": platform_name,
            "ORDER_ITEMS_LIST": order_items_list,
            "ORDER_VALUE": order_value,
            "PAYMENT_METHOD": payment_method,
            "TIMESTAMPS": timestamps,
            "DELIVERY_INFO": delivery_info,
        }

        return order_model

