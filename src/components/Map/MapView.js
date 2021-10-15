import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import IconLocation from "./IconLocation";

const MapView = () => {
  const position = [-33.55448343814186, -70.66600466141448];
  return (
    <>
      <MapContainer
        className="map"
        center={position}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={IconLocation}>
          <Popup>
            Baquedano #10134, El Bosque
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapView;
