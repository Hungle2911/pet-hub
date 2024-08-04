import prisma from "../configs";
import { Response } from "express";
import { Request } from "express-jwt";

class UserControllers {
  async getUserInfo(req: Request, res: Response) {
    // const auth0Id = req.auth?.sub
    // try {
    //   const getInfo = await prisma.
    // } catch (error) {
    //   console.error(error)
    // }
  }

  async register(req: Request, res: Response) {
    const auth0Id = req.auth?.sub
    const {first_name, last_name, location, description, role} = req.body
    try {
      const user = await prisma.user.upsert({
        where: { auth0Id: auth0Id as string },
        update: {
          last_name,
          first_name,
          location,
          description,
          role,
        },
        create: {
          auth0Id: auth0Id as string,
          last_name,
          first_name,
          location,
          description,
          role,
          email: req.auth?.email as string,
        },
      });
  
      res.json(user);
    } catch (error) {
      console.error(error)
    }
  }
}
export default new UserControllers