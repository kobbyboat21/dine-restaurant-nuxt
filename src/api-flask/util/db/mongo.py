from pymongo import MongoClient

class MongoDB:
    def __init__(self, DETAILS):
        self.DETAILS = DETAILS  # URI, Credentials, IP Address, Port etc
        self.client = MongoClient(self.DETAILS)

    def connect(self):
        try:
            self.client.admin.command('ping')
            print("Connected to MongoDB successfully!")
        except Exception as e:
            print(f"Error connecting to MongoDB: {e}")

    def create_collection(self, db_name, collection_name):
        db = self.client[db_name]
        collection = db[collection_name]
        return collection

    def read_collection(self, db_name, collection_name):
        db = self.client[db_name]
        collection = db[collection_name]
        return collection.find()

    def update_collection(self, db_name, collection_name, query, update):
        db = self.client[db_name]
        collection = db[collection_name]
        collection.update_many(query, update)

    def delete_collection(self, db_name, collection_name):
        db = self.client[db_name]
        collection = db[collection_name]
        collection.drop()

    def create_document(self, collection, document):
        collection.insert_one(document)

    def read_document(self, collection, query=None):
        if query:
            return collection.find(query)
        else:
            return collection.find()

    def update_document(self, collection, query, update):
        collection.update_many(query, update)

    def delete_document(self, collection, query):
        collection.delete_many(query)


if __name__ == "__main__":
    # Connect to MongoDB
    mongo = MongoDB("mongodb://root:example@localhost:27017/")
    mongo.connect()

    # Create a new database and collection
    db_name = "MONGODBTEST"
    collection_name = "workpls"
    collection = mongo.create_collection(db_name, collection_name)

    # Create a new document
    document = {"name": "John", "age": 30}
    mongo.create_document(collection, document)

    # Read documents from the collection
    documents = mongo.read_document(collection)
    for doc in documents:
        print(doc)

    # Update documents in the collection
    query = {"age": 30}
    update = {"$set": {"age": 35}}
    mongo.update_document(collection, query, update)

    # Delete documents from the collection
    # query = {"age": 35}
    # mongo.delete_document(collection, query)

    # # Delete the collection
    # mongo.delete_collection(db_name, collection_name)

