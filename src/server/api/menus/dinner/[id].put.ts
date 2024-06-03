import Dinner from "~/server/models/meals/DinnerSchema"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = event.context.params.id;
  console.log("The id to be updated:")
  console.log(id)
  console.log("The body to be updated:")
  console.log(body)
  try { 
    await Dinner.findByIdAndUpdate(id, body)
    console.log("[DATABASE]: MongoDB query sent to edit Meal in DB")
    return {message: "Meal edited"}
  } catch (e) {
    console.error(e)
  }
  
})
