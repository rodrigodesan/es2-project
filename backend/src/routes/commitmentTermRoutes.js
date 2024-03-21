import { Router } from "express";
import commitmentTermController from "../controllers/CommitmentTermController";

const router = new Router();

router.get('/', commitmentTermController.index);
router.get('/show/:id', commitmentTermController.show);
router.get('/states-by-terms', commitmentTermController.statesByCommitmentTerms);
router.get('/average-vigency', commitmentTermController.averageDurationOfVigency);
router.get('/states-by-vigency', commitmentTermController.statesByAverageVigency);
router.get('/states-by-value', commitmentTermController.statesByAverageValue);
router.get('/resources-by-term', commitmentTermController.resourcesByTerms);

export default router;
