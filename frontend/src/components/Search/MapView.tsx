import {
  GoogleMap,
  Marker,
  InfoWindow,
  CircleF,
  useLoadScript,
} from "@react-google-maps/api";
import { useState } from "react";
import { CatSitter } from "../../types/types";
import Loading from "../Loading/Loading";

interface MapViewProps {
  catSitters: CatSitter[];
  center: { lat: number; lng: number };
  radius: number;
}

const MapView = ({ catSitters, center, radius }: MapViewProps) => {
  const [selectedSitter, setSelectedSitter] = useState<CatSitter | null>(null);
  const googleMapAPI = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapAPI,
  });
  const mapContainerStyle = {
    width: "100%",
    height: "600px",
  };
  const onSelect = (sitter: CatSitter) => {
    setSelectedSitter(sitter);
  };

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
  if (!isLoaded) return <Loading />;
  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={11} center={center}>
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
            <h3>
              {selectedSitter.user.first_name} {selectedSitter.user.last_name}
            </h3>
            <p>Rate: ${selectedSitter.rate}/day</p>
          </div>
        </InfoWindow>
      )}
      <CircleF center={center} radius={radius} options={circleOptions} />
    </GoogleMap>
  );
};

export default MapView;
