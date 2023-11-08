//require express module
//npm i express

// run this command once
//npm i nodemon -g
let express = require("express");
var expressLayouts = require("express-ejs-layouts");
let app = express();
app.use(express.static("public"));
// app.set("views", "views");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded());
// app.get("/", function (req, res) {
//   res.send("<h1>Home Page</h1>");
// });
app.get("/products", function (req, res) {
  let products = [
    { title: "Marker", price: 700 },
    { title: "Pen", price: 300 },
    { title: "rubber", price: 100 },
  ];
  res.render("products/list", {
    pageTitle: "This is products list page",
    products: products,
  });
});
app.get("/contact-us", function (req, res) {
  res.render("contact-us");
});

app.get("/test", (req, res) => {
  res.send("Hello Class");
});
const Car = require("./models/car");

app.get("/posts/:month/:day", function (req, res) {
  return res.send(req.params);
});
let carsApiRouter = require("./routes/api/cars");
let booksApiRouter = require("./routes/api/books");
app.use(carsApiRouter);
app.use(booksApiRouter);
app.use("/", require("./routes/site/auth"));
app.get("/", function (req, res) {
  res.render("landing-page", {});
});
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/sp21-bcs-b", { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo...."))
  .catch((error) => console.log(error.message));
app.listen(5000, function () {
  console.log("Server started at localhost:5000");
});
