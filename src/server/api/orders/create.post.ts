import Order from "~/server/models/orders/OrderSchema"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // create booking
  try {
		await Order.create(body);
    console.log("[DATABASE]: MongoDB query sent to create Order in DB")
		return { message: "Order created" };
	} catch (e) {
		console.error(e);
	}

  return { body }
})
