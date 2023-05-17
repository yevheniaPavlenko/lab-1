const { Schema, model } = require("mongoose");

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  age: { type: String, required: false },
  gender: { type: String, required: false },
  address: { type: String, required: false },
  website: { type: String, required: false },
});

module.exports = model("User", User);
