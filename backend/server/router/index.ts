import { Router } from 'express';
import userRouter from './user'
import bookingRouter from './booking'
import catSitterRouter from './cat_sitter'

const router = Router();
router.use('/user', userRouter)
router.use('/booking', bookingRouter)
router.use('/cat-sitters', catSitterRouter)

export default router