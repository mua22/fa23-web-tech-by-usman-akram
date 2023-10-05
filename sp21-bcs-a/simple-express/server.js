const { response } = require("express");
var expressLayouts = require("express-ejs-layouts");
let express = require("express");
// run following command to install express
// npm i express
// install nodemon globally once in your system like
//npm i -g nodemon
let server = express();
server.use(express.static("public"));
server.set("view engine", "ejs");

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
server.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
});

server.listen(5000, function () {
  console.log("Server Started at localhost:5000");
});
