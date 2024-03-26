import { Router } from 'express';
import savedSearchController from '../controllers/SavedSearchController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, savedSearchController.index);

router.get('/:id', loginRequired, savedSearchController.show);

router.post('/', loginRequired, savedSearchController.store);

router.delete('/:id', loginRequired, savedSearchController.delete);

export default router;
