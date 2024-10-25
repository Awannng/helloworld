// src/pages/HomePage.jsx

// Import React library for creating the React component
import React from 'react';

// Import the custom MapComponent to be used on this page
import MapComponent from '../components/MapComponent';

const HomePage = () => {
  return (
    // Set the container to relative positioning and make it fill the entire screen's height and width
    <div className="relative h-screen w-screen">
      {/* Display a heading at the top of the page */}
      <h1 className="text-2xl font-bold mb-4">My Map Page</h1>
      {/* Render the MapComponent to show the map */}
      <MapComponent />
    </div>
  );
};

// Export the HomePage component to be used in other parts of the application
export default HomePage;
