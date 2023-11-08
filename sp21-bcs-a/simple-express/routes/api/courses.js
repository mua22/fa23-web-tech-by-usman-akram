const express = require("express");
let router = express.Router();
const Course = require("../../models/course");
router.delete("/api/courses/:id", async function (req, res) {
  let record = await Course.findByIdAndDelete(req.params.id);
  res.send(record);
});
router.get("/api/courses/:id", async function (req, res) {
  let record = await Course.findById(req.params.id);
  res.send(record);
});
router.patch("/api/courses/:id", async function (req, res) {
  let record = await Course.findById(req.params.id);
  record.name = req.body.name;
  record.teacher = req.body.teacher;
  await record.save();
  res.send(record);
});
router.get("/api/courses", async function (req, res) {
  let records = await Course.find();
  res.send(records);
});
router.post("/api/courses", async function (req, res) {
  let record = new Course(req.body);
  await record.save();
  res.send(record);
});
module.exports = router;
