import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

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
  center: { lat: number; lng: number };
}

const MapView = ({ catSitters, center }: MapViewProps) => {
  const [selectedSitter, setSelectedSitter] = useState<CatSitter | null>(null);
  const mapContainerStyle = {
    width: "100%",
    height: "600px",
  };
  const onSelect = (sitter: CatSitter) => {
    setSelectedSitter(sitter);
  };
  const googleMapAPI = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={googleMapAPI}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
      >
        {catSitters.map((sitter) => (
          <Marker
            key={sitter.id}
            position={{ lat: sitter.user.latitude, lng: sitter.user.longitude }}
            onClick={() => onSelect(sitter)}
          />
        ))}
        {selectedSitter && (
          <InfoWindow
            position={{
              lat: selectedSitter.user.latitude,
              lng: selectedSitter.user.longitude,
            }}
            onCloseClick={() => setSelectedSitter(null)}
          >
            <div>
              <h3>{selectedSitter.user.name}</h3>
              <p>Rate: ${selectedSitter.rate}/hour</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
