import { Router } from "express";
import resourceController from "../controllers/ResourceController";

const router = new Router();

router.get('/', resourceController.index);
router.get('/show/:id', resourceController.show);

export default router;
