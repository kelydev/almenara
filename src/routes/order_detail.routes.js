import { Router } from "express";
import OrderDetailController from "../controllers/order_detail.controller";

const router = Router();
const orderDetailController = new OrderDetailController();

router.get("/", (req, res) => orderDetailController.getAll(req, res));

export default router;