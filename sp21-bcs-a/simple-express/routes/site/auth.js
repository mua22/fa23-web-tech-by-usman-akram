const express = require("express");
const bcrypt = require("bcryptjs");
let router = express.Router();
let User = require("../../models/user");
router.get("/register", (req, res) => {
  res.render("auth/register");
});
router.post("/register", async (req, res) => {
  let user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  return res.send(user);
  return res.redirect("/");
});
module.exports = router;
