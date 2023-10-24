const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Mendapatkan daftar buku
router.get("/books", bookController.getBooks);

// Menambahkan buku baru
router.post("/books/add", bookController.addBook);

// Menghapus buku
router.delete("/books/:id", bookController.deleteBook);

module.exports = router;
