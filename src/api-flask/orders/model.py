class OrderModel:
    '''
    TODO:
        - Order Details (ID etc)
        - Timeline Details 
        - Delivery Details (Name, Address etc)
        - Platform Details 

    '''
    self.DETAILS = {
        "ID": int(),
        "PLATFORM_NAME": str(),
        "ORDER_ITEMS_LIST": list(),
        "ORDER_VALUE": float(),
        "PAYMENT_METHOD": str(),
        "TIMESTAMPS": {
            "PLACED": str(),
            "PREPARED": str(),
            "OUT_FOR_DELIVERY": str(),
            "DELIVERED": str(),
        }
    }
