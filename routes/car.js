import { Router } from "express";
import CarController from "../controllers/carController.js";

const router = Router();

router.post('/', CarController.create)
router.get('/', CarController.getAll)
router.get('/:id', CarController.getOne)
router.put('/', CarController.update)
router.delete('/:id', CarController.delete)

export default router;