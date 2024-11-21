import React, { useState } from "react";
import { Link } from "react-router-dom";
//import of the icons
import { FaRegUser } from "react-icons/fa";
import { loginUser } from "../api/userService";

import { RiLockPasswordLine } from "react-icons/ri";
import GoogleLoginComponent from "../components/GoogleLogin";

const LoginPage = ({ setIsAuthenticated }) => {
  //useState for the username
  const [username, setUsername] = useState("");
  //useState for the password
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Log a message when the login button is clicked
    console.log("Login button clicked");

    // Check if username or password fields are empty
    if (!username || !password) {
      alert("Please enter both username and password."); // Alert the user if input fields are empty
      return; // Exit the function early if input validation fails
    }

    try {
      // Call the backend API to perform the login action
      const response = await loginUser({ username, password }); // Replace with your `loginUser` function
      console.log("Login successful:", response); // Log the successful response from the backend

      // If login is successful, update the authentication status and notify the user
      setIsAuthenticated(true); // Update the state to indicate the user is authenticated
      alert("Login successful!"); // Display a success message to the user
    } catch (error) {
      // Log the error message if the login fails
      console.error("Login failed:", error.message);

      // Display an error message to the user with details of the failure
      alert("Login failed: " + error.message);
    }
  };

  return (
    <>
      <div
        className="place-content-center log-in-bg"
        style={{
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <div className="text-center mb-5">
          <h1 className="text-5xl text-sky-800">
            Hello World travels with you
          </h1>
        </div>

        {/* Adds a border and darker shade of color around the input boxes fotr login */}
        <div className=" rounded-lg p-2 mr-auto ml-auto w-1/3 log-in-contrast">
          {/* Inputbox for username and password */}
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="-mb-10">
              <div className="w-40 h-40 rounded-full">
                <img src="/images/logo.png" alt="Logo of the Web" />
              </div>
            </div>

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
            className="bg-orange-400 rounded-full p-2 text-white hover:bg-orange-700 text-sm mt-4"
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
            className="bg-orange-400 rounded-full p-1 text-white hover:bg-orange-700 text-sm"
          >
            Create Account
          </Link>
        </div>

        {/* Third Party Login */}
        <div className="mt-6 flex justify-center items-center gap-2">
          <p className="text-sm">Other Method:</p>
          {/*pass setIsAuthenticated as parameter to GoogleLoginComponent */}
          <GoogleLoginComponent setIsAuthenticated={setIsAuthenticated} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
