# api.py
from flask import Flask
# Import Flask Blueprints (Routes)
from menus.routes import BLUEPRINT_MENUS
from reservations.routes import BLUEPRINT_RESERVATIONS
from orders.routes import BLUEPRINT_ORDERS
from inventory.routes import BLUEPRINT_INVENTORY
from tasks.routes import BLUEPRINT_TASKS
from workers.routes import BLUEPRINT_WORKERS

app = Flask(__name__)

@app.route('/api/ping', methods=['GET'])
def ping():
    return 'Pong'

# Register blueprints for API domains
app.register_blueprint(BLUEPRINT_MENUS)
app.register_blueprint(BLUEPRINT_RESERVATIONS)
app.register_blueprint(BLUEPRINT_ORDERS)
app.register_blueprint(BLUEPRINT_INVENTORY)
app.register_blueprint(BLUEPRINT_TASKS)
app.register_blueprint(BLUEPRINT_WORKERS)

if __name__ == '__main__':
    # Start Flask API
    app.run(debug=True)

