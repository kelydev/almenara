import { Router } from "express";
import CouponsController from '../controllers/coupons.controller';

const router = Router();
const couponscontroller = new CouponsController();

router.get("/", (req, res) => couponscontroller.getAll(req, res));
router.get("/search", (req, res) => couponscontroller.getSearch(req, res));
router.post("/new", (req, res) => couponscontroller.addCoupon(req, res));

export default router;