import React from "react";
import MapTimeline from "../components/MapTimeline";
import Logo from "../components/Logo";
import DropdownMenu from "../components/DropdownMenu";

const TimeLinePage = ({ menu, setMenu, signOut }) => {
  return (
    <div className="min-h-full">
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

      {/* Timeline component */}
      <div className="mt-56">
        <MapTimeline />
      </div>
    </div>
  );
};

export default TimeLinePage;
