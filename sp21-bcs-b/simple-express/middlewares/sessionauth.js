let User = require("../models/user");
module.exports = async function (req, res, next) {
  //login a user indevelopment mode so that we dont need to relogin during server rebooting
  let user = await User.findOne({ email: "usman.akram@gmail.com" });
  // console.log("user");
  // console.log(user);
  req.session.user = user;
  // end default login
  // comment above code in deployment
  if (!req.session.user) return res.redirect("/login");
  else {
    req.user = req.session.user;
    next();
  }
};
