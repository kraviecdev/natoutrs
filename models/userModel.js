const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
    maxlength: [30, "Max username length is 30"],
    minlength: [5, "Min username length is 5"],
  },
  email: {
    type: String,
    required: [true, "E-mail is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Enter valid e-mail address"],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must have at least 8 characters"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Passwords must be the same",
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
