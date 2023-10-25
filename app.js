const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");

// require routes gaiss
const bookRoutes = require("./routes/bookRoutes");
const randomBooksRoutes = require("./routes/randomBooksRoutes");
const googleBooksRoutes = require("./routes/apigoogleRoutes");

dotenv.config();

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Google Books API Routes
app.use("/api", googleBooksRoutes);

// Your existing book routes
app.use("/api", bookRoutes);

// Random Books API Routes
app.use("/api", randomBooksRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
