import Order from "~/server/models/orders/OrderSchema"

export default defineEventHandler(async(event) => {
  const orders = await Order.find()
  console.log("[DATABASE]: MongoDB query sent to get all Orders documents that at stored in the orders collection")
  return orders
})

