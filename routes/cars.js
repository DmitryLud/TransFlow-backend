import { Router } from "express";
import Car from "../models/car.js";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const car = new Car({
    brand: req.body.brand,
    model: req.body.model,
    loadCapacity: req.body.loadCapacity,
  });
  try {
    const newCar = await car.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/", (req, res) => {});

router.patch("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

export default router;
