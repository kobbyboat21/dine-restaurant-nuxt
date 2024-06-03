import Breakfast from "~/server/models/meals/BreakfastSchema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // create meal
  try {
		await Breakfast.create(body);
    console.log("[DATABASE]: MongoDB query sent to create Meal in DB")
		return { message: "Meal created" };
	} catch (e) {
		console.error(e);
	}

  return { body }
})
