let mongoose = require("mongoose");
let modelSchema = mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true, index: true },
    password: String,
    role: String,
  },
  { timestamps: true }
);
let User = mongoose.model("User", modelSchema);
module.exports = User;
