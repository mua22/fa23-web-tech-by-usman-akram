let mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
  name: String,
  city: String,
});
let University = mongoose.model("University", modelSchema);
module.exports = University;
