from flask import Blueprint

BLUEPRINT_MENUS = Blueprint('menus', __name__)

@BLUEPRINT_MENUS.route('/api/menus', methods=['GET'])
def version():
    return 'Menus'


