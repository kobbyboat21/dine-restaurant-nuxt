import { Schema, model } from 'mongoose'

const BookingSchema = new Schema({
  id: Number,
  name: String,
  section: String,
  capacity: String,
  datetime: String,

})
export default model("Book", BookingSchema)
