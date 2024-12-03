import React, { useState } from "react";
import MapTimeline from "../components/MapTimeline";
import MapComponent from "../components/MapComponent";

const TimeLinePage = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleTimeline = () => {
      setIsOpen((prevState) => !prevState);
    };
  
    return (
      <div style={{ minHeight: '500px' }} className="!min-h-1000px">

        
        <button 
          onClick={toggleTimeline}
          className="absolute px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 z-50"
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
