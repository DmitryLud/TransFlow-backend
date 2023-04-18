import { Router } from "express";
import OrderController from "../controllers/orderController.js";

const router = Router();

router.post("/", OrderController.create);
router.get("/", OrderController.getAll);
router.get("/:id", OrderController.getOne);
router.put("/", OrderController.update);
router.delete("/:id", OrderController.delete);

export default router;
