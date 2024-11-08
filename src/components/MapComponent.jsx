// src/components/MapComponent.jsx

// Import React library for creating the React component
import React, { useState } from "react";

// Import map-related components from 'react-leaflet'
import { MapContainer, TileLayer } from "react-leaflet";

// Import Leaflet's CSS to ensure map styles are applied correctly
import "leaflet/dist/leaflet.css";
import CurrentPosition from "./CurrentPosition";
import AddPin from "./AddPin";

const MapComponent = () => {
  //sets the max boundary that can be dragged on the map, since the map has repeated area, this makes the boundry of one world map.
  //lat and long
  const bounds = [
    [-78.87, -173.961], // South West corner
    [83.29, 189.501], // North East corner
  ];

  //prop of the CurrentPosition that tracks your current location
  const [currentPosition, setCurrentPosition] = useState(null);

  //stores the locations that is being clicked on the map
  const [pins, setPins] = useState([]);

  return (
    <>
      {/* Set the map container to absolute positioning and make it fill the
      entire parent container */}
      <div className="absolute inset-0 top-0 z-0">
        {/* Create a MapContainer component, set the map's center coordinates and zoom level,
          and make it fill the entire height and width of the container */}
        <MapContainer
          center={[0,0]}
          zoom={3}
          maxZoom={6} // zoom in: higher the number, the more specific
          minZoom={3} //zoom out: lower the number, the more broad
          scrollWheelZoom={true} //disable the mousepad zoom in/out
          maxBounds={[[90, -180], [-60, 180]]}
          className="h-full w-full z-0"
          dragging={true}
          zoomAnimation={true} // Smooth zooming
          fadeAnimation={true} // Smooth fading between tiles
        >
           {/* Default OpenStreetMap, but zoomed out to limit road visibility */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            preferCanvas={true}
          />

          {/* display the current location marker and reference based the props */}
          <CurrentPosition
            currentPosition={currentPosition}
            setCurrentPosition={setCurrentPosition}
          />

          {/* Adds a pin when click on the map */}
          <AddPin pins={pins} setPins={setPins} />
        </MapContainer>
      </div>
    </>
  );
};

// Export the MapComponent to be used in other parts of the application
export default MapComponent;
