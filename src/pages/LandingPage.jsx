import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
//import of the icons
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPrisma } from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

import {  useClerk, useUser  } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [showNav, setShowNav] = useState(false);
  const { openSignIn } = useClerk(); // Clerk's sign-in modal method
  const { user, isSignedIn } = useUser(); // Check if the user is signed in and get user information
  const navigate = useNavigate(); // Used for navigation

  const generateUniqueUsername = () => {
    return `user_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  };

  // Define a function to sync user information to the backend
  const syncUserToBackend = async () => {
    if (isSignedIn) {
      // Construct user data
      const userData = {
        authId: user.id,
        email: user.primaryEmailAddress?.emailAddress || null,
        username: user.username || generateUniqueUsername(),
      };

      try {
        // Send user data to the backend
        const response = await fetch("http://localhost:3000/save-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          console.log("User data synced successfully to the backend.");
        } else {
          console.error("Failed to sync user data to the backend:", response.status);
        }
      } catch (error) {
        console.error("Error syncing user data:", error);
      }
    }
  };

  const handleSignUp = () => {
    if (isSignedIn) {
      // If the user is already signed in, redirect to the Home Page
      console.log("User is already signed in. Redirecting to /home...");
      navigate("/home");
    } else {
      // If the user is not signed in, open the Clerk sign-in modal
      console.log("User is not signed in. Opening Sign In modal...");
      openSignIn(); // Open the sign-in modal
    }
  };
  
  // Listen for changes in sign-in status and sync data to the backend after the user signs in
  useEffect(() => {
    syncUserToBackend();
  }, [isSignedIn, user]);


  return (
    <>
      <div className="min-h-full">
        {/* The Nav bar at the top of the page */}
        <nav className="landing-bg w-full">
          {/* the hamburger menu button */}
          <button
            type="button"
            className="p-2 w-10 h-10 text-sm rounded-lg md:hidden focus:outline-none "
            onClick={() => setShowNav(!showNav)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="flex justify-center items-center white-space md:h-20 ">
            <div className="hidden md:block">
              {/* The logo only shows when the screen is at md size or larger*/}
              <Logo />
            </div>
            {/* When click on the hamburger menu, it will shows the NavBar or not based on the useState */}
            {/* The noShowNav only activiate when the screen is at md size or smaller*/}
            <div className={showNav ? "showNav" : "noShowNav"}>
              <ul className="flex flex-col justify-center text-2xl items-center gap-5 md:gap-10 md:flex-row">
                {/* able to go to the sections of the page when click on it */}
                <li>
                  <a className="underline-animation block" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="underline-animation block" href="#feature">
                    Features
                  </a>
                </li>
                <li>
                  <a className="underline-animation block z-30" href="#techStack">
                    Tech Stack
                  </a>
                </li>
                <li>
                  <a className="underline-animation block" href="#aboutUs">
                    About Us
                  </a>
                </li>

                {/* SignUp button that can jumps to Clerk */}
                <button className="bg-orange-500 p-1 text-white rounded-md hover:bg-orange-700 block mb-2"
                 onClick={handleSignUp}
                 >
                  Sign In
                </button>
              </ul>
            </div>
          </div>
        </nav>

        <div className="landing-bg-2">
          {/* Hero Sectoin */}
          <div id="about" className="relative mb-20">
            <img
              className="max-h-dvh w-full filter"
              src="/images/LandingHero.jpg"
              alt="a map with pins"
            />
            <div className="absolute left-6 bottom-10 md:bottom-28 text-white p-2 rounded-md w-2/3">
              <h1 className="mb-7 md:text-6xl">
                Hello World Travels with You!
              </h1>
              <p className=" text-3xl shadow-lg">
                Welcome to HelloWorld, the digital travel companion designed to capture and 
                relive your adventures in a user-friendly platform. HelloWorld lets you visualize 
                your travels on an interactive map, whether you're a globetrotter, memory keeper, 
                or world explorer. 
              </p>
              {/* SignUp button that can jumps to Clerk */}
              <button className="bg-orange-500 pl-16 pr-16 p-4 text-2xl text-white rounded-lg hover:bg-orange-700 block ml-60 mt-4"
                onClick={handleSignUp}
                >
                Sign In
              </button>
            </div>
            
            
          </div>

          {/* Feature Section */}
          <div id="feature" className="white-space mb-20">
            <h1 className="text-5xl mb-4">Features</h1>
            <div className="md:grid grid-cols-3 gap-10">
              <div className="text-2xl mb-5">
                <strong>Map your memories</strong> - See the world as you've experienced it. 
                Pin every destination, mark your favorite spots, and watch 
                as your map grows with every adventure.
              </div>
              <div className="text-2xl mb-5">
                <strong>Relive Moments with a Timeline</strong> - Track unforgettable events 
                and relive those moments chronologically. Add notes, whether 
                a quick thought or a detailed story. 
              </div>
              <div className="text-2xl">
                <strong>Share or keep it private</strong> - Share adventures with friends and 
                family or keep them just for yourself. 

              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div id="techStack" className="white-space mb-20">
            <h1 className="text-5xl mb-4">Tech Stack</h1>
            {/* Icons of the platforms we used */}
            <div className="flex gap-10">
              <FaReact className="size-24" />
              <SiExpress className="size-24" />
              <IoLogoJavascript className="size-24" />
              <SiPrisma className="size-24" />
              <RiSupabaseLine className="size-24" />
              <RiTailwindCssFill className="size-24" />
            </div>
          </div>

          {/* About Us Section */}
          <div id="aboutUs" className="white-space mb-10">
            <h1 className="text-5xl mb-4">About Us</h1>
            <div className="flex flex-col">
              <div className="bg-white p-3 rounded-md mb-5">
                <h1 className="text-3xl">Allison Lee</h1>
                <div className="md:grid grid-cols-2 mb-4 text-2xl">
                  <img src="" alt="" />
                  <p>
                    I am a junior studying computer science at Hunter College. My technical 
                    journey has allowed me to explore many different facets of software 
                    development, including Web Development, Artificial Intelligence, and 
                    Robotics. This is my first web development project and I learned a lot 
                    about web development tools and frameworks.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-md mb-5">
                <h1 className="text-3xl">Jing Wang</h1>
                <div className="md:grid grid-cols-2 mb-4 text-2xl">
                  <img src="" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque vitae rem perspiciatis voluptatum fuga! Porro nesciunt
                    eligendi, iste minus aperiam nemo, similique veniam
                    laboriosam, doloremque inventore eaque earum officiis. In.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-md mb-5">
                <h1 className="text-3xl">Shika Lu</h1>
                <div className="md:grid grid-cols-2 text-2xl">
                  <img src="" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque vitae rem perspiciatis voluptatum fuga! Porro nesciunt
                    eligendi, iste minus aperiam nemo, similique veniam
                    laboriosam, doloremque inventore eaque earum officiis. In.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center p-2 bg-orange-100">
            Hello World &copy; 2024
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
