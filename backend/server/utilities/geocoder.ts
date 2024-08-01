import NodeGeocoder from 'node-geocoder';

const options: NodeGeocoder.Options = {
  provider: 'openstreetmap',
};

const geocoder = NodeGeocoder(options);

export async function geocodeAddress(address: string): Promise<{lat: number | undefined, lon: number | undefined} | null> {
  try {
    const res = await geocoder.geocode(address);
    if (res.length > 0) {
      return { lat: res[0].latitude, lon: res[0].longitude };
    }
    return null;
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
}