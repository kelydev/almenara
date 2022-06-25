import { Router } from "express";
import OrderController from "../controllers/orders.controller";

const router = Router();
const ordercontroller = new OrderController();

router.get("/", (req, res) => ordercontroller.getAll(req, res));
router.post("/create", (req, res) => ordercontroller.createOrder(req, res));

export default router;