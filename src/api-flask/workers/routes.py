from flask import Blueprint

BLUEPRINT_WORKERS = Blueprint('workers', __name__)

@BLUEPRINT_WORKERS.route('/api/workers', methods=['GET'])
def version():
    return 'Workers'
