import { Schema, model } from 'mongoose'
import bcrypt from "mongoose-bcrypt";

const UserSchema =  new Schema({
  _id: { type: String, required: true, unique: true }, // Use a unique string as the id
  username: { type: String, required: true, unique: true }, // Unique username
  email: { type: String, required: true, unique: true }, // Unique email
  password: { type: String, required: true, bcrypt: true } // Plain text password (will be hashed before saving)
});


UserSchema.plugin(bcrypt);
/* VERIFY PASSWORDS WITH:
 // Verify password with callback
user.verifyPassword('plaintextPassword', function(err, isMatch) {
  if (err) return handleError(err);
  // isMatch will be true if the password matches
});

// Verify password with Promise
user.verifyPassword('plaintextPassword')
  .then(isMatch => {
    // isMatch will be true if the password matches
  })
  .catch(err => handleError(err));
*/

export default model("User", UserSchema);
