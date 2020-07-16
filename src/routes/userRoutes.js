import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Shouldn't exist
router.get('/', loginRequired, UserController.index);
router.post('/', loginRequired, UserController.create);

router.get('/:id', UserController.show);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
