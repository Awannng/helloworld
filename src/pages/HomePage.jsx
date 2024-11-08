// src/pages/HomePage.jsx

// Import React library for creating the React component
import React from "react";
import {useNavigate} from "react-router-dom";
// Import the custom MapComponent to be used on this page
import MapComponent from "../components/MapComponent";
import TimeLine from "../components/TimeLine";

const HomePage = () => {
  const navigate = useNavigate();

  // Navigate to Profile page, doesn't work at the moment
  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    // Set the container to relative positioning and make it fill the entire screen's height and width
    <div className="relative h-screen w-screen">
      <div className="z-0">
        {/* Render the MapComponent to show the map */}
        <MapComponent />
      </div>

      <div className="z-20">
        <TimeLine />
      </div>

      {/*Button to Profile Page*/}
      <div className="absolute top-4 left-4 z-30">
        <button onClick={(e) => goToProfile(e)} className="bg-yellow-400 left-4 z-30">
          Profile Page
        </button>
      </div>
    </div>
  );
};

// Export the HomePage component to be used in other parts of the application
export default HomePage;
