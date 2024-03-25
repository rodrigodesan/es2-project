import { Router } from 'express';
import reportController from '../controllers/ReportController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/search/:search', loginRequired, reportController.index);

router.get('/:id', loginRequired, reportController.show);

router.post('/', loginRequired, reportController.store);

router.put('/:id', loginRequired, reportController.update);

router.delete('/:id', loginRequired, reportController.delete);

export default router;