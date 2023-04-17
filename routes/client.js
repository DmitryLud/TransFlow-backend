import { Router } from "express";
import ClientController from "../controllers/clientController.js";

const router = Router();

router.post('/', ClientController.create)
router.get('/', ClientController.getAll)
router.get('/:id', ClientController.getOne)
router.put('/', ClientController.update)
router.delete('/:id', ClientController.delete)

export default router;