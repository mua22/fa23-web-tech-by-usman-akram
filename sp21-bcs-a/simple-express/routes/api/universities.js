const express = require("express");
let router = express.Router();
const University = require("../../models/university");
router.delete("/api/universities/:id", async function (req, res) {
  let record = await University.findByIdAndDelete(req.params.id);
  res.send(record);
});
router.get("/api/universities/:id", async function (req, res) {
  let record = await University.findById(req.params.id);
  res.send(record);
});
router.patch("/api/universities/:id", async function (req, res) {
  let record = await University.findById(req.params.id);
  record.city = req.body.city;
  record.name = req.body.name;
  await record.save();
  res.send(record);
});
router.get("/api/universities", async function (req, res) {
  let records = await University.find();
  res.send(records);
});
router.post("/api/universities", async function (req, res) {
  let record = new University(req.body);
  await record.save();
  res.send(record);
});
module.exports = router;
