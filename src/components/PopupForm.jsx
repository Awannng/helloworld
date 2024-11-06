import React, { useState } from "react";

const PopupForm = () => {
  //store the data of country
  const [country, setCountry] = useState("");
  //store the data of the city
  const [city, setCity] = useState("");
  //store the data of starting date for travel
  const [startDate, setStartDate] = useState("");
  //store the data of the ending date for travel
  const [endDate, setEndDate] = useState("");

  return (
    <>
      <div className="">
        <form>
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

          {/* Submit button to have the data send to the database */}
          <div className="mt-1 flex justify-center">
            <button
              className=" bg-lime-700 text-white p-1 rounded-full"
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PopupForm;
