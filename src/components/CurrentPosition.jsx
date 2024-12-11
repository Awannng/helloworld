import React, { useEffect } from "react";
import { useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const CurrentPosition = ({ currentPosition, setCurrentPosition }) => {
  // Access the Leaflet map instance
  const map = useMap();

  useEffect(() => {
    // Locate the current position
    const locate = () => {
      map.locate({
        setView: true, // Automatically center the map on the user's location
        maxZoom: 16, // Set maximum zoom level
        enableHighAccuracy: false, // Request high accuracy location
        timeout: 10000, // Maximum wait time for location
      })
        .on("locationfound", (e) => {
          console.log("Location found:", e.latlng);
          setCurrentPosition(e.latlng); // Update state with the user's position
          map.flyTo(e.latlng, map.getZoom()); // Center map on user's location
        })
        .on("locationerror", (e) => {
          console.error("Location error:", e.message);
          alert(
            "Unable to access your location. Please ensure location services are enabled and reload the page."
          );
        });
    };

    // Trigger location request on component mount
    locate();
  }, [map, setCurrentPosition]);

  // Custom icon for the current location
  const currentLocPin = new Icon({
    iconUrl: "/images/currentLoc.png",
    iconSize: [60, 60], // Icon size
    iconAnchor: [30, 60], // Icon anchor position
    popupAnchor: [0, -40], // Popup position relative to icon
  });

  return (
    <>
      {currentPosition ? (
        <Marker position={currentPosition} icon={currentLocPin}>
          <Popup>You are here</Popup>
        </Marker>
      ) : null}
    </>
  );
};

export default CurrentPosition;
