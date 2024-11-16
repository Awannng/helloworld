import React from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import PopupForm from "./PopupForm";

const AddPin = ({ pins, setPins }) => {
  //uses click function to enable users to click on the map to get the location(lat and lng)
  useMapEvents({
    click(e) {
      //destructure the lat and lng from e
      const { lat, lng } = e.latlng;

      // add the location into pins plus any previous added pins
      setPins((prevPins) => [...prevPins, { lat, lng }]);

      console.log("add Pin"); //checking whether we add the pin
    },
  });

  //when adding the pin, the form will automatically pop up
  const openPopup = (e) => {
    e.target.openPopup();
  };

  //Deletes the marker when click on the "delete" button, this filters the pin where the lat or lon are not equal
  const removePin = (pin) => {
    setPins(
      (prevPins) =>
        prevPins.filter((p) => p.lat !== pin.lat || p.lng !== pin.lng) // Remove the specific pin
    );
  };
  return (
    <>
      {/* display the pins on the map */}
      {pins.length > 0 &&
        pins.map((pin, idx) => (
          <Marker
            key={idx}
            position={pin}
            eventHandlers={{
              add: openPopup,
            }}
          >
            <Popup>
              {/* when click of the pin, it will show a pop up form that store the info of the palnned travel by aksing Country, Start Date, End Date */}
              <PopupForm />

              {/* Delete pin button */}
              <button
                className=" text-red-700 mb-2"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the map click from triggering
                  removePin(pin); //removes the pin
                }}
                type="button"
              >
                Delete
              </button>
            </Popup>
          </Marker>
        ))}
    </>
  );
};

export default AddPin;
