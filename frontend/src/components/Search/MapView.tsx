import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  CircleF,
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
  radius: number;
}

const MapView = ({ catSitters, center, radius }: MapViewProps) => {
  const [selectedSitter, setSelectedSitter] = useState<CatSitter | null>(null);
  const mapContainerStyle = {
    width: "100%",
    height: "600px",
  };
  const onSelect = (sitter: CatSitter) => {
    setSelectedSitter(sitter);
  };
  const googleMapAPI = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const circleOptions = {
    strokeColor: "#ED9C54",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#ED9C54",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1,
  };
  return (
    <LoadScript googleMapsApiKey={googleMapAPI}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
      >
        <CircleF center={center} radius={radius} options={circleOptions} />
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
