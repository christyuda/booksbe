const express = require("express");
const router = express.Router();
const {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} = require("../controllers/profileController");

// Rute untuk membuat profil baru
router.post("/profile/add", createProfile);

// Rute untuk mendapatkan semua profil
router.get("/profile", getAllProfiles);

// Rute untuk mendapatkan profil berdasarkan ID
router.get("/profile/:id", getProfileById);

// Rute untuk mengupdate profil berdasarkan ID
router.put("/profile/update", updateProfile);

// Rute untuk menghapus profil berdasarkan ID
router.delete("/profile/delete", deleteProfile);

module.exports = router;
