import { Router } from 'express';
import userRouter from './user'
import authRouter from './auth'
import catSitterRouter from './cat_sitter'

const router = Router();
router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/cat-sitters', catSitterRouter)

export default router