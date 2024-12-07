import React, { useState, useEffect } from "react";
import MapTimeline from "../components/MapTimeline";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const TimeLinePage = ({ menu, setMenu, signOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTimeline = () => {
    setIsOpen((prevState) => !prevState);
  };

  // const [events, setEvents] = useState([]);

  // const { user } = useUser(); // get the user's username from clerk
  // const [user1, setUser1] = useState([]); //to get userId for fetchPin and POST pins (in URL)
  // //fetch the user's data based on the username, pass user as param
  // useEffect(() => {
  //   const fetchUser = async (user) => {
  //     try {
  //       const response = await fetch(`http://localhost:3000/user/${user.id}`);
  //       const data = await response.json();
  //       setUser1(data);
  //     } catch (error) {
  //       console.error("Error fetching users's info:", error);
  //     }
  //   };
  //   fetchUser(user);
  // }, []);
  // const userId = user1.userId;

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:3000/pins/${userId}`);
  //       const data = await response.json();
  //       setEvents(data);
  //       console.log(data)
  //     } catch (error) {
  //       console.error("Error fetching pins:", error);
  //     }
  //   };
  //   fetchEvents();
  // }, []);

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
        {menu && (
          <div className="absolute top-5 left-5 translate-y-1/2">
            <div className="bg-white h-auto shadow-md rounded-md text-sm flex flex-col p-1 ">
              <button
                // When click on the button, it goes to the profile page
                className="hover:bg-slate-100 rounded-md p-2"
              >
                <Link to="/home">Home</Link>
              </button>

              <button
                //When click, it will goes back to the timeline page
                className="hover:bg-slate-100 rounded-md p-2"
                type="button"
              >
                <Link to="/profile">Profile</Link>
              </button>

              <button
                //When click, it will goes back to the landing page
                onClick={signOut}
                className="hover:bg-slate-100 rounded-md p-2"
                type="button"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Timeline component */}
      <div className="mt-56">
        <MapTimeline />
      </div>

      {/* <button 
          onClick={toggleTimeline}
          className="absolute px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 z-50"
        >
          {isOpen ? "Hide Timeline" : "Show Timeline"}
        </button> */}

      {/* {isOpen && (
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
        )} */}
    </div>
  );
};

export default TimeLinePage;
