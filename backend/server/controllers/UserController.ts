import prisma from "../configs";
import { Response } from "express";
import { Request } from "express-jwt";
import { geocodeAddress } from "../utilities/geocoder";

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
    // const email = req.auth?.sub
    const {first_name, last_name, location, description, role} = req.body
    const coordinates = await geocodeAddress(location as string);
    const {lat, lon} = coordinates ?? { lat: 0, lon: 0 };
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
          longitude: lon,
          latitude: lat,
          // email: email as string,
          ...(role === 'OWNER' && {
            catOwner: {
              create: {} 
            }
          })
        },
      });
  
      res.json(user);
    } catch (error) {
      console.error(error)
    }
  }
  //For cat sitter user to see their current profile
  async getSitterProfile(req:Request, res:Response) {
    const auth0Id = req.auth?.sub
    const user = await prisma.user.findUnique({
      where: {
        auth0Id: auth0Id
      }
    })
    try {
      const petSitter = await prisma.catSitter.findUnique({
        where: {userId : user?.id},
        include: {
          availability: true,
        },
      })
      console.log(petSitter);
      res.json({rate: petSitter?.rate, experience: petSitter?.experience, availabilities: petSitter?.availability})
    } catch (error) {
      console.error(error)
    }
    
  }
  //For cat sitter user to update their profile
  async editSitterProfile(req: Request, res: Response) {
    const auth0Id = req.auth?.sub
    const { rate, experience, availabilities } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        auth0Id: auth0Id
      }
    })
    try {
      let catSitter = await prisma.catSitter.findUnique({
        where: { userId: user!.id },
      });
  
      if (!catSitter) {
        catSitter = await prisma.catSitter.create({
          data: {
            userId: user!.id,
            rate: Number(rate),
            experience,
          },
        });
      }
      const updatedSitter = await prisma.catSitter.update({
        where: { userId: user!.id },
        data: {
          rate: Number(rate),
          experience,
          availability: {
            deleteMany: {},
            create: availabilities.map((av: any) => ({
              start_date: av.start_date,
              end_date: av.end_date,
              isAvailable: av.isAvailable,
            })),
          },
        },
      });
      res.json({updatedSitter});
    } catch (error) {
      console.error(error)
    }
  }
}
export default new UserControllers