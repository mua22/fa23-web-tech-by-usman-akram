const mongoose = require("mongoose");
let bookSchema = mongoose.Schema({
  author: String,
  title: String,
});
bookSchema.statics.validate = function (data) {
  const Joi = require("joi");
  const bookSchema = Joi.object({
    title: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
  });
  let result = bookSchema.validate(data, { abortEarly: false });
  return result.error;
};
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
