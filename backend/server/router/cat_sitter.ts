import { Router } from 'express';
import catSitterController from '../controllers/CatSitterController';
const router = Router();

router.get('/search', catSitterController.search);
router.get('/search', catSitterController.search);


export default router;