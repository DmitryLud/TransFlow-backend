import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  trailerID: { type: String },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  loadCapacity: { type: Number, required: true },
});

export default mongoose.model("Car", carSchema);
