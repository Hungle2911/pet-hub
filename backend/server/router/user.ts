import { Router } from 'express';
import userController from '../controllers/UserController';
import jwtCheck from '../middlewares/auth';
const router = Router();

router.get('/info', jwtCheck, userController.getUserInfo);
router.post('/info', jwtCheck, userController.register);
router.get('/cat-sitter/profile', jwtCheck, userController.getSitterProfile);
router.post('/cat-sitter/profile', jwtCheck, userController.editSitterProfile);

export default router;