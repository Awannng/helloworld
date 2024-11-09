// src/components/MapComponent.jsx

// Import React library for creating the React component
import React, { useState } from "react";

// Import map-related components from 'react-leaflet'
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

// Import Leaflet's CSS to ensure map styles are applied correctly
import "leaflet/dist/leaflet.css";
import CurrentPosition from "./CurrentPosition";
import AddPin from "./AddPin";

const MapComponent = () => {
  //prop of the CurrentPosition that tracks your current location
  const [currentPosition, setCurrentPosition] = useState(null);

  //stores the locations that is being clicked on the map
  const [pins, setPins] = useState([]);

  return (
    <>
      {/* Set the map container to absolute positioning and make it fill the
      entire parent container */}
      <div className="w-full h-screen">
        {/* Create a MapContainer component, set the map's center coordinates and zoom level,
          and make it fill the entire height and width of the container */}
        <MapContainer
          center={[0, 0]} // default is full view of map
          zoom={3}
          maxZoom={6} // zoom in: higher the number, the more specific
          minZoom={3} //zoom out: lower the number, the more broad
          scrollWheelZoom={true} //disable the mousepad zoom in/out
          maxBounds={[
            [82, -180], // South-West corner of bounding box
            [-60, 180], // North-East corner of bounding box
          ]}
          maxBoundsViscosity={1.0} // prevents dragging past bounds
          dragging={true}
          zoomAnimation={true} // Smooth zooming
          fadeAnimation={true} // Smooth fading between tiles
          className="h-full w-full z-10"
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
