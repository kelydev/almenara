import { Router } from "express";
import CategoryComtroller from '../controllers/categories.controller';

const router = Router();
const categorycontroller = new CategoryComtroller();

router.get("/", (req, res) => categorycontroller.getAll(req, res));

export default router;