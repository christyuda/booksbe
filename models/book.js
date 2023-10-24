const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  category: String,
  cover_image: String,
  content: String,
});

module.exports = mongoose.model("Book", bookSchema);
