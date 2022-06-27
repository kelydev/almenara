import { Router } from "express";
import ProductController from "../controllers/products.controller";

const router = Router();
const productcontroller = new ProductController();

router.get("/", (req, res) => productcontroller.getAll(req, res));
router.get("/search/:id", (req, res) => productcontroller.getById(req, res));
router.post("/search", (req, res) => productcontroller.getByName(req, res));
router.get("/categories/:id", (req, res) => productcontroller.getByCategorys(req, res));
router.get("/price/higher", (req, res) => productcontroller.getByPriceHigher(req, res));
router.get("/price/lower", (req, res) => productcontroller.getByPriceLower(req, res));

export default router;