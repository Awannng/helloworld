// Import React library for creating the React component
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Import the custom MapComponent to be used on this page
import MapComponent from "../components/MapComponent";
import TimeLine from "../components/MapTimeline";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const HomePage = ({ menu, setMenu , signOut}) => {
  const navigate = useNavigate();
  return (
    // Set the container to relative positioning and make it fill the entire screen's height and width
    <div className=" h-screen w-screen">
      {/* Logo at the top-left corner */}
      <div className="absolute top-0 left-0 z-30">
        <button onClick={() => {
          
          console.log("Toggling menu, current state:", menu);
          setMenu(!menu)}}>
          <Logo />
        </button>

        <button>
          <Link to="/timeline">Timeline</Link>
        </button>

        {/* When click the on the logo, it shows a dropdown menu */}
        {menu && (
          <div className="absolute top-10 left-5 translate-y-1/2">
            <div className="bg-white h-auto shadow-md rounded-md text-sm flex flex-col p-1 ">
              <button
                // When click on the button, it goes to the profile page
                className="hover:bg-slate-100 rounded-md p-2"
              >
                <Link to="/profile">Profile</Link>
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
        )}
      </div>

      <div className="-z-10">
        {/* Render the MapComponent to show the map */}
        <MapComponent />
      </div>
    </div>
  );
};

// Export the HomePage component to be used in other parts of the application
export default HomePage;
