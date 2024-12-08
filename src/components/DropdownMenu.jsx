import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ signOut }) => {
  return (
    <>
      <div className="absolute top-0 left-5 translate-y-1/2">
        <div className="bg-white h-auto shadow-md rounded-md text-sm flex flex-col p-1 ">
          <button
            // When click on the button, it goes to the homepage
            className="hover:bg-slate-100 rounded-md p-2"
          >
            <Link to="/home">Home</Link>
          </button>

          <button
            // When click on the button, it goes to the profile page
            className="hover:bg-slate-100 rounded-md p-2"
          >
            <Link to="/profile">Profile</Link>
          </button>

          <button
            //When click, it will goes back to the timeline page
            className="hover:bg-slate-100 rounded-md p-2"
            type="button"
          >
            <Link to="/timeline">Timeline</Link>
          </button>

          <button
            //When click, it will goes back to the landing page
            onClick={signOut}
            className="hover:bg-slate-100 rounded-md p-2"
            type="button"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
