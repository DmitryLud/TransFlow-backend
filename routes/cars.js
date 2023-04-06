import { Router } from "express";
import Car from "../models/car.js";
import CarService from "../services/car.js";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {});

router.post("/", async (req, res) => {
  try {
    const { brand, model, loadCapacity } = req.body;
    const newCar = await CarService.create(brand, model, loadCapacity);
    res.status(201).json(newCar);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {});

router.delete("/:id", (req, res) => {});

export default router;
