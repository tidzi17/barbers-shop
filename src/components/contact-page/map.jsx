import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import pin from '../../assets/locationpin.png';
import { icon as LeafletIcon } from 'leaflet';

const Map = () => {

    const customIcon = LeafletIcon({
        iconUrl: pin,
        iconSize: [32, 32], 
        iconAnchor: [16, 32]
      });
      const position = [40.7128, -74.0060]

  return (
    <div>
      <MapContainer className="w-full h-[250px] md:h-[500px]" center={position} zoom={5} >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" attribution="Map data &copy; OpenStreetMap contributors" />
        <Marker position={position} icon={customIcon}>
          <Popup>{"21.Jump Street"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
