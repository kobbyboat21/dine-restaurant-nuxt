import Order from "~/server/models/orders/OrderSchema"


export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  console.log("The id to be updated:")
  console.log(id)
  try { 
    await Order.findByIdAndDelete(id)
    console.log("[DATABASE]: MongoDB query sent to delete Order in DB")
    return {message: "Order deleted"}
  } catch (e) {
    console.error(e)
  }
  
})
