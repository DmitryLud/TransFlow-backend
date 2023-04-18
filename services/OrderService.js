import Order from "../models/order.js";

class OrderService{
    async create (order) {
        const createdOrder = await Order.create(order);
        return createdOrder;
      }
    
      async getAll() {
        const orders = await Order.find();
        return orders;
      }
    
      async getOne(id) {
        if(!id){
            throw new Error('Id не указан');
        }
        const order = await Order.findById(id);
        return order;
      }
    
      async update(order) {
        if(!order._id){
            throw new Error('Id не указан');
        }
        const updatedOrder = await Order.findByIdAndUpdate(order._id, order, {new: true});
        return updatedOrder;
      }
    
      async delete(id) {
        if(!id){
            throw new Error('Id не указан');
        }
        const order = await Order.findByIdAndDelete(id);
        return order;
      }
}

export default new OrderService();