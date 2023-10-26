const mongoose = require("mongoose");

const bookGoogleSchema = new mongoose.Schema({
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
  averageRating: String,
});

const BookGoogle = mongoose.model("BookGoogle", bookGoogleSchema);

module.exports = BookGoogle;
