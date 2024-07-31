import prisma from "../configs";
import { Request, Response } from "express";

class UserControllers {
  // async register(req: Request, res: Response) {
  //   const { email, user_name, full_name, password, role } = req.body;
  //   try {
  //     const user = await prisma.user.create({
  //       data: {
  //         email,
  //         user_name, 
  //         full_name, 
  //         password, 
  //         role
  //       },
  //     });
  
  //     res.json(user);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // }
}
export default new UserControllers