const express = require("express");
const bcrypt = require("bcryptjs");
let router = express.Router();
let User = require("../../models/user");
router.get("/login", (req, res) => {
  res.render("auth/login");
});
router.get("/logout", (req, res) => {
  req.session.user = null;
  res.redirect("/login");
});
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    req.session.flash = { type: "danger", message: "No User Found" };
    return res.redirect("/register");
  }
  let valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) {
    req.session.flash = { type: "danger", message: "Unable to Login" };
    return res.redirect("/login");
  }
  {
    req.session.user = user; //actually logging in
    req.session.flash = { type: "success", message: "Logged In Successfully" };
    return res.redirect("/");
  }
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});
router.post("/register", async (req, res) => {
  let user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  // return res.send(user);
  return res.redirect("/");
});
module.exports = router;
