class OrderService:
    def __init__(self, ORDERS_REPOSITORY):
        self.ORDERS_REPOSITORY = ORDERS_REPOSITORY

    def upcoming_orders(self):
        query = {
            "$or": [
                {"timestamps.prepared": None},
                {"timestamps.out_for_delivery": None},
                {"timestamps.delivered": None}
            ]
        }
        return self.ORDERS_REPOSITORY.read_order(query)

    def completed_orders(self):
        query = {
            "timestamps.delivered": {"$ne": None}
        }
        return self.ORDERS_REPOSITORY.read_order(query)

    def most_popular_items(self):
        pipeline = [
            {"$unwind": "$order_items"},
            {"$group": {"_id": "$order_items", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
            {"$limit": 3}
        ]
        return self.ORDERS_REPOSITORY.aggregate(pipeline)

    def most_popular_platform(self):
        pipeline = [
            {"$group": {"_id": "$platform_name", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
            {"$limit": 1}
        ]
        result = self.ORDERS_REPOSITORY.aggregate(pipeline)
        return result[0] if result else 'NO DATA'

    def most_popular_payment_method(self):
        pipeline = [
            {"$group": {"_id": "$payment_method", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}},
            {"$limit": 1}
        ]
        result = self.ORDERS_REPOSITORY.aggregate(pipeline)
        return result[0] if result else 'NO DATA'

    def median_order_value(self):
        # icl im finna do this shit later on
        return 'WORK IN PROGRESS [TODO]'
