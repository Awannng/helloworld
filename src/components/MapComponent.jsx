// src/components/MapComponent.jsx

// Import React library for creating the React component
import React from "react";

// Import map-related components from 'react-leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

// Import Leaflet's CSS to ensure map styles are applied correctly
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  //sets the max boundary that can be dragged on the map, since the map has repeated area, this makes the boundry of one world map.
  const bounds = [
    [-78.870, -173.961], // South West corner(North Pacific Ocean)
    [83.290, 189.501], // North East corner(North Pacific Ocean)
  ];

  return (
    // Set the map container to absolute positioning and make it fill the entire parent container
    <div className="absolute inset-0 top-0">
      {/* Create a MapContainer component, set the map's center coordinates and zoom level,
          and make it fill the entire height and width of the container */}
      <MapContainer
        center={[51.505, -0.09]}
        zoom={12}
        maxZoom={10} // zoom in: higher the number, the more specific
        minZoom={3} //zoom out: lower the number, the more broad
        scrollWheelZoom={true} //disable the mousepad zoom in/out
        maxBounds={bounds}
        className="h-full w-full"
      >
        {/* Use an OpenStreetMap tile layer to display the map tiles with attribution */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add a marker to the map at the specified coordinates */}ß
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
