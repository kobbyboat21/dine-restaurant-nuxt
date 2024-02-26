import { Schema, model } from 'mongoose'

const MenuSchema = new Schema ({
  name: String 
})

export default model("Menu", MenuSchema, "meal")
