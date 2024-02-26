import Lunch from "~/server/models/meals/LunchSchema"

export default defineEventHandler(async(event) => {
  const meals = await Lunch.find()
  console.log("[DATABASE]: MongoDB query sent to get all Meal documents that at stored in the meals collection")
  return meals
})

