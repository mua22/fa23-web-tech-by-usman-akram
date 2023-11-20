const express = require("express");
let router = express.Router();
let User = require("../../models/user");
router.get("/register", (req, res) => {
  //   return res.send(req.query);
  res.render("auth/register");
});
router.get("/login", (req, res) => {
  //   return res.send(req.query);
  // req.session.flash = { type: "success", message: "whoala" };
  res.render("auth/login");
});
router.get("/logout", (req, res) => {
  //   return res.send(req.query);
  req.session.user = null;
  req.session.flash = { type: "info", message: "Logged Out" };
  res.redirect("/login");
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) return res.redirect("/register");
  const bcrypt = require("bcryptjs");
  console.log(req.body);
  const isValid = await bcrypt.compare(password, user.password);
  if (isValid) {
    req.session.user = user;
    req.session.flash = { type: "success", message: "Logged in Successfully" };
    return res.redirect("/");
  } else {
    req.session.flash = { type: "danger", message: "Try Again" };

    return res.redirect("/login");
  }
  // res.status(400).send({ isValid });
});

router.post("/register", async (req, res) => {
  let user = new User(req.body);
  const bcrypt = require("bcryptjs");
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  //   return res.send(user);
  return res.redirect("/");
});

module.exports = router;
