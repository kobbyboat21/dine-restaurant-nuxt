from flask import Blueprint

BLUEPRINT_ORDERS = Blueprint('orders', __name__)

@BLUEPRINT_ORDERS.route('/api/orders', methods=['GET'])
def version():
    return 'Orders'


# Upcoming Orders
@BLUEPRINT_ORDERS.route('/api/orders/upcoming', methods=['GET'])
def upcoming_orders():
    '''
    Track upcoming orders:
        - Daily
        - Weekly
        - Monthly
        - Quarterly
        - Annually
    '''
    return 'Upcoming Orders'

# Completed Orders
@BLUEPRINT_ORDERS.route('/api/orders/completed', methods=['GET'])
def completed_orders():
    '''
    Track completed orders:
        - Daily
        - Weekly
        - Monthly
        - Quarterly
        - Annually
    '''
    return 'Completed Orders'

# Most Popular Items
'''
Track most popular items:
    - Overall
    - By Section:
            - Breakfast
            - Lunch
            - Dinner
    - By Time Period:
        - Daily
        - Weekly
        - Monthly
        - Quarterly
        - Annually
'''

# Most Popular Platform
'''
Track most popular platform:
    - Overall
    - By Section:
            - Breakfast
            - Lunch
            - Dinner
    - By Time Period:
        - Daily
        - Weekly
        - Monthly
        - Quarterly
        - Annually '''

# Most Popular Payment Method
'''
Track most popular payment method:
    - Overall
    - By Section:
            - Breakfast
            - Lunch
            - Dinner
    - By Time Period:
        - Daily
        - Weekly
        - Monthly
        - Quarterly
        - Annually
'''

# Median Order Value
'''
Track median order volume:
    - Overall
    - By Section:
            - Breakfast
            - Lunch
            - Dinner
    - By Time Period:
        - Daily
        - Weekly
        - Monthly
        - Quarterly
        - Annually
'''

# Find Order 
'''
Find order by:
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
