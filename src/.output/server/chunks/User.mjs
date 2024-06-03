import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  id: String,
  username: String,
  email: String
});
const User = model("User", UserSchema);

export { User as U };
//# sourceMappingURL=User.mjs.map
