import { Router } from 'express';
import appointmentController from '../controllers/AppointmentController';
import jwtCheck from '../middlewares/auth';
const router = Router();

router.post('/', jwtCheck, appointmentController.getAppointmentRequest);


export default router;