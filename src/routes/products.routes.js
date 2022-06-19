import { Router } from "express";
import ProductController from "../controllers/products.controller";

const router = Router();
const productcontroller = new ProductController();

router.get("/", (req, res) => productcontroller.getAll(req, res));
router.get("/:id", (req, res) => productcontroller.getById(req, res));
router.get("/categories/:id", (req, res) => productcontroller.getByCategorys(req, res));



export default router;