import React, { useEffect } from "react";
import { useMapEvents, useMap, Marker, Popup } from "react-leaflet";

// added activateGeolocation so this doesn't happen every render
const CurrentPosition = ({ currentPosition, setCurrentPosition, activateGeolocation }) => {
  //allows to access the map instance directly
  const map = useMap();

  //If activateGeolocation, jumps to the current position the user is at and adds a pin to it
  useEffect(() => {
    if (activateGeolocation){
      //locates the current position
      map.locate().on("locationfound", (e) => {
      //set the current position based on e
      setCurrentPosition(e.latlng);
      //shifts the map to where the pin is
      map.flyTo(e.latlng, map.getZoom());
      console.log("located current position")
      });
    }
  }, [map, activateGeolocation]);

  return (
    <>
      {/* place a marker on the map if currentPosition is available and a popup when clicked on the marker */}
      {currentPosition ? (
        <Marker position={currentPosition}>
          <Popup>You are here</Popup>
        </Marker>
      ) : null}
    </>
  );
};

export default CurrentPosition;
