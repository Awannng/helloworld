import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

// Timeline Event Component
const TimelineEvent = ({ city, country, notes, startDate, endDate }) => {
  const dateStart = new Date(startDate).toISOString().slice(2, 10); // Get YYYY-MM-DD
  const dateEnd = new Date(endDate).toISOString().slice(2, 10); // Get YYYY-MM-DD

  return (
    <button className="relative flex flex-col items-center">
      {/* vertical line */}
      <div className="absolute transform -translate-x-1/2 h-12 w-1 left-1/2 bg-blue-500 z-10"></div>

      <div className="relative top-12 mb-8 flex flex-col gap-2 bg-gray-100 p-4 rounded-lg shadow-md max-w-sm border-4 border-blue-500">
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-4 w-4 rounded-full bg-blue-500 border-4 border-white"></div> */}
        <h3 className="text-lg font-bold text-blue-600">
          {city}, {country}
        </h3>
        <span className="text-sm text-gray-500">
          {dateStart} to {dateEnd}
        </span>
        <p className="text-gray-700">{notes}</p>
      </div>
    </button>
  );
};

// Timeline Component
const MapTimeline = () => {
  // storing events
  const [events, setEvents] = useState([]);

  const { user } = useUser(); // get the user's username from clerk
  const [user1, setUser1] = useState([]); //to get userId for fetchPin and POST pins (in URL)
  //fetch the user's data based on the username, pass user as param
  useEffect(() => {
    const fetchUser = async (user) => {
      try {
        const response = await fetch(`http://localhost:3000/user/${user.id}`);
        const data = await response.json();
        setUser1(data);
      } catch (error) {
        console.error("Error fetching users's info:", error);
      }
    };
    fetchUser(user);
  }, []);
  const userId = user1.userId;

  // Fetch the pins(events)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`http://localhost:3000/pins/${userId}`);
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching pins:", error);
      }
    };
    fetchEvents();
  }, [events]);

  // Sort events by start date
  const sortedEvents = events.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  return (
    <div className="flex flex-row items-start pl-6 border-t-4 border-blue-500 gap-8">
      {sortedEvents.map((event, index) => (
        <TimelineEvent key={index} {...event} />
      ))}
    </div>
  );
};

export default MapTimeline;
