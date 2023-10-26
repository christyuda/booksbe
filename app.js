const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");

// require routes gaiss
const bookRoutes = require("./routes/bookRoutes");
const randomBooksRoutes = require("./routes/randomBooksRoutes");
const googleBooksRoutes = require("./routes/apigoogleRoutes");
const profileRoutes = require("./routes/profileRoutes");
const authRoutes = require("./routes/authRoutes");
dotenv.config();

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;
app.use(express.json());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    // Status code 400: Bad Request jika JSON parsing gagal
    res
      .status(400)
      .json({
        error: "Invalid Json Pastikan mengirimkan body requestnya RAW ya",
      });
  } else {
    next();
  }
});
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
// Middlewares

// Use the profile routes
app.use("/api", profileRoutes);

// Use the authentication routes
app.use("/api", authRoutes);

// Google Books API Routes
app.use("/api", googleBooksRoutes);

// Your existing book routes
app.use("/api", bookRoutes);

// Random Books API Routes
app.use("/api", randomBooksRoutes);

// Rute beranda
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Selamat datang di API buku kita</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #333;
        }
        p {
          color: #666;
        }
      </style>
    </head>
    <body>
      <h1>Selamat datang di API buku kita!</h1>
      <p>Ini adalah backend untuk aplikasi layanan buku.</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
