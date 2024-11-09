import React, { useState } from "react";
import { Link } from "react-router-dom";
//import of the icons
import { FaRegUser } from "react-icons/fa";

import { RiLockPasswordLine } from "react-icons/ri";
import GoogleLoginComponent from "../components/GoogleLogin"

const LoginPage = ({ setIsAuthenticated }) => {
  //useState for the username
  const [username, setUsername] = useState("");
  //useState for the password
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    // Simulate login, set authentication status to true
    console.log("Login button clicked"); // Debugging.I'm getting an error reporting that the page can't be displayed so I'm printing out the output to check for problems

    //Monitor user click event and update boolean values
    setIsAuthenticated(true);
  };

  return (
    <>
      <div
        className="place-content-center"
        style={{
          padding: "20px",
          backgroundColor: "#f0f0f0",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <h1 className="text-lg">Welcome to Hello World</h1>

        {/* Adds a border and darker shade of color around the input boxes fotr login */}
        <div className="border rounded-lg p-2 mr-auto ml-auto w-1/3 bg-gray-200">
          {/* Inputbox for username and password */}
          <div className="flex flex-col justify-center items-center gap-3 m-5">
            <div className="flex gap-2 items-center justify-center">
              {/* Icon for the username */}
              <FaRegUser />
              <input
                className="p-1 rounded"
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            {/* Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long. */}
            <div className="flex gap-2 items-center justify-center">
              {/* Icon for the password */}
              <RiLockPasswordLine />
              <input
                className="p-1 rounded"
                type="password"
                placeholder="password"
                value={password}
                pattern="/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          {/* Login Button that checks if is authenticated, if is then it will jump to the Homepage*/}
          <button
            className="bg-green-600 rounded-full p-2 text-white hover:bg-lime-800 text-sm"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        {/* This is for creating an account */}
        <div className="mt-6 flex justify-center items-center gap-2">
          <p className="text-sm">If you don't have an account: </p>
          {/* When clicked, jumps to a create account page which is a form */}
          <Link
            to="/createAccount"
            className="bg-green-600 rounded-full p-1 text-white hover:bg-lime-800 text-sm"
          >
            Create Account
          </Link>
        </div>

        {/* Third Party Login */}
        <div className="mt-6 flex justify-center items-center gap-2">
        <p className="text-sm">Other Methods:</p>
        {/*pass setIsAuthenticated as parameter to GoogleLoginComponent */}
        <GoogleLoginComponent setIsAuthenticated={setIsAuthenticated}/> 
      </div>
      </div>
    </>
  );
};

export default LoginPage;
