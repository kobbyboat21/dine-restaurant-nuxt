import User from "~/server/models/User";
//import { UserSchema } from "~/server/validation"
//import { BookSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
	// Get data form body <<<< - reads from a component's form data
  //
	//const body = await readBody(event); // null <<< no readBody function
  //
  // ^^^ const user_data gets values/data from function inside Pinia store
	const body = await readBody(event); 
  // return { body }

	// create user
	try {
    // User.create(null) > HTTP 405 error > forbidden > store nothing to db
		await User.create(body);
		return { message: "User created" };
	} catch (e) {
		console.error(e);
	}
  
});
