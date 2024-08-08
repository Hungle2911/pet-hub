import { Response } from "express";
import { Request } from "express-jwt";
import prisma from "../configs";

class BookingController {
  async bookingAppointment(req: Request, res: Response) {
    const { startDate, endDate, catSitterId } = req.body
    const auth0Id = req.auth?.sub
    try {
      const user = await prisma.user.findUnique({
        where: { auth0Id },
        include: { catOwner: true },
      });
       // Create the booking
    const booking = await prisma.booking.create({
      data: {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status: 'PENDING',
        catOwner: { connect: { id: user?.catOwner!.id } },
        catSitter: { connect: { id: catSitterId } },
      },
    });
      res.json({message: 'Your appointment was booked, please wait for your pet sitter to confirm it'})
    } catch (error) {
      console.error(error)
    }
  }

  
}
export default new BookingController();