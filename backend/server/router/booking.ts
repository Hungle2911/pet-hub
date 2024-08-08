import { Router } from 'express';
import bookingController from '../controllers/BookingController';
import jwtCheck from '../middlewares/auth';
const router = Router();

router.post('/', jwtCheck, bookingController.bookingAppointment);


export default router;