import CarService from "../services/CarService.js";

class CarController {
  async create (req, res) {
    try{
        const car = await CarService.create(req.body);
        res.json(car);
    }
    catch(e){
        res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
        const cars = await CarService.getAll();
        return res.json(cars);
    } catch (e) {
        res.status(500).json(e)
    }
  }

  async getOne(req, res) {
    try {
        const car = await CarService.getOne(req.params.id);
        return res.json(car);
    } catch (e) {
        res.status(500).json(e)
    }
  }

  async update(req, res) {
    try {
        const updatedCar = await CarService.update(req.body)
        return res.json(updatedCar);
    } catch (e) {
        res.status(500).json(e)
    }
  }

  async delete(req, res) {
    try {
        const car = await CarService.delete(req.params.id)
        return res.json(car);
    } catch (e) {
        res.status(500).json(e)
    }
  }

}

export default new CarController();