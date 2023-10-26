const Profile = require("../models/profile");

// Membuat profil baru
const createProfile = async (req, res) => {
  try {
    const { name, email, address, password } = req.body;
    const profile = new Profile({ name, email, address, password });
    const newProfile = await profile.save();

    // Status code 201: Created jika profil berhasil dibuat
    res.status(201).json(newProfile);
  } catch (error) {
    // Status code 400: Bad Request jika gagal membuat profil
    res
      .status(400)
      .json({ error: "Gagal membuat profil", errorMessage: error.message });
  }
};

// Mendapatkan profil berdasarkan ID
const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);

    if (!profile) {
      // Status code 404: Not Found jika profil tidak ditemukan
      res.status(404).json({ error: "Profil tidak ditemukan" });
      return;
    }

    // Status code 200: OK jika profil ditemukan
    res.status(200).json(profile);
  } catch (error) {
    // Status code 500: Internal Server Error jika terjadi kesalahan
    res
      .status(500)
      .json({
        error: "Terjadi kesalahan saat mengambil profil",
        errorMessage: error.message,
      });
  }
};

module.exports = { createProfile, getProfileById };
