import Book from "~/server/models/bookings/BookingSchema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // create booking
  try {
		await Book.create(body);
    console.log("[DATABASE]: MongoDB query sent to create Booking in DB")
		return { message: "Booking created" };
	} catch (e) {
		console.error(e);
	}

  return { body }
})
