import { Schema, model } from 'mongoose'
import bcrypt from 'mongoose-bcrypt'

const UserSchema = new Schema({
  _id: { type: String, required: true, unique: true }, // Use a unique string as the id
  username: { type: String, required: true, unique: true }, // Unique username
  email: { type: String, required: true, unique: true }, // Unique email
  password: { type: String, required: true, bcrypt: true } // Plain text password (will be hashed before saving)
})

UserSchema.plugin(bcrypt, { rounds: 10 }) // Use the bcrypt plugin with a salt rounds value of 10

export default model('User', UserSchema)

