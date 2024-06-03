from flask import Blueprint

BLUEPRINT_RESERVATIONS = Blueprint('reservations', __name__)

@BLUEPRINT_RESERVATIONS.route('/api/reservations', methods=['GET'])
def version():
    return 'Reservations'
