from flask import Blueprint, request
from .service import OrderService
from .repository import OrderRepository
from util.db.mongo import MongoDB


MONGO_URI = "mongodb://root:example@localhost:27017/"
BLUEPRINT_ORDERS = Blueprint('orders', __name__)

@BLUEPRINT_ORDERS.route('/api/orders', methods=['GET'])
def version():
    return 'v0.1 - orders'

# Upcoming Orders
@BLUEPRINT_ORDERS.route('/api/orders/upcoming', methods=['GET'])
def upcoming_orders():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    order_repository = OrderRepository(mongo)
    order_service = OrderService(order_repository)
    return order_service.upcoming_orders(start_date, end_date)


@BLUEPRINT_ORDERS.route('/api/orders/completed', methods=['GET'])
def completed_orders():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    order_repository = OrderRepository(mongo)
    order_service = OrderService(order_repository)
    return order_service.completed_orders(start_date, end_date)

# Most Popular Items
@BLUEPRINT_ORDERS.route('/api/orders/most-popular-items', methods=['GET'])
def most_popular_items():
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    order_repository = OrderRepository(mongo)
    order_service = OrderService(order_repository)
    return order_service.most_popular_items()

# Most Popular Platform
@BLUEPRINT_ORDERS.route('/api/orders/most-popular-platform', methods=['GET'])
def most_popular_platform():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    order_repository = OrderRepository(mongo)
    order_service = OrderService(order_repository)
    return order_service.most_popular_platform(start_date, end_date)

# Most Popular Payment Method
@BLUEPRINT_ORDERS.route('/api/orders/most-popular-payment-method', methods=['GET'])
def most_popular_payment_method():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    order_repository = OrderRepository(mongo)
    order_service = OrderService(order_repository)
    return order_service.most_popular_payment_method(start_date, end_date)

# Median Order Value
@BLUEPRINT_ORDERS.route('/api/orders/median-order-value', methods=['GET'])
def median_order_value():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    order_repository = OrderRepository(mongo)
    order_service = OrderService(order_repository)
    return order_service.median_order_value(start_date, end_date)


@BLUEPRINT_ORDERS.route('/api/orders/populate', methods=['GET'])
def populate_orders():
    mongo = MongoDB(MONGO_URI)
    mongo.connect()
    order_repository = OrderRepository(mongo)
    order_service = OrderService(order_repository)
    order_service.populate_orders(5)
    return 'success'

