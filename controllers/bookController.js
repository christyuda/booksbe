const Book = require("../models/book");

// Mengambil buku berdasarkan ID
const getBookById = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: "Not Found",
        data: null, // Mengatur data menjadi null jika tidak ditemukan
        message: "Buku tidak ditemukan.",
      });
    }

    res.status(200).json({
      code: 200,
      success: true,
      status: "OK",
      data: book,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      data: null,
      message: "Terjadi kesalahan saat mengambil buku.",
    });
  }
};

// Mendapatkan daftar semua buku
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      code: 200,
      success: true,
      status: "OK",
      data: books,
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

// Menambahkan buku baru
const addBook = async (req, res) => {
  const { title, author, description, category, cover_image, content } =
    req.body;

  try {
    const newBook = new Book({
      title,
      author,
      description,
      category,
      cover_image,
      content,
    });

    const book = await newBook.save();
    res.status(201).json({
      code: 201,
      success: true,
      status: "Created",
      data: book,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      code: 400,
      success: false,
      status: "Bad Request",
      data: null,
      message: "Gagal menambahkan buku.",
    });
  }
};

// Menghapus buku berdasarkan ID
const deleteBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: "Not Found",
        data: null,
        message: "Buku tidak ditemukan.",
      });
    }

    await Book.findByIdAndRemove(bookId);

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      data: null,
      message: "Gagal menghapus buku.",
    });
  }
};

module.exports = {
  getBookById,
  getBooks,
  addBook,
  deleteBook,
};
