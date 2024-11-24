import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../components/Logo";

const ProfilePage = ({ menu, setMenu, signOut }) => {
  // simulating user object
  const user = {
    username: "user",
    homeCountry: "United States",
    homeCity: "New York",
    profileImage: "/images/profilePicture.png",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 z-0">
      {/* Navigate back to Home Page and have setting button*/}
      <div className="absolute top-0 left-0 z-20">
        <button onClick={() => setMenu(!menu)}>
          <Logo />
        </button>

        {/* When click the on the logo, it shows a dropdown menu */}
        {menu && (
          <div className="absolute top-5 left-5 translate-y-1/2">
            <div className="bg-white h-auto shadow-md rounded-md text-sm flex flex-col p-1 ">
              <button
                // When click on the button, it goes to the home page
                className="hover:bg-slate-100 rounded-md p-2"
              >
                <Link to="/home">Home</Link>
              </button>

              <button
                //When click, it will open up a form for user to enter their info
                className="hover:bg-slate-100 rounded-md p-2"
                type="button"
              >
                Setting
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

      {/* Profile Page Container */}
      <div className="flex flex-col items-center justify-start bg-purple-100 rounded-lg shadow-xl w-[90vw] h-[88vh] mt-20 overflow-hidden">
        {/* Profile Banner (under construction) */}
        <div className="relative h-[40vh] w-full border-b-8 border-white">
          <img
            src="/images/banner.jpg"
            alt="Banner"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Display Profile Image */}
        <div className="absolute top-[40vh] z-10 bg-white w-48 h-48 rounded-full border-4 border-white flex items-center justify-center">
          <img
            src={user.profileImage}
            alt="Profile Picture"
            className="w-44 h-44 object-cover rounded-full"
          />
        </div>

        {/* Display User Details */}
        <div className="relative top-[120px]">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            {user.username}
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Home Country: {user.homeCountry}
          </p>
          <p className="text-xl text-gray-600 mb-4">
            Home City: {user.homeCity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
