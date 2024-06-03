
import User from "~/server/models/User";

export default defineEventHandler(async (event) => {

await setUserSession(event, {
    User,
    loggedInAt: new Date(),
    // Any extra fields
  });

  return User;

  });
