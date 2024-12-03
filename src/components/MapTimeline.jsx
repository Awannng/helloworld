import React from "react";

const events = [
  {
    title: "Project Start",
    description: "Kick-off meeting and planning.",
    startDate: "2024-01-01",
    endDate: "2024-01-10",
  },
  {
    title: "Development Phase",
    description: "Implementation of core features.",
    startDate: "2024-02-01",
    endDate: "2024-04-15",
  },
  {
    title: "Testing",
    description: "Quality assurance and bug fixing.",
    startDate: "2024-04-20",
    endDate: "2024-05-15",
  },
];

// Timeline Event Component
const TimelineEvent = ({ title, description, startDate, endDate }) => {
  return (
    <div className="relative mb-8 flex flex-col gap-2 bg-gray-100 p-4 rounded-lg shadow-md max-w-sm">
      <div className="absolute left-[-8px] top-4 h-4 w-4 rounded-full bg-blue-500 border-4 border-white"></div>
      <h3 className="text-lg font-bold text-blue-600">{title}</h3>
      <span className="text-sm text-gray-500">{`${startDate} - ${endDate}`}</span>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

// Timeline Component
const MapTimeline = ({ events }) => {
  // Sort events by start date
  const sortedEvents = events.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  return (
    <div className="flex flex-col items-start pl-6 border-l-4 border-blue-500">
      {sortedEvents.map((event, index) => (
        <TimelineEvent key={index} {...event} />
      ))}
    </div>
  );
};

export default MapTimeline;