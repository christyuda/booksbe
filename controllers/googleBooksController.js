const axios = require("axios");
const BookGoogle = require("../models/booksgoogle");
const dotenv = require("dotenv");
dotenv.config();

const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

const getBooksFromGoogle = async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=new+releases",
      {
        params: {
          key: apiKey,
        },
      }
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
      };
    });

    // Respon dengan data buku dari API Google Books dalam format yang diinginkan
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

module.exports = { getBooksFromGoogle };
