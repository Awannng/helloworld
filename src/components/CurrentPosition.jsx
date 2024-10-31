import React, { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";

const CurrentPosition = ({currentPosition, setCurrentPosition}) => {
 
// this functions will return the location that you are currently at and add a marker, plus move the map to where the marker is
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
        //set the position based on the lag and lng of your location
      setCurrentPosition(e.latlng);
        //moves the map to where the marker is
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return (
    <>
    {/* place a marker on the map if currentPosition is available and show a pop when clicked on the marker */}
      {currentPosition == null ? null : (
        <Marker position={currentPosition}>
          <Popup>You are here</Popup>
        </Marker>
      )}
    </>
  );
};

export default CurrentPosition
