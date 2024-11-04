import React from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";

const AddPin = ({ pins, setPins }) => {
  //uses click function to enable users to click on the map to get the location(lat and lng)
  const map = useMapEvents({
    click(e) {
      //destructure the lat and lng from e
      const { lat, lng } = e.latlng;
      // add the location into pins plus any previous added pins
      setPins((prevPins) => [...prevPins, { lat, lng }]);
      //locate the pin
      map.locate();
      console.log("add Pin");
    }
  });

  return (
    <>
      {/* display the pins on the map */}
      {pins
        ? pins.map((pin, idx) => (
            <Marker key={idx} position={pin}>
              <Popup>
                Marker at [{pin.lat}, {pin.lng}]
              </Popup>
            </Marker>
          ))
        : null}
    </>
  );
};

export default AddPin;
