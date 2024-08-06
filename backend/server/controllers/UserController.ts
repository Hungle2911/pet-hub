import prisma from "../configs";
import { Response } from "express";
import { Request } from "express-jwt";

class UserControllers {
  //Get user info
  async getUserInfo(req: Request, res: Response) {
    const auth0Id = req.auth?.sub
    try {
      const user = await prisma.user.findUnique({
        where: {
          auth0Id: auth0Id
        }
      })
      res.json(user)
    } catch (error) {
      console.error(error)
    }
  }
//Register new user info
  async register(req: Request, res: Response) {
    const auth0Id = req.auth?.sub
    const email = req.auth?.sub
    const {first_name, last_name, location, description, role} = req.body
    try {
      const user = await prisma.user.upsert({
        where: { auth0Id: auth0Id as string },
        update: {
          last_name,
          first_name,
          location,
          description
        },
        create: {
          auth0Id: auth0Id as string,
          last_name,
          first_name,
          location,
          description,
          role,
          email: email as string,
        },
      });
  
      res.json(user);
    } catch (error) {
      console.error(error)
    }
  }

}
export default new UserControllers