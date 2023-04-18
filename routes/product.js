import { Router } from "express";
import ProductController from "../controllers/productController.js";

const router = Router();

router.post("/", ProductController.create);
router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getOne);
router.put("/", ProductController.update);
router.delete("/:id", ProductController.delete);

export default router;
