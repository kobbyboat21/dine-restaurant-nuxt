import Order from "~/server/models/orders/OrderSchema"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = event.context.params.id;
  console.log("The id to be updated:")
  console.log(id)
  console.log("The body to be updated:")
  console.log(body)
  try { 
    await Order.findByIdAndUpdate(id, body)
    console.log("[DATABASE]: MongoDB query sent to edit Order in DB")
    return {message: "Order edited"}
  } catch (e) {
    console.error(e)
  }
  
})
