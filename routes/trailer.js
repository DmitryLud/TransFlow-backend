import { Router } from "express";
import TrailerController from "../controllers/trailerController.js";

const router = Router();

router.post("/", TrailerController.create);
router.get("/", TrailerController.getAll);
router.get("/:id", TrailerController.getOne);
router.put("/", TrailerController.update);
router.delete("/:id", TrailerController.delete);

export default router;
