import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../configs';


class AuthController {
  async register(req: Request, res: Response) {
    // const { email, user_name, full_name, password, role } = req.body;
    // try {
    //   const hashedPassword = await bcrypt.hash(password, 10);
    //   const user = await prisma.user.create({
    //     data: {
    //       full_name,
    //       user_name,
    //       email,
    //       role,
    //       password : hashedPassword,
    //     },
    //   });
    //   res.status(201).json(user);
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json({ error: 'Internal server error' });
    // }
  }

  
}
export default new AuthController();