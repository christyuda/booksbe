// controllers/randomBooksController.js
const axios = require("axios");
const RandomBook = require("../models/RandomBook");
const dotenv = require("dotenv");
dotenv.config();

// const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

const getRandomBooks = async (req, res) => {
  try {
    // Logika untuk menghasilkan huruf acak (misalnya, dari a - z)
    const randomLetter = String.fromCharCode(
      97 + Math.floor(Math.random() * 26)
    );

    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${randomLetter}`
    );

    const bookData = response.data.items.map((item) => {
      const volumeInfo = item.volumeInfo;
      const imageLinks = volumeInfo.imageLinks || {};

      return {
        id: item.id,
        title: volumeInfo.title || "",
        authors: volumeInfo.authors || [],
        publisher: volumeInfo.publisher || "",
        publishedDate: volumeInfo.publishedDate || "",
        description: volumeInfo.description || "",
        smallThumbnail: imageLinks.smallThumbnail || "",
        thumbnail: imageLinks.thumbnail || "",
        previewLink: volumeInfo.previewLink || "",
        categories: volumeInfo.categories || [],
        averageRating: volumeInfo.averageRating || "",
      };
    });

    // Simpan data buku ke database
    await RandomBook.insertMany(bookData);

    // Respon dengan data buku
    res.status(200).json({
      code: 200,
      success: true,
      status: "OK",
      data: bookData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      data: null,
      message: "Terjadi kesalahan saat mengambil data buku.",
    });
  }
};

module.exports = { getRandomBooks };
