import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiPrisma, SiClerk } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiSupabaseLine, RiTailwindCssFill } from "react-icons/ri";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [showNav, setShowNav] = useState(false);
  const [loading, setLoading] = useState(false);
  const { openSignIn, client, setActive } = useClerk();
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();

  const generateUniqueUsername = () => {
    return `user_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  };

  const syncUserToBackend = async () => {
    if (!isSignedIn) return;

    setLoading(true);
    const userData = {
      authId: user.id,
      email: user.primaryEmailAddress?.emailAddress || null,
      username: user.username || generateUniqueUsername(),
    };

    try {
      const response = await fetch("http://localhost:3000/save-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("User data synced successfully to the backend.");
      } else {
        console.error("Failed to sync user data to the backend:", response.status);
      }
    } catch (error) {
      console.error("Error syncing user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    if (isSignedIn) {
      console.log("User is already signed in. Redirecting to /home...");
      navigate("/home");
    } else {
      console.log("User is not signed in. Opening Sign In modal...");
      openSignIn();
    }
  };

  const switchToActiveSession = async () => {
    if (client?.sessions?.length) {
      const activeSession = client.sessions[0];
      await setActive({ session: activeSession.id });
      console.log(`Switched to active session: ${activeSession.id}`);
    }
  };

  useEffect(() => {
    const syncData = async () => {
      await syncUserToBackend();
    };
    syncData();
  }, [isSignedIn, user]);

  useEffect(() => {
    if (client?.sessions?.length) {
      switchToActiveSession();
    }
  }, [client?.sessions]);


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
              <ul className="flex flex-col justify-center text-1xl items-center gap-5 md:gap-10 md:flex-row">
                {/* able to go to the sections of the page when click on it */}
                <li>
                  <a className="underline-animation block" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="underline-animation block" href="#demo">
                    Demo
                  </a>
                </li>
                <li>
                  <a className="underline-animation block" href="#feature">
                    Features
                  </a>
                </li>
                <li>
                  <a className="underline-animation block" href="#techStack">
                    Tech Stack
                  </a>
                </li>
                <li>
                  <a className="underline-animation block" href="#aboutUs">
                    About Us
                  </a>
                </li>

                {/* SignUp button that can jumps to Clerk */}
                <button
                  className="bg-orange-500 p-1 text-white rounded-md hover:bg-orange-700 block mb-2"
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

            <div className="absolute left-6 bottom-3 md:bottom-28 p-2 w-10/12">
              <div>
                <h1 className="text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">

                  Hello World Travels with You!
                </h1>
                <div className="flex justify-between">
                  <p className="text-sm md:text-2xl w-9/12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
                    Welcome to HelloWorld, the digital travel companion designed
                    to capture and relive your adventures in a user-friendly
                    platform. HelloWorld lets you visualize your travels on an
                    interactive map, whether you're a globetrotter, memory
                    keeper, or world explorer.
                  </p>

                  <div className="place-content-end">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Demo */}
          <div id="demo" className="white-space mb-20">
            <h1 className="text-4xl mb-4">Demo</h1>
            <video
              src="/video/demo .mp4"
              width="100%"
              height="100%"
              controls
              onError={(e) => console.error("Error loading video:", e)}
            ></video>
          </div>

          {/* Feature Section */}
          <div id="feature" className="white-space mb-20">
            <h1 className="text-4xl mb-4">Features</h1>
            <div className="md:grid grid-cols-3 gap-10">
              <div className="text-xl md:text-2xl mb-5">
                <h1>
                  <strong>Map your memories</strong>
                </h1>
                <p className="text-lg">
                  See the world as you've experienced it. Pin every destination,
                  mark your favorite spots, and watch as your map grows with
                  every adventure.
                </p>
              </div>
              <div className="text-xl md:text-2xl mb-5">
                <h1>
                  <strong>Relive Moments with a Timeline</strong>
                </h1>
                <p className="text-lg">
                  Track unforgettable events and relive those moments
                  chronologically. Add notes, whether a quick thought or a
                  detailed story.
                </p>
              </div>
              <div className="text-xl md:text-2xl">
                <h1>
                  <strong>Share or keep it private</strong>
                </h1>
                <p className="text-lg">
                  Share adventures with friends and family or keep them just for
                  yourself.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div id="techStack" className="white-space mb-20">
            <h1 className="text-4xl mb-4">Tech Stack</h1>
            {/* Icons of the platforms we used */}
            <div className="grid grid-cols-3 gap-10 md:flex">
              <FaReact className="size-24" />
              <SiExpress className="size-24" />
              <IoLogoJavascript className="size-24" />
              <SiPrisma className="size-24" />
              <RiSupabaseLine className="size-24" />
              <RiTailwindCssFill className="size-24" />
              <SiClerk className="size-24" />
            </div>
          </div>

          {/* About Us Section */}
          <div id="aboutUs" className="white-space mb-10">
            <h1 className="text-4xl mb-4">About Us</h1>
            <div className="flex flex-col">
              <div className="bg-white p-3 rounded-md mb-5">
                <h1 className="text-3xl mb-2">Allison Lee</h1>
                <div className="md:grid grid-cols-2 mb-4 text-1xl place-items-center">
                  <img
                    src="../images/alee.jpg"
                    alt="Allison Lee"
                    className=" h-60 w-60 rounded-full mb-3"
                  />
                  <p>
                    I am a junior studying computer science at Hunter College.
                    My technical journey has allowed me to explore many
                    different facets of software development, including Web
                    Development, Artificial Intelligence, and Robotics. This is
                    my first web development project and I learned a lot about
                    web development tools and frameworks.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-md mb-5">
                <h1 className="text-3xl mb-2">Jing Wang</h1>
                <div className="md:grid grid-cols-2 mb-4 text-1xl place-items-center">
                  <img
                    src="../images/jw.jpg"
                    alt="Jing Wang"
                    className=" h-60 w-60 rounded-full mb-3"
                  />

                  <p>
                    I’m currently a junior majoring in Computer Science at
                    Baruch College. Throughout this project, I’ve had the
                    opportunity to gain valuable hands-on experience working on
                    a full-stack application. This experience has allowed me to
                    deepen my understanding of both front-end and back-end
                    development, as well as how to integrate different
                    technologies to build a complete web application.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-md mb-5">
                <h1 className="text-3xl mb-2">Shika Lu</h1>
                <div className="md:grid grid-cols-2 text-1xl place-items-center">
                  <img
                    src="../images/SL.jpg"
                    alt="Shika Lu"
                    className=" h-60 w-60 rounded-full mb-3"
                  />
                  <p>
                    I am a senior majoring in Computer Science at Queens
                    College. I have a strong interest in software development
                    and have explored areas such as web development, machine
                    learning, and cloud computing. Through my academic projects,
                    I have built scalable applications using modern technologies
                    like React, Node.js, and PostgreSQL. One of my recent
                    projects involved creating a housing management system that
                    taught me the importance of clean code and effective
                    collaboration. I am eager to continue growing as a
                    developer, learning new tools, and working with talented
                    teams to solve real-world challenges.
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