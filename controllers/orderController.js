import OrderService from "../services/OrderService.js";

class OrderController {
  async create (req, res) {
    try{
        const order = await OrderService.create(req.body);
        res.json(order);
    }
    catch(e){
        res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
        const orders = await OrderService.getAll();
        return res.json(orders);
    } catch (e) {
        res.status(500).json(e)
    }
  }

  async getOne(req, res) {
    try {
        const order = await OrderService.getOne(req.params.id);
        return res.json(order);
    } catch (e) {
        res.status(500).json(e)
    }
  }

  async update(req, res) {
    try {
        const updatedOrder = await OrderService.update(req.body)
        return res.json(updatedOrder);
    } catch (e) {
        res.status(500).json(e)
    }
  }

  async delete(req, res) {
    try {
        const order = await OrderService.delete(req.params.id)
        return res.json(order);
    } catch (e) {
        res.status(500).json(e)
    }
  }

}

export default new OrderController();