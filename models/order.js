import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    clientID: { type: String, required: true},
    recipientID: { type: String, required: true},
    productID: { type: String, required: true},
    carID: { type: String, required: true},
    from: { type: String, required: true},
    receivingAddress: { type: String, required: true},
    deliveryAddress: { type: String, required: true},
    startDate: { type: Date, required: true},
    endDate: { type: Date, required: true},
    weight: { type: Number, required: true},
    price: { type: Number, required: true}
});

export default mongoose.model("Order", orderSchema);