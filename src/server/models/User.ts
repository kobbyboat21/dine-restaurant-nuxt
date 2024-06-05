import { Schema, model } from 'mongoose'
import bcrypt from "mongoose-bcrypt";

const UserSchema =  new Schema({
  _id: { type: String, required: true, unique: true }, // Use a unique string as the id
  username: { type: String, required: true, unique: true }, // Unique username
  email: { type: String, required: true, unique: true }, // Unique email
  password: { type: String, required: true, bcrypt: true } // Plain text password (will be hashed before saving)
});

UserSchema.plugin(bcrypt);


UserSchema.pre('save', function(next) {
    var user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();

// generate a salt
const SALT_WORK_FACTOR = 10;
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});


});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

export default model("User", UserSchema);
