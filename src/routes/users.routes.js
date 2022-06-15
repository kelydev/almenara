import { Router } from "express";
import UserController from "../controllers/users.controller";

const router = Router();
const userController = new UserController();

router.get("/", (req, res) => userController.getAll(req, res));

export default router;