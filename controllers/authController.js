const jwt = require("jsonwebtoken");
const Profile = require("../models/profile");

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    // Status code 400: Bad Request jika email atau password tidak diberikan
    return res.status(400).json({ error: "Email dan password harus diisi" });
  }

  try {
    const profile = await Profile.findOne({ email });

    if (!profile) {
      // Status code 404: Not Found jika email tidak ditemukan
      res.status(404).json({ error: "Email tidak ditemukan" });
      return;
    }

    if (profile.password !== password) {
      // Status code 401: Unauthorized jika password salah
      res.status(401).json({ error: "Password salah" });
      return;
    }

    const token = jwt.sign({ userId: profile._id }, "rahasia", {
      expiresIn: "1h",
    });

    // Status code 200: OK jika login berhasil
    res.status(200).json({ token });
  } catch (error) {
    // Status code 500: Internal Server Error jika terjadi kesalahan
    res.status(500).json({ error: "Terjadi kesalahan saat login", error });
  }
};

module.exports = { login };
