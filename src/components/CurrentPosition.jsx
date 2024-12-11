import React, { useEffect, useState } from "react";
import { useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const CurrentPosition = () => {
  const [currentPosition, setCurrentPosition] = useState(null); 
  const map = useMap();

  useEffect(() => {
    console.log("Attempting to locate user...");
    map.locate({
      setView: true, 
      maxZoom: 16, 
      enableHighAccuracy: true, 
      timeout: 30000, 
    })
      .on("locationfound", (e) => {
        console.log("Location found:", e.latlng);
        setCurrentPosition(e.latlng); 
        map.flyTo(e.latlng, map.getZoom()); 
      })
      .on("locationerror", (e) => {
        console.error("Location error:", e.code, e.message);
        alert(
          `Unable to access your location. Please ensure location services are enabled.`
        );
      });
  }, [map]); 

  
  const currentLocPin = new Icon({
    iconUrl: "/images/currentLoc.png", 
    iconSize: [40, 40], 
    iconAnchor: [20, 40], 
  });

  return (
    <>
      {currentPosition && (
        <Marker position={currentPosition} icon={currentLocPin}>
          <Popup>You are here</Popup>
        </Marker>
      )}
    </>
  );
};

export default CurrentPosition;
