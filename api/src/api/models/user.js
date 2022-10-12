const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    email_address: {
        type: String,
        required: true,
        unique:true,
    },
    gender: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone_number:{
      type: String,
      required: true,
    },
    username: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    profile_pic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
 

module.exports = mongoose.model("User", UserSchema);