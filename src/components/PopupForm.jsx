import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiSaveLine } from "react-icons/ri";

const PopupForm = ({
  handleSubmit,
  handleChange,
  pinData,
  pin,
  setPins,

}) => {
  //Deletes the not-filled-pin when click on the "delete" button, this filters the pin where the lat or lon are not equal
  const removePin = (pin) => {
    setPins(
      (prevPins) =>
        prevPins.filter((p) => p.lat !== pin.lat || p.lng !== pin.lng) // Remove the specific pin
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-1 flex justify-end gap-2">
          {/* Submit button to have the data send to the database */}
          <button
            className=" text-blue-600 p-1"
            type="submit"
          >
            <RiSaveLine className="size-4" />
          </button>

          {/* Delete pin button */}
          <button
            className=" text-red-700"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the map click from triggering
              removePin(pin); // Delete the specific pin by ID
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
            value={pinData.country}
            name="country"
            id="country"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        {/* Input box for city */}
        <div className="flex flex-col">
          <label htmlFor="city">City</label>
          <input
            className="mb-1 border"
            type="text"
            value={pinData.city}
            name="city"
            id="city"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        {/* Input box for the starting date of travel */}
        <div className="flex flex-col">
          <label htmlFor="startDate">Start Date</label>{" "}
          <input
            className="mb-1 border"
            type="date"
            value={pinData.startDate}
            name="startDate"
            id="startDate"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        {/* Input box for the ending data of travel */}
        <div className="flex flex-col">
          <label htmlFor="endDate">End Date</label>
          <input
            className="mb-1 border"
            type="date"
            value={pinData.endDate}
            name="endDate"
            id="endDate"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="endDate">Notes</label>
          <textarea
            className="mb-1 border"
            type="text"
            value={pinData.notes}
            name="notes"
            id="notes"
            rows="3"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </form>
    </>
  );
};

export default PopupForm;
