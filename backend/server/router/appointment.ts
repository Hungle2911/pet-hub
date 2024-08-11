import { Router } from 'express';
import appointmentController from '../controllers/AppointmentController';
import jwtCheck from '../middlewares/auth';
const router = Router();

router.get('/request', jwtCheck, appointmentController.getAppointmentRequest);
router.get('/upcoming', jwtCheck, appointmentController.getUpcomingAppointment);
router.put('/confirm', jwtCheck, appointmentController.confirmAppointment);
router.put('/reject', jwtCheck, appointmentController.rejectAppointment);



export default router;