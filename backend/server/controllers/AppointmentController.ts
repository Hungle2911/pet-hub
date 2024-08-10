import { Response } from "express";
import { Request } from "express-jwt";
import prisma from "../configs";

class AppointmentController {
  async getAppointmentRequest(req: Request, res: Response) {
    const auth0Id = req.auth?.sub
    try {
      const user = await prisma.user.findUnique({
        where: { auth0Id },
        include: { catSitter: true, catOwner: true },
      });
      
    let requestAppointments;
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.role === 'PET_SITTER' && user.catSitter) {
      requestAppointments = await prisma.booking.findMany({
        where: {
          catSitterId: user.catSitter.id,
          status: 'PENDING',
        },
        include: {
          catOwner: {
            include: {
              user: true,
            },
          },
        },
      });
    } else if (user.role === 'OWNER' && user.catOwner) {
      requestAppointments = await prisma.booking.findMany({
        where: {
          catOwnerId: user.catOwner.id,
        },
        include: {
          catSitter: {
            include: {
              user: true,
            },
          },
        },
      });
    } else {
      return res.status(400).json({ message: 'Invalid user role or missing profile' });
    }

    res.json(requestAppointments);
      res.json({message: 'Your appointment was confirmed.'})
    } catch (error) {
      console.error(error)
    }
  }

  
}
export default new AppointmentController();