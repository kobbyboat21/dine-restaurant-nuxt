# TODO

- Make BookingModal component
    - Inside component, DatePicker to console log date locally
    - Inside component, Dropdown to console log time locally
- Make BookingStore middleware (Pinia)
    - Extract date into Pinia store state
    - Extract time into Pinia store state
    - createBooking()
        - Use this.date & this.time to assign date & time to a variable
        - Pass through that variable to the body of $fetch
            - POST request to the API endpoint for bookings
- Make Booking API endpoint
    - receive 
