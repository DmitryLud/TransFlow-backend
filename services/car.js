import Car from "../models/car.js";

class CarService {
  static create = async (brand, model, loadCapacity) => {
    const candidate = await Car.findOne({
      brand,
      model,
      loadCapacity,
    }).exec();

    if (candidate) {
      throw new Error("That model already exists");
    }

    const newCar = await Car({
      brand,
      model,
      loadCapacity,
    });

    return newCar.save();
  };
}

export default CarService;
