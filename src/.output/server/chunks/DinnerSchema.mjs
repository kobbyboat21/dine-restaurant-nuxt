import { model, Schema } from 'mongoose';

const DinnerMealSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  description: String,
  image: String,
  ingredients: String,
  section: String
});
const Dinner = model("Dinner", DinnerMealSchema);

export { Dinner as D };
//# sourceMappingURL=DinnerSchema.mjs.map
