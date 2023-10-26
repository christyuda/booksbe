const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
