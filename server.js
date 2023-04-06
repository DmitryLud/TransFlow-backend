import { config } from "dotenv";
import cors from "cors";
import keys from "./keys/index.js";
import express from "express";
import mongoose from "mongoose";
import carsRouter from "./routes/cars.js";

const PORT = keys.PORT || 3000;
config();
const app = express();

mongoose.connect(keys.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "PUT"],
    origin: keys.CLIENT_URL,
    credentials: true,
  })
);

app.use("/cars", carsRouter);

(function () {
  try {
    app.listen(PORT, () => {
      console.log(`Server ready at: http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
})();
