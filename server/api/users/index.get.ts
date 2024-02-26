import User from "~/server/models/User"

export default defineEventHandler(async(event) => {
  const users = await User.find()
  console.log("[DATABASE]: MongoDB query sent to get all User documents that at stored in the users collection")
  return users
})

