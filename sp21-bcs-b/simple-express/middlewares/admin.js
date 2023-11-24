module.exports = function (req, res, next) {
  if (!req.session.user) return res.redirect("/login");
  else {
    if (req.session.user.role != "admin") {
      req.session.flash = {
        type: "danger",
        message: "You Must be an admin to access this area",
      };
      res.redirect("/login");
    } else next();
  }
};
