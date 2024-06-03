import { model, Schema } from 'mongoose';

const BreakfastMealSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  description: String,
  image: String,
  ingredients: String,
  section: String
});
const Breakfast = model("Breakfast", BreakfastMealSchema);

export { Breakfast as B };
//# sourceMappingURL=BreakfastSchema.mjs.map
