const express = require('express');
const router = express.Router();
const googleBooksController = require('../controllers/googleBooksController');

router.get('/booksgoogle', googleBooksController.getBooksFromGoogle);

module.exports = router;
