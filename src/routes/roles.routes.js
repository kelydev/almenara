import { Router } from 'express';
import RolController from '../controllers/roles.controllers';

const router = Router();
const rolController = new RolController();

router.get("/", (req, res) => rolController.getAll(req, res));

export default router;

