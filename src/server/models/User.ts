import { Schema, model } from 'mongoose'
import bcrypt from "mongoose-bcrypt";

const UserSchema = new Schema ({
  id: String,
  username: String,
  email: String,

})

export default model("User", UserSchema);
