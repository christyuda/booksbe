// routes/randomBooksRoutes.js
const express = require("express");
const router = express.Router();
const randomBooksController = require("../controllers/randomBooksController");

router.get("/randombooks", randomBooksController.getRandomBooks);

module.exports = router;
