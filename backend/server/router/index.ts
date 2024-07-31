import express, { Router } from 'express';
import userRouter from './user'
import authRouter from './auth'


const router = Router();
router.use('/user', userRouter)
router.use('/', authRouter)


export default router