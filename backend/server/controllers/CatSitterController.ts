import { Request, Response } from "express"
import { geocodeAddress } from "../utilities/geocoder";
import { calculateDistance } from "../utilities/geoDistance";
import prisma from "../configs";
class CatSitterController {
  async search(req: Request, res: Response) {
    const { address, startDate, endDate, maxRate, maxDistance = 10 } = req.query;
  try {
    const coordinates = await geocodeAddress(address as string);
    if (!coordinates) {
      return res.status(400).json({ error: 'Invalid address' });}
    const { lat, lon } = coordinates;
    const allCatSitters = await prisma.catSitter.findMany({
      where: {
        user: {
          latitude: { not: null },
          longitude: { not: null },
        },
        rate: { lte: Number(maxRate) },
        availability: {
          some: {
            date: {
              gte: new Date(startDate as string),
              lte: new Date(endDate as string),
            },
            isAvailable: true,
          },
        },
      },
      include: {
        user: true,
      },
    });

    // Filter cat sitters by distance
    const nearbyCatSitters = allCatSitters.filter(sitter => {
      const distance = calculateDistance(lat, lon, sitter.user.latitude!, sitter.user.longitude!);
      return distance <= Number(maxDistance);
    });

    res.json(nearbyCatSitters);
  } catch (error) {
    console.error('Error searching cat sitters:', error);
    res.status(500).json({ error: 'Error searching cat sitters' });
  }
 }
}
export default new CatSitterController