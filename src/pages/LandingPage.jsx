import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
//import of the icons
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPrisma } from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

const LandingPage = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="min-w-[1000px] h-full">
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
              <ul className="flex flex-col justify-center text-lg items-center gap-5 md:gap-10 md:flex-row">
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
                <button className="bg-orange-500 p-1 text-white rounded-md hover:bg-orange-700 block mb-2">
                  Sign Up
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
            <div className="absolute left-6 bottom-10 md:bottom-28 text-white p-2 rounded-md min-w-[190px] w-2/3">
              <h1 className="mb-7 text-2xl md:text-5xl">
                Hello World Travels with You!
              </h1>
              <p className="w-2/3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                numquam doloremque suscipit, animi voluptatum nemo sapiente illo
                laboriosam natus id sit saepe consectetur vitae quo obcaecati
                aliquid earum qui commodi?
              </p>
            </div>
          </div>

          {/* Feature Section */}
          <div id="feature" className="white-space mb-20">
            <h1 className="text-4xl mb-4">Features</h1>
            <div className="md:grid grid-cols-3 gap-10">
              <div className="mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                tempora totam dolorem molestias ratione veniam temporibus hic
                blanditiis voluptatem obcaecati cum libero, debitis neque?
                Quaerat fuga delectus magni blanditiis! Accusamus!
              </div>
              <div className="mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                tempora totam dolorem molestias ratione veniam temporibus hic
                blanditiis voluptatem obcaecati cum libero, debitis neque?
                Quaerat fuga delectus magni blanditiis! Accusamus!
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                tempora totam dolorem molestias ratione veniam temporibus hic
                blanditiis voluptatem obcaecati cum libero, debitis neque?
                Quaerat fuga delectus magni blanditiis! Accusamus!
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div id="techStack" className="white-space mb-20">
            <h1 className="text-4xl mb-4">Tech Stack</h1>
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
            <h1 className="text-4xl mb-4">About Us</h1>
            <div className="flex flex-col">
              <div className="bg-white p-3 rounded-md mb-5">
                <h1 className="text-2xl">Allison Lee</h1>
                <div className="md:grid grid-cols-2 mb-4">
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
                <h1 className="text-2xl">Jing Wang</h1>
                <div className="md:grid grid-cols-2 mb-4">
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
                <h1 className="text-2xl">Shika Lu</h1>
                <div className="md:grid grid-cols-2">
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
