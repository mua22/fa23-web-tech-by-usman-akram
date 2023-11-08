var expressLayouts = require("express-ejs-layouts");
let express = require("express");
let University = require("./models/university");
// run following command to install express
// npm i express
// install nodemon globally once in your system like
//npm i -g nodemon
let server = express();
server.use(express.static("public"));
server.set("view engine", "ejs");
server.use(express.json());
server.use(express.urlencoded());
server.use(expressLayouts);

/**
 * First parameter is uri
 * Secind Parameter is a call =back function whihc will be called when a request to / with get method will be received
 *
 */
server.get("/hobbies", function (req, res) {
  res.render("hobbies");
});
server.get("/skills", function (req, res) {
  res.render("skills");
});

server.get("/posts/:month/:day", function (req, res) {
  return res.send(req.params);
});
server.use("/", require("./routes/site/auth"));
server.use("/", require("./routes/api/universities"));
server.use("/", require("./routes/api/courses"));

server.get("/", function (req, res) {
  res.render("homepage");
});
const mongoose = require("mongoose");
//mongodb+srv://<username>:<password>@cluster0.vidd3.mongodb.net/
mongoose
  .connect("mongodb://localhost/sp21-bcs-a", { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo...."))
  .catch((error) => console.log(error.message));

server.listen(5000, function () {
  console.log("Server Started at localhost:5000");
});
