import React from "react";
import { IoMdClose } from "react-icons/io";

const SettingForm = ({
  openSetting,
  setOpenSetting,
  userInfo,
  handleSubmit,
  handleChange,
}) => {
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
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              className="border mb-7"
              type="text"
              value={userInfo.username || ""}
              name="username"
              id="username"
              onChange={handleChange}
            />
            
            <label htmlFor="homeCountry">Country</label>
            <input
              className="border mb-7"
              type="text"
              value={userInfo.homeCountry || ""}
              name="homeCountry"
              id="homeCountry"
              onChange={handleChange}
            />

            <label htmlFor="homeCity">City</label>
            <input
              className="border mb-7"
              type="text"
              value={userInfo.homeCity || ""}
              name="homeCity"
              id="homeCity"
              onChange={handleChange}
            />

            <div className="flex justify-center">
              {/* Save button */}
              <button
                className="bg-orange-400 hover:bg-orange-700 p-1 text-white rounded-md"
                type="submit"
              >
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
