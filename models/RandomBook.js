// models/RandomBook.js
const mongoose = require("mongoose");

const randomBookSchema = new mongoose.Schema({
  id: String,
  title: String,
  authors: [String],
  publisher: String,
  publishedDate: String,
  description: String,
  smallThumbnail: String,
  thumbnail: String,
  previewLink: String,
  categories: [String],
});

const RandomBook = mongoose.model("RandomBook", randomBookSchema);

module.exports = RandomBook;
