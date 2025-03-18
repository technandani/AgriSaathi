import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet CSS

const HandelMap = () => {
  // Coordinates for the Koshi Barrage (center of the map)
  const center = [26.5333, 87.0167];

  // Coordinates for the Koshi River path (approximate)
  const koshiRiverPath = [
    [27.7128, 87.1270], // Source (Near Tibet-Nepal Border)
    [26.5333, 87.0167], // Koshi Barrage (Nepal-India Border)
    [25.3988, 87.2460], // Confluence with Ganges (Bihar, India)
  ];

  return (
   <>
      <MapContainer center={center} zoom={12} style={{ height: '500px', width: '100%' }}>
      {/* TileLayer for the map (OpenStreetMap is free) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Markers for key points along the Koshi River */}
      <Marker position={[27.7128, 87.1270]}>
        <Popup>Source of Koshi River (Near Tibet-Nepal Border)</Popup>
      </Marker>
      <Marker position={[26.5333, 87.0167]}>
        <Popup>Koshi Barrage (Nepal-India Border)</Popup>
      </Marker>
      <Marker position={[25.3988, 87.2460]}>
        <Popup>Confluence with Ganges (Bihar, India)</Popup>
      </Marker>

      {/* Polyline to show the path of the Koshi River */}
      <Polyline
        positions={koshiRiverPath}
        color="green"
        weight={3}
        opacity={0.7}
      />
    </MapContainer>
   </>
  );
};

export default HandelMap;