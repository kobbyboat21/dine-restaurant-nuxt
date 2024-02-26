import Dinner from "~/server/models/meals/DinnerSchema"

export default defineEventHandler(async(event) => {
  const meals = await Dinner.find()
  console.log("[DATABASE]: MongoDB query sent to get all Meal documents that at stored in the meals collection")
  return meals
})

