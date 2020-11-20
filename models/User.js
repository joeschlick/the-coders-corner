const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  //firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
//   password: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     minlength: 3,
//   },
//   email: {
//     type: String,
//     required: true,
//     validate: [validateEmail, "Please fill a valid email address"],
//     unique: true,
//     trim: true,
//     minlength: 3,
//   },
//   github: { type: String },
//   linkedin: { type: String },
//   title: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
