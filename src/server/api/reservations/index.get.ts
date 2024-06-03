import Book from "~/server/models/bookings/BookingSchema"

export default defineEventHandler(async(event) => {
  const bookings = await Book.find()
  console.log("[DATABASE]: MongoDB query sent to get all Booking documents that at stored in the meals collection")
  return bookings
})

