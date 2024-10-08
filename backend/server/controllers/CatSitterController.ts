import { Request, Response } from "express"
import { geocodeAddress } from "../utilities/geocoder";
import { calculateDistance } from "../utilities/geoDistance";
import prisma from "../configs";
class CatSitterController {
  async search(req: Request, res: Response) {
    const { address, startDate, endDate, maxRate, maxDistance = 5, longitude, latitude } = req.query;
  try {
    let lat: number | null = null
    let lon: number | null = null
    if (longitude && latitude && !address) {
      lat = Number(latitude);
      lon = Number(longitude);
    } else if (address) {
      const coordinates = await geocodeAddress(address as string);
      console.log(coordinates);
    if (!coordinates) {
      return res.status(400).json({ error: 'Invalid address' });}
      lat = coordinates.lat
      lon = coordinates.lon
    }
    const allCatSitters = await prisma.catSitter.findMany({
      where: {
        user: {
          latitude: { not: null },
          longitude: { not: null },
        },
        rate: { lte: Number(maxRate) },
        availability: startDate && endDate ? {
          some: {
            AND: [
              { start_date: { lte: new Date(endDate as string) } },
              { end_date: { gte: new Date(startDate as string) } },
              { isAvailable: true }
            ]
          }
        } : undefined
      },
      include: {
        user: true,
      },
    });

    // Filter cat sitters by distance
    const nearbyCatSitters = allCatSitters.filter(sitter => {
      const distance = calculateDistance(lat!, lon!, sitter.user.latitude!, sitter.user.longitude!);
      return distance <= Number(maxDistance);
    });
    // console.log({
    //   userLocation: {
    //     latitude: lat,
    //     longitude: lon,
    //   },
    //   catSitters: nearbyCatSitters
    // });
    res.json({
      userLocation: {
        latitude: lat,
        longitude: lon,
      },
      catSitters: nearbyCatSitters
    });
  } catch (error) {
    console.error('Error searching cat sitters:', error);
    res.status(500).json({ error: 'Error searching cat sitters' });
  }
 }
 async getSitterProfile(req:Request, res:Response) {
  const {sitterId} = req.params
  try {
    const petSitter = await prisma.catSitter.findUnique({
      where: {id : Number(sitterId)},
      include: {
        availability: true,
        user: true,
      },
    })
    // console.log(petSitter);
    res.json(petSitter)
  } catch (error) {
    console.error(error)
  }
  
}
}
export default new CatSitterController