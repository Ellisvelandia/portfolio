import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MapPinIcon } from "@heroicons/react/24/solid";
import "leaflet/dist/leaflet.css";
import React from "react";

function Map() {
  return (
    <div className="h-screen w-full mx-auto -z-20 opacity-90">
      <MapContainer
        center={[4.1338603, -74.7219903]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapPinIcon className="text-[#fd0000] h-7 w-7 animate-pulse" />
        <Marker position={[4.1338603, -74.7219903]} >
          <Popup>
            Ellis velandia lives here, now write code, send him an email, he
            wants to work with you!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
