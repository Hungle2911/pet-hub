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
    if (longitude && latitude ) {
      lat = Number(latitude);
      lon = Number(longitude);
    } else if (address) {
      const coordinates = await geocodeAddress(address as string);
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
            date: {
              gte: new Date(startDate as string),
              lte: new Date(endDate as string),
            },
            isAvailable: true,
          },
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

    res.json(nearbyCatSitters);
  } catch (error) {
    console.error('Error searching cat sitters:', error);
    res.status(500).json({ error: 'Error searching cat sitters' });
  }
 }
}
export default new CatSitterController