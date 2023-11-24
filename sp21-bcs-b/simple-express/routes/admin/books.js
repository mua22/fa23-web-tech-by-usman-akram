const express = require("express");
let router = express.Router();
let Book = require("../../models/book");

//route to deliver an edit form
router.get("/books/edit/:id", async (req, res) => {
  let book = await Book.findById(req.params.id);
  res.render("admin/books/edit", { layout: "adminlayout", book });
});
router.post("/books/edit/:id", async (req, res) => {
  let error = Book.validate(req.body);
  if (error) {
    req.session.flash = { type: "success", message: error.details[0].message };
    return res.redirect("back");
  }
  let book = await Book.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/admin/books");
});

//route to delete a book
router.get("/books/delete/:id", async (req, res) => {
  let book = await Book.findByIdAndDelete(req.params.id);
  req.session.flash = { type: "danger", message: "Book Deleted!" };
  res.redirect("/admin/books");
});

router.get("/books/add", async (req, res) => {
  res.render("admin/books/add", { layout: "adminlayout" });
});
router.post("/books/add", async (req, res) => {
  let error = Book.validate(req.body);
  if (error) {
    req.session.flash = { type: "success", message: error.details[0].message };
    return res.redirect("back");
  }
  let book = new Book(req.body);
  await book.save();
  req.session.flash = { type: "success", message: "Book Saved!" };
  res.redirect("/admin/books");
});
router.get("/books/:page?", async (req, res) => {
  let page = req.params.page ? req.params.page : 1;
  page = Number(page);
  let pageSize = 3;
  let books = await Book.find()
    .limit(pageSize)
    .skip((page - 1) * pageSize);
  let bookCount = await Book.countDocuments();
  let totalPages = Math.ceil(bookCount / pageSize);
  res.render("admin/books/index", {
    layout: "adminlayout",
    books,
    page,
    totalPages,
  });
});
module.exports = router;
