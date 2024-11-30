import React, { useState } from "react";
import MapTimeline from "../components/MapTimeline";

const TimeLinePage = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleTimeline = () => {
      setIsOpen((prevState) => !prevState);
    };
  
    return (
      <div>
        <button 
          onClick={toggleTimeline}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {isOpen ? "Hide Timeline" : "Show Timeline"}
        </button>
  
        {isOpen && (
          <div
            className={`fixed bg-purple-50 shadow-lg z-50 p-4 transition-all ${isOpen ? "animate-slideIn" : "animate-slideOut"}`}
          >
            <MapTimeline />
            <button
              onClick={toggleTimeline}
              className="absolute top-2 right-2 text-xl text-gray-700"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    );
};
  
export default TimeLinePage;
