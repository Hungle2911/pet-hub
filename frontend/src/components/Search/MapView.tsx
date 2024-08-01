import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

interface CatSitter {
  id: number;
  user: {
    name: string;
    latitude: number;
    longitude: number;
  };
  rate: number;
}

interface MapViewProps {
  catSitters: CatSitter[];
  center: LatLngExpression;
}

const MapView = ({ catSitters, center }: MapViewProps) => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {catSitters.map((sitter) => (
        <Marker
          key={sitter.id}
          position={
            [sitter.user.latitude, sitter.user.longitude] as LatLngExpression
          }
        >
          <Popup>
            <div>
              <h3>{sitter.user.name}</h3>
              <p>Rate: ${sitter.rate}/hour</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
