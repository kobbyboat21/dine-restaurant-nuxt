from flask import Blueprint

BLUEPRINT_TASKS = Blueprint('tasks', __name__)

@BLUEPRINT_TASKS.route('/api/tasks', methods=['GET'])
def version():
    return 'Tasks'
