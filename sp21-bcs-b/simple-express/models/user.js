const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});
const User = mongoose.model("User", userSchema);
module.exports = User;
