//require express module
//npm i express

// run this command once
//npm i nodemon -g
let express = require("express");
let cookieParser = require("cookie-parser");
var session = require("express-session");
var expressLayouts = require("express-ejs-layouts");
let app = express();
app.use(express.static("public"));
// app.set("views", "views");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(session({ secret: "Shh, its a secret!" }));
app.use(require("./middlewares/common"));
// app.get("/", function (req, res) {
//   res.send("<h1>Home Page</h1>");
// });

const maintenance = require("./middlewares/maintenance");
const logger = require("./middlewares/logger");
const sessionauth = require("./middlewares/sessionauth");
// app.use(logger);
app.get("/products", logger, function (req, res) {
  let products = [
    { title: "Marker", price: 700 },
    { title: "Pen", price: 300 },
    { title: "rubber", price: 100 },
  ];
  // app.use(maintenance);
  res.render("products/list", {
    pageTitle: "This is products list page",
    products: products,
  });
});
app.get("/contact-us", sessionauth, function (req, res, next) {
  res.render("contact-us");
  // next();
});

app.get("/views", (req, res) => {
  let visits = req.cookies.visits;

  if (!visits) visits = 1;
  else visits = visits + 1;
  res.cookie("visits", visits);
  res.send({ visits });
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
const { cookie } = require("express/lib/response");
mongoose
  .connect("mongodb://localhost/sp21-bcs-b", { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo...."))
  .catch((error) => console.log(error.message));
app.listen(5000, function () {
  console.log("Server started at localhost:5000");
});
