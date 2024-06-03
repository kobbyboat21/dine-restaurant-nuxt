import Breakfast from "~/server/models/meals/BreakfastSchema"


export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  console.log("The id to be updated:")
  console.log(id)
  try { 
    await Breakfast.findByIdAndDelete(id)
    console.log("[DATABASE]: MongoDB query sent to delete Meal in DB")
    return {message: "Meal deleted"}
  } catch (e) {
    console.error(e)
  }
  
})
