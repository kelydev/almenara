import { body } from "express-validator";

const authSignInSchema = [
  body("email").notEmpty().withMessage("email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

export { authSignInSchema };
