import mongoose from "mongoose";

const trailerSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  capacity: { type: Number, required: true },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
});

export default mongoose.model("Trailer", trailerSchema);
