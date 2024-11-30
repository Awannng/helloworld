import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const SettingForm = ({ openSetting, setOpenSetting }) => {
  const [homeCountry, setHomeCountry] = useState("");
  const [homeCity, setHomeCity] = useState("");

  return (
    <>
      <div className="setting">
        <div className="rounded-md p-5 z-40 setting-box">
          {/* Close the Setting fotm */}
          <button
            className="absolute top-1 right-3 "
            onClick={() => setOpenSetting(!openSetting)}
          >
            <IoMdClose className="text-red-600" />
          </button>

          {/* The input form for User info */}
          <form className="flex flex-col">
            <label htmlFor="country">Country</label>
            <input
              className="border mb-7"
              type="text"
              value={homeCountry}
              name="country"
              onChange={(e) => setHomeCountry(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              className="border mb-7"
              type="text"
              value={homeCity}
              name="city"
              onChange={(e) => setHomeCity(e.target.value)}
            />

            <div className="flex justify-center">
              {/* Save button */}
              <button className="bg-orange-400 hover:bg-orange-700 p-1 text-white rounded-md">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SettingForm;
