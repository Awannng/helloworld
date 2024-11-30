import React from "react"
import { useNavigate, Link } from "react-router-dom";
import Logo from "../components/Logo";

const ProfilePage = ({clickProfile, setProfile}) => {
  const navigate = useNavigate();

  // Navigate back to home page
  const goToHomePage = () => {
    setProfile((e) => !clickProfile);
    navigate("/");
  };

  // simulating user object
  const user = {
    username: "user",
    homeCountry: "United States",
    homeCity: "New York",
    profileImage: "/images/profilePicture.png",
  };

  return (
    <div className="min-w-[400px] min-h-[600px] bg-gray-100 flex items-center justify-center">
      {/* Logo button - Navigate back to Home Page */}
      <div className="absolute top-0 left-0">
        <button onClick={goToHomePage}>
          <Logo/>
        </button>
      </div>

      {/* Profile Page Container */}
      <div className="flex flex-col items-center bg-purple-100 rounded-lg w-[90vw] h-[88vh] mt-24 overflow-hidden">
        
        {/* Profile Banner*/}
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
          <p className="text-xl text-gray-600 mb-4">Home City: {user.homeCity}</p>
        </div>
        
      </div>
    </div>
  );
};

export default ProfilePage;