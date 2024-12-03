import React, { useEffect } from "react";
import { useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const CurrentPosition = ({ currentPosition, setCurrentPosition }) => {
  //allows to access the map instance directly
  const map = useMap();

  useEffect(() => {
    //locates the current position
    map.locate().on("locationfound", (e) => {
      //set the current position based on e
      setCurrentPosition(e.latlng);
      //shifts the map to where the pin is
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  //customized a different pin for currentLocation
  const currentLocPin = new Icon({
    iconUrl: "/images/currentLoc.png",
    iconSize: [60, 60], // size of the icon
    iconAnchor: [25, 50], // Position of the icon's anchor point (relative to the icon)
    popupAnchor: [6, -30], // Position of the popup anchor
  });

  return (
    <>
      {/* place a marker on the map if currentPosition is available and a popup when clicked on the marker */}
      {currentPosition ? (
        <Marker position={currentPosition} icon={currentLocPin}>
          <Popup>You are here</Popup>
        </Marker>
      ) : null}
    </>
  );
};

export default CurrentPosition;
