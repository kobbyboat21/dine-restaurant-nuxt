import { defineEventHandler, readBody } from 'h3'
import User from '~/server/models/User' // Import your User model

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  // Check if email and password are provided
  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email })

    // If user is not found, return an error
    if (!user) {
      return { error: 'Invalid email or password' }
    }

    // Verify the password using the verifyPassword method provided by mongoose-bcrypt
    const isMatch = await user.verifyPassword(password)
    console.log('Input: ', body)
    console.log('User: ', user)
    console.log('IS MATCH: ', isMatch)

    // If the password doesn't match, return an error
    if (!isMatch) {
      return { error: 'Invalid email or password' }
    }

    // If the email and password are valid, return the user object
    return { user }
  } catch (err) {
    // Handle any errors that occurred during the authentication process
    console.error(err)
    return { error: 'An error occurred during authentication' }
  }
})

