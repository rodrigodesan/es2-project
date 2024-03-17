import { Router } from "express";
import commitmentTermController from "../controllers/CommitmentTermController";

const router = new Router();

router.get('/', commitmentTermController.index);
router.get('/show/:id', commitmentTermController.show);

export default router;
