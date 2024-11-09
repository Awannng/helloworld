// src/pages/HomePage.jsx

// Import React library for creating the React component
import React from "react";
import { useNavigate } from "react-router-dom";
// Import the custom MapComponent to be used on this page
import MapComponent from "../components/MapComponent";
import TimeLine from "../components/TimeLine";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // Navigate to Profile page, doesn't work at the moment
  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    // Set the container to relative positioning and make it fill the entire screen's height and width
    <div className=" h-screen w-screen">
      {/* Gos to the Profile Page */}
      <div className="absolute top-20 left-4 bg-yellow-400 z-30">
        <button onClick={goToProfile}>Profile Page</button>
      </div>

      {/* Logo at the bottom left corner */}
      <div className="absolute bottom-1.5 -left-6 z-30">
        <Logo />
      </div>

      <div className="-z-10">
        {/* Render the MapComponent to show the map */}
        <MapComponent />
      </div>

      {/* <div className="z-20">
        <TimeLine />
      </div> */}
    </div>
  );
};

// Export the HomePage component to be used in other parts of the application
export default HomePage;
