import { Router } from "express";
import ShoppingCartController from "../controllers/shopping_cart.controller";
import authentication from "../middlewares/authentication";

const router = Router();
const shoppingCartcontroller = new ShoppingCartController();

//router.use(authentication)
router.get("/", (req, res) => shoppingCartcontroller.getShoppingCartCustomer(req, res));
router.put("/", (req, res) => shoppingCartcontroller.addProduct(req, res));
router.delete("/:id", (req, res) => shoppingCartcontroller.deleteProduct(req, res));

export default router;