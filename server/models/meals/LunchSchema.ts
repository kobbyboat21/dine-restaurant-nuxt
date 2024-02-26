import { Schema, model } from 'mongoose'

const LunchMealSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  description: String,
  image: String,
  ingredients: String,
  section: String,

})
export default model("Lunch", LunchMealSchema)
