import { model, Schema } from 'mongoose';

const LunchMealSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  description: String,
  image: String,
  ingredients: String,
  section: String
});
const Lunch = model("Lunch", LunchMealSchema);

export { Lunch as L };
//# sourceMappingURL=LunchSchema.mjs.map
