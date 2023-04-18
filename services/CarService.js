import Car from "../models/car.js";

class CarService {
  async create(car) {
    const createdCar = await Car.create(car);
    return createdCar;
  }

  async getAll() {
    const cars = await Car.find();
    return cars;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Id не указан");
    }
    const car = await Car.findById(id);
    return car;
  }

  async update(car) {
    if (!car._id) {
      throw new Error("Id не указан");
    }
    const updatedCar = await Car.findByIdAndUpdate(car._id, car, { new: true });
    return updatedCar;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Id не указан");
    }
    const car = await Car.findByIdAndDelete(id);
    return car;
  }
}

export default new CarService();
