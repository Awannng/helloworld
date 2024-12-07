import React, { useState, useEffect, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

// Timeline Event Component
const TimelineEvent = ({ city, country, notes, startDate, endDate }) => {
  const dateStart = new Date(startDate).toISOString().slice(2, 10); // Get YYYY-MM-DD
  const dateEnd = new Date(endDate).toISOString().slice(2, 10); // Get YYYY-MM-DD

  return (
    <button className="relative flex flex-col items-center h-auto">
      {/* vertical line */}
      <div className="absolute transform -translate-x-1/2 h-12 w-1 left-1/2 bg-blue-500 z-10"></div>

      <div className="relative top-12 mb-8 flex flex-col gap-2 bg-gray-100 p-4 rounded-lg shadow-md w-52 h-full border-4 border-blue-500">
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-4 w-4 rounded-full bg-blue-500 border-4 border-white"></div> */}
        <h3 className="text-lg font-bold text-blue-600">
          {city}, {country}
        </h3>
        <span className="text-sm text-gray-500">
          {dateStart} to {dateEnd}
        </span>
        <div className="text-wrap">
          <p className="text-gray-700 text-wrap">{notes}</p>
        </div>
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

  const timelineRef = useRef(null);
  //move timeline to left by clicking
  const handleScrollLeft = () => {
    timelineRef.current.scrollLeft -= 100; // Adjust scroll amount as needed
  };
  //move timeline to right by clicking
  const handleScrollRight = () => {
    timelineRef.current.scrollLeft += 100; // Adjust scroll amount as needed
  };

  return (
    <>
      <div className="flex justify-between ml-5 mr-5 mb-5">
        <button onClick={handleScrollLeft}>
          <MdKeyboardArrowLeft className="w-10 h-10 " />
        </button>
        <button onClick={handleScrollRight}>
          <MdKeyboardArrowRight className="w-10 h-10" />
        </button>
      </div>
      <div
        className="flex items-start pl-6 border-t-4 border-blue-500 gap-8 overflow-x-hidden overflow-y-hidden w-full h-96"
        ref={timelineRef}
      >
        {sortedEvents.map((event, index) => (
          <TimelineEvent key={index} {...event} />
        ))}
      </div>
    </>
  );
};

export default MapTimeline;
