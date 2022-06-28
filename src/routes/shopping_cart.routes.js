import { Router } from "express";
import ShoppingCartController from "../controllers/shopping_cart.controller";
import authentication from "../middlewares/authentication";
import validation from "../middlewares/validation";
import {cartAddProductSchema}  from "../validations/cart.validation";

const router = Router();
const shoppingCartcontroller = new ShoppingCartController();

router.use(authentication)
router.get("/", (req, res) => shoppingCartcontroller.getShoppingCartCustomer(req, res));
router.put("/",  validation(cartAddProductSchema), (req, res) => shoppingCartcontroller.addProduct(req, res));
router.delete("/:id", (req, res) => shoppingCartcontroller.deleteProduct(req, res));

export default router;