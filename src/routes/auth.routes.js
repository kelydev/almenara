import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import validation from "../middlewares/validation";
import { authSignInSchema } from "../validations/auth.validation";

const router = Router();
const authController = new AuthController();

router.post("/signin", validation(authSignInSchema), (req, res) =>
  authController.signIn(req, res)
);

export default router;
