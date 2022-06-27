import { Router } from "express";
import UserController from "../controllers/users.controller";
import authentication from "../middlewares/authentication";

const router = Router();
const userController = new UserController();

router.use(authentication)
router.get("/", (req, res) => userController.getAll(req, res));

export default router;