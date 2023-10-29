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

// Mendapatkan semua profil
const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();

    // Status code 200: OK jika berhasil mendapatkan semua profil
    res.status(200).json(profiles);
  } catch (error) {
    // Status code 500: Internal Server Error jika terjadi kesalahan
    res.status(500).json({
      error: "Terjadi kesalahan saat mengambil semua profil",
      errorMessage: error.message,
    });
  }
};

const getProfileById = async (req, res) => {
  try {
    const profileId = req.query._id;

    if (!profileId) {
      // Status code 400: Bad Request jika parameter query _id tidak diberikan
      res.status(400).json({ error: "Parameter query _id diperlukan" });
      return;
    }

    const profile = await Profile.findById(profileId);

    if (!profile) {
      // Status code 404: Not Found jika profil tidak ditemukan
      res.status(404).json({ error: "Profil tidak ditemukan" });
      return;
    }

    // Status code 200: OK jika profil ditemukan
    res.status(200).json(profile);
  } catch (error) {
    // Status code 500: Internal Server Error jika terjadi kesalahan
    res.status(500).json({
      error: "Terjadi kesalahan saat mengambil profil",
      errorMessage: error.message,
    });
  }
};

// Kontroler untuk mengupdate profil berdasarkan _id dari parameter query
const updateProfile = async (req, res) => {
  try {
    const { name, email, address, password } = req.body;
    const profileId = req.query._id;

    if (!profileId) {
      // Status code 400: Bad Request jika parameter query _id tidak diberikan
      return res.status(400).json({ error: "Parameter query _id diperlukan" });
    }

    const updatedProfile = await Profile.findByIdAndUpdate(profileId, {
      name,
      email,
      address,
      password,
    });

    if (!updatedProfile) {
      // Status code 404: Not Found jika profil tidak ditemukan
      return res.status(404).json({ error: "Profil tidak ditemukan" });
    }

    // Status code 200: OK jika profil berhasil diupdate
    res
      .status(200)
      .json({ message: "Profil berhasil diupdate", updatedProfile });
  } catch (error) {
    // Status code 500: Internal Server Error jika terjadi kesalahan
    res.status(500).json({
      error: "Terjadi kesalahan saat mengupdate profil",
      errorMessage: error.message,
    });
  }
};
const deleteProfile = async (req, res) => {
  try {
    const profileId = req.query._id;

    if (!profileId) {
      // Status code 400: Bad Request jika parameter query _id tidak diberikan
      return res.status(400).json({ error: "Parameter query _id diperlukan" });
    }

    const deletedProfile = await Profile.findByIdAndRemove(profileId);

    if (!deletedProfile) {
      // Status code 404: Not Found jika profil tidak ditemukan
      return res.status(404).json({ error: "Profil tidak ditemukan" });
    }

    // Status code 200: OK jika profil berhasil dihapus
    res
      .status(200)
      .json({ message: "Profil berhasil dihapus", deletedProfile });
  } catch (error) {
    // Status code 500: Internal Server Error jika terjadi kesalahan
    res.status(500).json({
      error: "Terjadi kesalahan saat menghapus profil",
      errorMessage: error.message,
    });
  }
};

module.exports = {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
};
