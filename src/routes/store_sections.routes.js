import { Router } from "express";
import StoreSectionsController from '../controllers/store_sections.controller';

const router = Router();
const storeSectionsController = new StoreSectionsController();

router.get("/", (req, res) => storeSectionsController.getAll(req, res));

export default router;