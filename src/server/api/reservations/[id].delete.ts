import Book from "~/server/models/bookings/BookingSchema"


export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  console.log("The id to be updated:")
  console.log(id)
  try { 
    await Book.findByIdAndDelete(id)
    console.log("[DATABASE]: MongoDB query sent to delete Booking in DB")
    return {message: "Booking deleted"}
  } catch (e) {
    console.error(e)
  }
  
})
