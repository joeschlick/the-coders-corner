const mongoose = require("mongoose");
const bcrypt = require ("bcrypt");
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

userSchema.pre("create", function(next){
  let user = this;

  if (user.isModified("password")) {

    bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) return next(err);
  
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash
          // Store hash in your password DB.
      });
    });
  } else {
    next ()
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;
