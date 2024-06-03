import { model, Schema } from 'mongoose';

const BookingSchema = new Schema({
  id: Number,
  name: String,
  section: String,
  capacity: String,
  datetime: String
});
const Book = model("Book", BookingSchema);

export { Book as B };
//# sourceMappingURL=BookingSchema.mjs.map
