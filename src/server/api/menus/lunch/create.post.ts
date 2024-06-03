import Lunch from "~/server/models/meals/LunchSchema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // create meal
  try {
		await Lunch.create(body);
    console.log("[DATABASE]: MongoDB query sent to create Meal in DB")
		return { message: "Meal created" };
	} catch (e) {
		console.error(e);
	}

  return { body }
})
