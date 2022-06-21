import { Router } from "express";
import ShoppingCartController from "../controllers/shopping_cart.controller";

const router = Router();
const shoppingCartcontroller = new ShoppingCartController();

router.get("/", (req, res) => shoppingCartcontroller.getAll(req, res));
router.post("/", (req, res) => shoppingCartcontroller.addProduct(req, res));
router.delete("/:id", (req, res) => shoppingCartcontroller.deleteProduct(req, res));

export default router;