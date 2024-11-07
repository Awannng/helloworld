import React, {useRef, useEffect} from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import PopupForm from "./PopupForm";

const AddPin = ({ pins, setPins }) => {
  //uses click function to enable users to click on the map to get the location(lat and lng)
  const map = useMapEvents({
    click(e) {
      //destructure the lat and lng from e
      const { lat, lng } = e.latlng;
      // add the location into pins plus any previous added pins
      setPins((prevPins) => [...prevPins, { lat, lng }]);
      
      console.log("add Pin"); //for checking whether we add the pin
      
    },
  });

  //when adding the pin, the form will automatically pop up
  const openPopup = (e) =>{
        e.target.openPopup();
    }

  return (
    <>
      {/* display the pins on the map */}
      {pins
        ? pins.map((pin, idx) => (
            <Marker key={idx} position={pin} eventHandlers={{ add: openPopup }}>
              <Popup>
                {/* when click of the pin, it will show a pop up form that store the info of the palnned travel by aksing Country, Start Date, End Date */}
                <PopupForm />
              </Popup>
            </Marker>
          ))
        : null}
    </>
  );
};

export default AddPin;
