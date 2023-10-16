const mongoose = require("mongoose");
let carSchema = mongoose.Schema({
  model: Number,
  company: String,
  color: String,
});
const Car = mongoose.model("Car", carSchema);
module.exports = Car;
