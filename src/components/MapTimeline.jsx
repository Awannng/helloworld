import React, { useState } from "react";

// Timeline Event Component
const TimelineEvent = ({ name, country, description, startDate, endDate }) => {
  return (
    <button
     className="relative flex flex-col items-center">
      {/* vertical line */}
      <div className="absolute top-0 transform -translate-x-1/2 h-12 w-1 left-1/2 bg-blue-500 z-10"></div>
      
      <div className="relative top-12 mb-8 flex flex-col gap-2 bg-gray-100 p-4 rounded-lg shadow-md max-w-sm border-4 border-blue-500">
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-4 w-4 rounded-full bg-blue-500 border-4 border-white"></div> */}
        <h3 className="text-lg font-bold text-blue-600">{name}, {country}</h3>
        <span className="text-sm text-gray-500">{`${startDate} - ${endDate}`}</span>
        <p className="text-gray-700">{description}</p>
      </div>
    </button>
  );
};

// Timeline Component
const MapTimeline = ({ events }) => {
  // Sort events by start date
  const sortedEvents = events.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  return (
    <div className="flex flex-row items-start pl-6 border-t-4 border-blue-500 gap-8">
      {sortedEvents.map((event, index) => (
        <TimelineEvent key={index} {...event}/>
      ))}
    </div>
  );
};

export default MapTimeline;