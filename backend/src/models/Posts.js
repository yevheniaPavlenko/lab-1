const { Schema, model } = require("mongoose");

const Posts = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  body: { type: String, required: true },
  comments: { type: Array, required: false },
});

module.exports = model("Posts", Posts);
