import { body } from "express-validator";

const authSignUpSchema = [
    body("name").notEmpty().withMessage("name is required"),
    body("last_name").notEmpty().withMessage("lastname is required"),
    body("email").notEmpty().withMessage("email is required"),
    body("password").notEmpty().withMessage("password is required"),
];

const authSignInSchema = [
    body("email").notEmpty().withMessage("email is required"),
    body("password").notEmpty().withMessage("Password is required"),
];

export { authSignUpSchema, authSignInSchema };
