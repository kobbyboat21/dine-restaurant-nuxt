from flask import Blueprint

BLUEPRINT_ORDERS = Blueprint('orders', __name__)

@BLUEPRINT_ORDERS.route('/api/orders', methods=['GET'])
def version():
    return 'Orders'
