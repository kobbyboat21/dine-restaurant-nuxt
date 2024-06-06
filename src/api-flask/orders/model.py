class OrderModel:
    '''
    TODO:
        - Order Details (ID etc)
        - Timeline Details 
        - Delivery Details (Name, Address etc)
        - Platform Details 

    '''
    self.DETAILS = {
        "ORDER_ID": int(),
        "CUSTOMER_ID": int(),
        "PLATFORM_NAME": str(),
        "ORDER_ITEMS_LIST": list(),
        "ORDER_VALUE": float(),
        "PAYMENT_METHOD": str(),
        "TIMESTAMPS": {
            "PLACED": str(),
            "PREPARED": str(),
            "OUT_FOR_DELIVERY": str(),
            "DELIVERED": str(),
        },
        "DELIVERY_INFO": {
            "NAME": str(),
            "ADDRESS": str(), # Change to dictionary/custom object for country - region - city - zip code - street - property number
        },
    }
