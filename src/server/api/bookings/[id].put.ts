import Book from "~/server/models/bookings/BookingSchema"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = event.context.params.id;
  console.log("The id to be updated:")
  console.log(id)
  console.log("The body to be updated:")
  console.log(body)
  try { 
    await Book.findByIdAndUpdate(id, body)
    console.log("[DATABASE]: MongoDB query sent to edit Booking in DB")
    return {message: "Booking edited"}
  } catch (e) {
    console.error(e)
  }
  
})
