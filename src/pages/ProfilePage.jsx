import React from "react"
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();

    // Navigate back to home page
    const goToHomePage = () => {
        navigate('/')
    }

    // simulating user object
    const user = {
        username: "user",
        homeCountry: "United States",
        homeCity: "New York",
        profileImage: "/images/profilePicture.png"
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 z-0">
            {/* Navigate back to Home Page */}
            <div className="absolute top-4 left-4 z-30">
                <button onClick={goToHomePage} className="bg-yellow-400 left-4 z-30">
                    Back to Home Page
                </button>
            </div>

            {/* Profile Page Container */}
            <div className="flex flex-col items-center justify-center p-10 bg-purple-100 rounded-lg shadow-xl max-w-4xl w-full h-[1200px]">
                {/* Profile Banner (under construction) */}
                {/* <div className="relative w-full h-96">
                    <img 
                        src="/images/banner.jpg"
                        alt="Banner"
                        className="w-full h-full object-cover"
                    />
                </div> */}

                {/* Horizontal Line behind Profile Picture (under construction)*/}
                <div className="relative mb-4 max-w-full w-full flex justify-center">
                    {/* The horizontal line behind the profile image */}
                    {/* <div className="absolute inset-x-0 top-1/2 border-t-8 border-white w-full"></div> */}

                    {/* Display Profile Image */}
                    <div className="z-10 bg-white w-48 h-48 rounded-full border-4 border-white flex items-center justify-center">
                        <img
                            src={user.profileImage}
                            alt="Profile Picture"
                            className="w-44 h-44 object-cover rounded-full"
                        />
                    </div>
                </div>
                    

                {/* Display User Details */}
                <h1 className="text-3xl font-semibold text-gray-800 mb-2">{user.username}</h1>
                <p className="text-xl text-gray-600 mb-2">Home Country: {user.homeCountry}</p>
                <p className="text-xl text-gray-600 mb-4">Home City: {user.homeCity}</p>
            </div>
        </div>
    );
};

export default ProfilePage;