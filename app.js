const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const bookRoutes = require("./routes/bookRoutes");

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use("/api", bookRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
