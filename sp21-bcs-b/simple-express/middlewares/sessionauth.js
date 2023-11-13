module.exports = function (req, res, next) {
  if (!req.session.user) return res.redirect("/login");
  else {
    req.user = req.session.user;
    next();
  }
};
