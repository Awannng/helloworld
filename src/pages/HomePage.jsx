// Import React library for creating the React component
import React from "react";
// Import the custom MapComponent to be used on this page
import MapComponent from "../components/MapComponent";
import Logo from "../components/Logo";
import DropdownMenu from "../components/DropdownMenu";

const HomePage = ({ menu, setMenu, signOut }) => {
  return (
    // Set the container to relative positioning and make it fill the entire screen's height and width
    <div className="h-screen w-screen">
      {/* Logo at the top-left corner */}
      <div className="absolute top-0 left-0 z-30">
        <button
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <Logo />
        </button>

        {/* When click the on the logo, it shows a dropdown menu */}
        {menu && <DropdownMenu signOut={signOut} />}
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
