class OrderService:
    def __init__(self, ORDERS_REPOSITORY):
        self.ORDERS_REPOSITORY = ORDERS_REPOSITORY

    def upcoming_orders(self, start_date=None, end_date=None):
        from bson import json_util
        query = {
            "$or": [
                {"timestamps.prepared": None},
                {"timestamps.out_for_delivery": None},
                {"timestamps.delivered": None}
            ]
        }
        # print("UPCOMING2", start_date, end_date)
        if start_date and end_date:
            query["timestamps.placed"] = {"$gte": start_date, "$lte": end_date}
            orders = self.ORDERS_REPOSITORY.read_order(query)
            orders = json_util.dumps(orders)
        else:
            orders = "NO DATA"
        return orders

    def completed_orders(self, start_date=None, end_date=None):
        from bson import json_util
        query = {
            "timestamps.delivered": {"$ne": None}
        }
        if start_date and end_date:
            query["timestamps.delivered"] = {"$gte": start_date, "$lte": end_date}
        orders = self.ORDERS_REPOSITORY.read_order(query)
        orders = json_util.dumps(orders)
        return orders

    def most_popular_items(self):
        pipeline = [
            {"$unwind": "$orderItemsList"},
            {"$group": {"_id": "$orderItemsList", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
            {"$limit": 3}
        ]
        #TODO: Deserialise List and find most popular items from that - this is buggy
        return self.ORDERS_REPOSITORY.aggregate(pipeline)

    # Most Popular Platform
    def most_popular_platform(self, start_date=None, end_date=None):
        #TODO: If no date range passed through, set to 1 year ago from today and today's date
        pipeline = [
            {"$match": {"timestamps.placed": {"$gte": start_date, "$lte": end_date}}} if start_date and end_date else {}
        ]
        pipeline.extend([
            {"$group": {"_id": "$platformName", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
            {"$limit": 1}
        ])
        result = self.ORDERS_REPOSITORY.aggregate(pipeline)
        if result:
            return result[0]["_id"]  # Return the platform name with highest count
        else:
            return 'NO DATA'  # Return 'NO DATA' if no results

    def most_popular_payment_method(self, start_date=None, end_date=None):
        pipeline = [
            {"$match": {"timestamps.placed": {"$gte": start_date, "$lte": end_date}}} if start_date and end_date else {},
            {"$match": {"paymentMethod": {"$ne": None}}},  # Filter out documents with null payment_method
            {"$group": {"_id": "$paymentMethod", "count": {"$sum": 1}}},  # Group by payment_method and count occurrences
            {"$sort": {"count": -1}},  # Sort by count in descending order
            {"$limit": 1}  # Take the first result, which is the most popular
        ]
        result = self.ORDERS_REPOSITORY.aggregate(pipeline)
        if result:
            return result[0]["_id"]  # Return the payment_method with highest count
        else:
            return 'NO DATA'  # Return 'NO DATA' if no results


    def median_order_value(self, start_date=None, end_date=None):
        pipeline = [
            {"$match": {"timestamps.placed": {"$gte": start_date, "$lte": end_date}}} if start_date and end_date else {},
            {"$match": {"orderValue": {"$ne": None}}},  # Filter out documents with null ORDER_VALUE
            {"$group": {"_id": None, "order_values": {"$push": "$orderValue"}}},  # Group all order values into an array
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
            "placed": placed.isoformat(),
            # "PREPARED": prepared.isoformat(),
            # "OUT_FOR_DELIVERY": out_for_delivery.isoformat(),
            # "DELIVERED": delivered.isoformat(),
            "prepared": prepared,
            "out_for_delivery": out_for_delivery,
            "delivered": delivered,
        }

        name = fake.name()
        # address = fake.address()
        address = {
            "street": "Street",
            "propertyNumber": "45",
            "city": "London",
            "region": "England",
            "country": "UK",
            "zipCode": "SW1 4AC",

        }

        delivery_info = {
            "name": name,
            "address": address,
        }

        order_model = {
            "orderId": order_id,
            "customerId": customer_id,
            "platformName": platform_name,
            "orderItemsList": order_items_list,
            "orderValue": order_value,
            "paymentMethod": payment_method,
            "timestamps": timestamps,
            "deliveryInfo": delivery_info,
        }

        return order_model

