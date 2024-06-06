import { defineEventHandler, readBody } from 'h3'
import { sign } from 'jsonwebtoken'
import User from '~/server/models/User'

const SECRET = 'dummy'

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

    // Verify the password using the comparePassword method
    const isMatch = await user.verifyPassword(password)
    console.log('IS MATCH:', isMatch)

    // If the password doesn't match, return an error
    if (!isMatch) {
      return { error: 'Invalid email or password' }
    }

    const expiresIn = 1500
    const refreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
    const userObject = {
      _id: user._id,
      username: user.username,
      email: user.email,
      picture: 'https://github.com/nuxt.png',
      name: user.username
    }

    const accessToken = sign({ ...userObject, scope: ['test', 'user'] }, SECRET, { expiresIn })
    const refreshTokens = {
      accessToken,
      user: userObject
    }

    return {
      token: {
        accessToken,
        refreshToken
      }
    }
  } catch (err) {
    // Handle any errors that occurred during the authentication process
    console.error(err)
    return { error: 'An error occurred during authentication' }
  }
})

