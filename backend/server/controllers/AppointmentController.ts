import { Response } from "express";
import { Request } from "express-jwt";
import prisma from "../configs";

class AppointmentController {
  async getAppointmentRequest(req: Request, res: Response) {
    const auth0Id = req.auth?.sub
    try {
      const user = await prisma.user.findUnique({
        where: { auth0Id },
        include: { catSitter: true },
      });

      res.json({message: 'Your appointment was booked, please wait for your pet sitter to confirm it'})
    } catch (error) {
      console.error(error)
    }
  }

  
}
export default new AppointmentController();