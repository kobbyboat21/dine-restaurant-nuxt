import Dinner from "~/server/models/meals/DinnerSchema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // create meal
  try {
		await Dinner.create(body);
    console.log("[DATABASE]: MongoDB query sent to create Meal in DB")
		return { message: "Meal created" };
	} catch (e) {
		console.error(e);
	}

  return { body }
})
