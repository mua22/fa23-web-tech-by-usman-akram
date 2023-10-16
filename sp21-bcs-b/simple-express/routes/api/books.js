const express = require("express");
let router = express.Router();
let Book = require("../../models/book");
router.get("/api/books/:id", async function (req, res) {
  // return res.send(req.params);
  let book = await Book.findById(req.params.id);
  res.send(book);
});
router.put("/api/books/:id", async function (req, res) {
  // return res.send(req.params);
  let book = await Book.findById(req.params.id);
  book.author = req.body.author;
  book.title = req.body.title;

  await book.save();
  res.send(book);
});
router.delete("/api/books/:id", async function (req, res) {
  // return res.send(req.params);
  let book = await Book.findByIdAndDelete(req.params.id);

  res.send(book);
});
router.post("/api/books", async function (req, res) {
  // res.send(req.body);
  let book = new Book(req.body);
  await book.save();
  return res.send(book);
});
router.get("/api/books", async function (req, res) {
  let books = await Book.find();
  res.send(books);
});
module.exports = router;
