const express = require("express");
let router = express.Router();
let Car = require("../../models/car");
router.get("/api/cars/:id", async function (req, res) {
  // return res.send(req.params);
  let car = await Car.findById(req.params.id);
  res.send(car);
});
router.put("/api/cars/:id", async function (req, res) {
  // return res.send(req.params);
  let car = await Car.findById(req.params.id);
  car.model = req.body.model;
  car.company = req.body.company;
  car.color = req.body.color;
  await car.save();
  res.send(car);
});
router.delete("/api/cars/:id", async function (req, res) {
  // return res.send(req.params);
  let car = await Car.findByIdAndDelete(req.params.id);

  res.send(car);
});
router.post("/api/cars", async function (req, res) {
  // res.send(req.body);
  let car = new Car(req.body);
  await car.save();
  return res.send(car);
});
router.get("/api/cars", async function (req, res) {
  let cars = await Car.find();
  res.send(cars);
});
module.exports = router;
