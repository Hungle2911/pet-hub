import { Router } from 'express';
import userRouter from './user'
import bookingRouter from './booking'
import catSitterRouter from './cat_sitter'
import appointmentRouter from './appointment'

const router = Router();
router.use('/user', userRouter)
router.use('/booking', bookingRouter)
router.use('/cat-sitters', catSitterRouter)
router.use('/appointment', appointmentRouter)

export default router