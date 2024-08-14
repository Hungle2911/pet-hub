import { GoogleMap, Marker, InfoWindow, CircleF } from "@react-google-maps/api";
import { useState } from "react";
import { CatSitter } from "../../types/types";

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
    zIndex: 0,
  };
  const centerCircleOptions = {
    strokeColor: "#ffffff",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00008B",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 3,
  };
  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center}>
      <CircleF center={center} options={centerCircleOptions} radius={500} />
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
          options={{
            zIndex: 4,
          }}
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
