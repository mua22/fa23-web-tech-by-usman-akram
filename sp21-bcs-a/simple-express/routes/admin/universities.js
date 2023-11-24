const express = require("express");
let router = express.Router();
let universityValidator = require("../../middlewares/validators/university-validator");
let University = require("../../models/university");

//render the add form
router.get("/universities/add", async (req, res) => {
  res.render("admin/universities/add", {
    layout: "adminlayout",
  });
});

//process the add form and redirect to index page
router.post("/universities/add", universityValidator, async (req, res) => {
  //tranfer the validation login into middleware
  //   const Joi = require("joi");
  //   let schema = Joi.object({
  //     name: Joi.string().min(3).required(),
  //     city: Joi.string().min(3).required(),
  //   });
  //   let result = schema.validate(req.body, { abortEarly: false });
  //   if (result.error) {
  //     req.session.flash = {
  //       type: "danger",
  //       message: result.error.details[0].message,
  //     };
  //     return res.redirect("back");
  //   }

  let university = new University(req.body);
  await university.save();
  req.session.flash = { type: "success", message: "New University Saved" };
  res.redirect("/admin/universities");
});

//render a form with prefilled record
router.get("/universities/edit/:id", async (req, res) => {
  let university = await University.findById(req.params.id);
  res.render("admin/universities/edit", { layout: "adminlayout", university });
});

//process the edit form and update the record and redirect
router.post("/universities/edit/:id", universityValidator, async (req, res) => {
  let university = await University.findByIdAndUpdate(req.params.id, req.body);
  req.session.flash = { type: "success", message: "University Updated!" };
  res.redirect("/admin/universities");
});

//delete a record and redirect
router.get("/universities/delete/:id", async (req, res) => {
  let university = await University.findByIdAndDelete(req.params.id);
  req.session.flash = { type: "danger", message: "University Deleted!" };
  res.redirect("/admin/universities");
});

//list universities
router.get("/universities", async (req, res) => {
  let universities = await University.find();
  res.render("admin/universities/index", {
    layout: "adminlayout",
    universities,
  });
});
module.exports = router;
