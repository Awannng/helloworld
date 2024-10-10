import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import ProfilePic from "./ProfilePic";

function NavBar() {
  // I install react-icons already, but need to import the specific icons that you need. 

  //Three useStates to show the hidden list of friends or communities when clicking on the drop-down-icon. 
  const [showFriends, setShowFriends] = useState(false);
  const [showComms, setShowComms] = useState(false);
  const [showIndividualComms, setShowIndividualComms] = useState(false);

  return (
    <>
      <div className="bg-orange-400 h-full relative text-white">
        {/* When clicking the logo, it should go back to the HomePage. */}
        <div className="p-3">
          <Link to="/">
            <div className="w-12 h-12 bg-gray-400 rounded-full hover:cursor-pointer">
              {/* logo */}
            </div>
          </Link>
        </div>

        {/* The Link 'to' attribute for the last three are empty. Need to match with the router in the App.jsx*/}
        <nav>
          <ul>
            <Link to="/">
              <li className="navbar--list">Home</li>
            </Link>
            <Link to="trending">
              <li className="navbar--list">Trending</li>
            </Link>
            <Link to="">
              <li className="navbar--list">
                Friends
                <div className="self-center">
                  <IoIosArrowDropdown
                    className="hover:text-lg"
                    onClick={() => {
                      setShowFriends(!showFriends);
                    }}
                  />
                </div>
              </li>
            </Link>
            {showFriends && (
              <div className="bg-white text-black">
                <ul className="text-center max-h-48 overflow-y-auto">
                  <li>Jane</li>
                  <li>Joe</li>
                  <li>Hana</li>
                  <li>Flowra</li>
                  <li>Jane</li>
                  <li>Joe</li>
                  <li>Hana</li>
                  <li>Flowra</li>
                  <li>Jane</li>
                  <li>Joe</li>
                  <li>Hana</li>
                  <li>Flowra</li>
                  <li>Jane</li>
                  <li>Joe</li>
                </ul>
              </div>
            )}

            <Link to="">
              <li className="navbar--list">
                Communities
                <div className="self-center">
                  <IoIosArrowDropdown
                    className="hover:text-lg"
                    onClick={() => {
                      setShowComms(!showComms);
                    }}
                  />
                </div>
              </li>
            </Link>
            <Link to="">
              <li className="navbar--list">
                Individual Communities
                <div className="self-center">
                  <IoIosArrowDropdown
                    className="hover:text-lg"
                    onClick={() => {
                      setShowIndividualComms(!showIndividualComms);
                    }}
                  />
                </div>
              </li>
            </Link>
          </ul>
        </nav>

        {/* The profile pic would stay at the bottom of the page even when scrolling, relative to the navbar section */}
        <div className="p-3 fixed bottom-8">
          <ProfilePic />
        </div>
      </div>
    </>
  );
}

export default NavBar;
