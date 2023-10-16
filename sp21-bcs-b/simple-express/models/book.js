const mongoose = require("mongoose");
let bookSchema = mongoose.Schema({
  author: String,
  title: String,
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
