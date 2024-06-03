from flask import Blueprint

BLUEPRINT_INVENTORY = Blueprint('inventory', __name__)

@BLUEPRINT_INVENTORY.route('/api/inventory', methods=['GET'])
def version():
    return 'INVENTORY'

