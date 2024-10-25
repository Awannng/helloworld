// src/components/MapComponent.jsx

// Import React library for creating the React component
import React from 'react';

// Import map-related components from 'react-leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Import Leaflet's CSS to ensure map styles are applied correctly
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  return (
    // Set the map container to absolute positioning and make it fill the entire parent container
    <div className="absolute inset-0">
      {/* Create a MapContainer component, set the map's center coordinates and zoom level,
          and make it fill the entire height and width of the container */}
      <MapContainer center={[51.505, -0.09]} zoom={13} className="h-full w-full">
        {/* Use an OpenStreetMap tile layer to display the map tiles with attribution */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add a marker to the map at the specified coordinates */}
        <Marker position={[51.505, -0.09]}>
          {/* Display a popup when the marker is clicked */}
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

// Export the MapComponent to be used in other parts of the application
export default MapComponent;

