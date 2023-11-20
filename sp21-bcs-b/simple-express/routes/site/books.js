const express = require("express");
let router = express.Router();
let Book = require("../../models/book");

router.get("/books/:page?", async (req, res) => {
  let page = req.params.page ? Number(req.params.page) : 1;
  let pageSize = 2;
  let skip = (page - 1) * pageSize;
  let books = await Book.find().skip(skip).limit(pageSize);
  let total = await Book.countDocuments();
  let totalPages = Math.ceil(total / pageSize);
  return res.render("books/list", { books, page, totalPages });
});

module.exports = router;
