const mongoose = require("mongoose");
const bcrypt = require ("bcryptjs");
const saltRounds = 10;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String, 
    required: true 
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  github: { 
    type: String
  },
  linkedin: {
    type: String
  },
  jobTitle: { 
    type: String,
    required: true 
  },
  posts:[{
    user:{
      type: String,
    },
    userID:{
      type: String, 
    },
    post:{
      type: String,
    },
    likes:{
      type: Number
    },
    time:{
      type: Date,
      default: Date.now
    }
}]
});

// hash user password before saving into database
userSchema.pre("save", function(next){
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

userSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
