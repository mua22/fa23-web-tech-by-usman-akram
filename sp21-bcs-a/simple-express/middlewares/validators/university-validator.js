module.exports = function (req, res, next) {
  const Joi = require("joi");
  let schema = Joi.object({
    name: Joi.string().min(3).required(),
    city: Joi.string().min(3).required(),
  });
  let result = schema.validate(req.body, { abortEarly: false });
  if (result.error) {
    req.session.flash = {
      type: "danger",
      message: result.error.details[0].message,
    };
    return res.redirect("back");
  }
  next();
};
