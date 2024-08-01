import { Client } from '@googlemaps/google-maps-services-js';
const client = new Client({});

export async function geocodeAddress(address: string): Promise<{ lat: number; lon: number } | null> {
  try {
    const response = await client.geocode({
      params: {
        address: address,
        key: process.env.GOOGLE_MAPS_API_KEY ?? 'error',
      },
      timeout: 1000, // milliseconds
    });

    if (response.data.results.length > 0) {
      const location = response.data.results[0].geometry.location;
      return { lat: location.lat, lon: location.lng };
    }

    return null;
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
}


// // Test addresses
// const addresses = [
//   '1600 Amphitheatre Parkway, Mountain View, CA'
// ];

// // Test the geocodeAddress function
// async function testGeocoder() {
//   for (const address of addresses) {
//     console.log(`Testing address: ${address}`);
//     const result = await geocodeAddress(address);
//     console.log('Result:', result);
//     console.log('---');
//   }
// }

// testGeocoder();
