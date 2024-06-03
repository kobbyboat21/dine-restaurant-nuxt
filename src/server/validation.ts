import Joi from "joi"

// user validation 
export const UserSchema = Joi.object({
  name: Joi.string().min(3).required() 
})


