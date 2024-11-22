// src/pages/HomePage.jsx

// Import React library for creating the React component
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import the custom MapComponent to be used on this page
import MapComponent from "../components/MapComponent";
import TimeLine from "../components/TimeLine";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const HomePage = ({
  setIsAuthenticated,
  isAuthenticated,
  clickProfile,
  setProfile,
}) => {
  const navigate = useNavigate();

  //when click Log Out, set the isAuthenticated=false and go to the login page
  const signOut = () => {
    setIsAuthenticated(!isAuthenticated);
    navigate("/");
  };

  //shows the dropdown menu
  const [menu, setMenu] = useState(false);

  return (
    // Set the container to relative positioning and make it fill the entire screen's height and width
    <div className=" h-screen w-screen">
      {/* Logo at the top-left corner */}
      <div className="absolute top-0 left-0 z-30">
        <button onClick={() => setMenu(!menu)}>
          <Logo />
        </button>

        {/* When click the on the logo, it shows a dropdown menu */}
        {menu && (
          <div className="absolute top-10 left-5 translate-y-1/2">
            <div className="bg-white h-auto shadow-md rounded-md text-sm flex flex-col p-1 ">
              <button
                // When click on the button, it changes the clickProfile to true which will goes back to the App.jsx to check
                onClick={(e) => setProfile(!clickProfile)}
                className="hover:bg-slate-100 rounded-md p-2"
              >
                <Link to="/profile">Profile</Link>
              </button>

              <button
                //When click, it will goes back to the login page
                onClick={async () => {
                  await fetch(`${import.meta.env.VITE_API_URL}/logout`);
                  signOut();
                }}
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
