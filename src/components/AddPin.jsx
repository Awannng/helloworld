import React, { useEffect, useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import PopupForm from "./PopupForm";

import { RiDeleteBinLine } from "react-icons/ri";
import { useUser } from "@clerk/clerk-react";

const AddPin = ({ pins, setPins }) => {
  const { user } = useUser(); // Get the user's username from Clerk
  const [user1, setUser1] = useState([]); // To get userId for fetchPin and POST pins (in URL)
  const [showPins, setShowPins] = useState([]); // Display saved pins
  const [click, setClick] = useState(true); // Show Popup form and new pin when clicking the map
  const [pinData, setPinData] = useState({
    country: "",
    city: "",
    startDate: "",
    lat: "",
    lng: "",
    endDate: "",
    notes: "",
    userId: "",
  });

  // Fetch the user's data based on the username
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${user.id}`);
        const data = await response.json();
        setUser1(data);
      } catch (error) {
        console.error("Error fetching user's info:", error);
      }
    };

    if (user) fetchUser();
  }, [user]);

  const userId = user1?.userId; // Ensure `userId` is retrieved correctly

  // Fetch pins data from the backend
  const fetchPins = async () => {
    if (!userId) return; // Ensure `userId` is available
    try {
      const response = await fetch(`http://localhost:3000/pins/${userId}`);
      const data = await response.json();
      setShowPins(data);
    } catch (error) {
      console.error("Error fetching pins:", error);
    }
  };

  // Call `fetchPins` when `userId` changes
  useEffect(() => {
    fetchPins();
  }, [userId]);

  // Handle map click to add new pin
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPinData((prevPin) => ({ ...prevPin, lat, lng }));
      setPins((prevPins) => [...prevPins, { lat, lng }]);
      setClick(true);
    },
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPinData((prevPin) => ({
      ...prevPin,
      [name]: value,
    }));
  };

  // Handle form submission for creating a new pin
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!pinData.country || !pinData.city || !pinData.startDate || !pinData.endDate || !pinData.lat || !pinData.lng) {
      console.error("Please fill all required fields");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/savePin/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...pinData, userId }),
      });
      //check data type
      if (response.ok) {
        setPinData({
          country: "",
          city: "",
          startDate: "",
          lat: "",
          lng: "",
          endDate: "",
          notes: "",
          userId: "",
        });
        fetchPins();
        setClick(false);
      } else {
        const errorData = await response.json();
        console.error("Error creating pin:", errorData);
      }
    } catch (error) {
      console.error("Error creating pin:", error);
    }
  };
  
  

  // Handle deleting a saved pin by ID
  const handleDelete = async (pin) => {
    try {
      const response = await fetch(`http://localhost:3000/pins/${pin.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchPins(); // Refetch pins after deletion
      } else {
        console.error("Error deleting pin:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting pin:", error);
    }
  };

  return (
    <>
      {/* Display unsaved pins */}
      {click &&
        pins.map((pin, idx) => (
          <Marker
            key={idx}
            position={pin}
          >
            <Popup>
              <PopupForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                pinData={pinData}
                pin={pin}
                setPins={setPins}
              />
            </Popup>
          </Marker>
        ))}

      {/* Display saved pins */}
      {Array.isArray(showPins) && showPins.map((pin, idx) => {
  const dateStart = new Date(pin.startDate).toISOString().slice(0, 10);
  const dateEnd = new Date(pin.endDate).toISOString().slice(0, 10);
  return (
    <Marker key={idx} position={[pin.lat, pin.lng]}>
      <Popup>
        <div className="flex flex-col">
          <button
            className="text-red-700"
            onClick={() => handleDelete(pin)}
            type="button"
          >
            <RiDeleteBinLine className="size-4" />
          </button>
          <p>
            {pin.city}, {pin.country}
          </p>
          <p>
            {dateStart} - {dateEnd}
          </p>
          <p>Notes: {pin.notes} </p>
        </div>
      </Popup>
    </Marker>
  );
})}

    </>
  );
};

export default AddPin;

