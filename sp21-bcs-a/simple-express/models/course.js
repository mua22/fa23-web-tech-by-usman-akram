let mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
  name: String,
  teacher: String,
});
let Course = mongoose.model("Course", modelSchema);
module.exports = Course;
