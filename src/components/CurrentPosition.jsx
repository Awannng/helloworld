import React, { useEffect } from "react";
import { useMapEvents, useMap, Marker, Popup } from "react-leaflet";

const CurrentPosition = ({ currentPosition, setCurrentPosition }) => {
  //allows to access the map instance directly
  const map = useMap();

  //Automatically jump to the current position the user is at and adds a pin to it
  //render based on the map
  useEffect(() => {
    //locates the current position
    map.locate().on("locationfound", (e) => {
      //set the current position based on e
      setCurrentPosition(e.latlng);
      //shifts the map to where the pin is
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

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
