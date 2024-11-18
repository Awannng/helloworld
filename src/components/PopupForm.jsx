import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiSaveLine } from "react-icons/ri";

const PopupForm = ({ pin, setPins }) => {
  //store the data of country
  const [country, setCountry] = useState("");
  //store the data of the city
  const [city, setCity] = useState("");
  //store the data of starting date for travel
  const [startDate, setStartDate] = useState("");
  //store the data of the ending date for travel
  const [endDate, setEndDate] = useState("");

  const [notes, setNotes] = useState([]);

  //Deletes the marker when click on the "delete" button, this filters the pin where the lat or lon are not equal
  const removePin = (pin) => {
    setPins(
      (prevPins) =>
        prevPins.filter((p) => p.lat !== pin.lat || p.lng !== pin.lng) // Remove the specific pin
    );
  };

  return (
    <>
      <form>
        <div className="mt-1 flex justify-end gap-2">
          {/* Submit button to have the data send to the database */}
          <button className=" text-blue-600 p-1" type="button">
            <RiSaveLine className="size-4"/>
          </button>

          {/* Delete pin button */}
          <button
            className=" text-red-700"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the map click from triggering
              removePin(pin); //removes the pin
            }}
            type="button"
          >
            <RiDeleteBinLine className="size-4" />
          </button>
        </div>
        
        <div className="flex flex-col">
          {/* Input box for country */}
          <label htmlFor="country">Country</label>
          <input
            className="mb-1 border"
            type="text"
            value={country}
            name="country"
            id="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>

        {/* Input box for city */}
        <div className="flex flex-col">
          <label htmlFor="city">City</label>
          <input
            className="mb-1 border"
            type="text"
            value={city}
            name="city"
            id="city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>

        {/* Input box for the starting date of travel */}
        <div className="flex flex-col">
          <label htmlFor="startDate">Start Date</label>{" "}
          <input
            className="mb-1 border"
            type="text"
            value={startDate}
            name="startDate"
            id="startDate"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
        </div>

        {/* Input box for the ending data of travel */}
        <div className="flex flex-col">
          <label htmlFor="endDate">End Date</label>
          <input
            className="mb-1 border"
            type="text"
            value={endDate}
            name="endDate"
            id="endDate"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="endDate">Notes</label>
          <textarea
            className="mb-1 border"
            type="text"
            value={notes}
            name="notes"
            id="notes"
            rows="3"
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          />
        </div>
      </form>
    </>
  );
};

export default PopupForm;
