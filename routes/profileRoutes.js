const express = require("express");
const router = express.Router();
const {
  createProfile,
  getProfileById,
} = require("../controllers/profileController");

// Rute untuk membuat profil
router.post("/profile", createProfile);

// Rute untuk mendapatkan profil berdasarkan ID
router.get("/profile/:id", getProfileById);

module.exports = router;
