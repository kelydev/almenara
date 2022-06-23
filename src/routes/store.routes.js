import { Router } from "express";
import StoreController from "../controllers/stores.controller";

const router = Router();
const storecontroller = new StoreController();

router.get("/", (req, res) => storecontroller.getAll(req, res));
router.get("/section/:id", (req, res) => storecontroller.getBySection(req, res));

export default router;