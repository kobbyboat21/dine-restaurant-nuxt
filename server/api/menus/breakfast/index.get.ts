import Breakfast from "~/server/models/meals/BreakfastSchema"

export default defineEventHandler(async(event) => {
  const meals = await Breakfast.find()
  console.log("[DATABASE]: MongoDB query sent to get all Meal documents that at stored in the meals collection")
  return meals
})

