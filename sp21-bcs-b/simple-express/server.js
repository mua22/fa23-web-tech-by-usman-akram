//require express module
//npm i express

// run this command once
//npm i nodemon -g
let express = require("express");
let app = express();
app.use(express.static("public"));
// app.set("views", "views");
app.set("view engine", "ejs");
// app.get("/", function (req, res) {
//   res.send("<h1>Home Page</h1>");
// });
app.get("/contact-us", function (req, res) {
  res.render("contact-us");
});
app.get("/", function (req, res) {
  res.render("landing-page");
});

app.listen(5000);
