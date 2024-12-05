import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, useSignIn } from "@clerk/clerk-react";

const CreateAccountPage = ({ setIsAuthenticated, isAuthenticated }) => {
  const { setActive } = useClerk();
  const { signIn } = useSignIn();
  //store the data for username
  const [userName, setUsername] = useState("");
  //store the data of the password
  const [password, setPassword] = useState("");
  //store the data of confirm password
  const [emailAddress, setEmailAddress] = useState("");

  const navigate = useNavigate();

  //when click on the button, the form will be submitted and do the following
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //fetch the createAccount from backend
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/createAccount`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, emailAddress, password }),
        }
      );
      //if the response is ok, then a token will be set up and signed
      if (response.ok) {
        const session = await response.json();
        const { token } = session;
        const signInReponse = await signIn.create({
          identifer: userName,
          emailAddress,
          password,
          token,
        });
        //set the token to be active
        await setActive({ session: signInReponse.createdSessionId });
        // Registration successful, redirect to login
        setIsAuthenticated(!isAuthenticated);
        navigate("/");
      } else {
        //if the response is not ok, then there would be an error
        const data = await response.json();
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };
  return (
    <>
      <div className="log-in-bg">
        <form onSubmit={handleSubmit}>
          {/* Centers the form */}
          <div className="flex flex-col mr-auto ml-auto justify-center w-3/12 min-h-svh gap-5">
            <div className="flex flex-col">
              {/* Input box for username */}
              <label htmlFor="username">Username</label>
              <input
                className="mb-1 border"
                type="text"
                value={userName}
                name="username"
                id="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>

            {/* Input box for email */}
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>{" "}
              <input
                className="mb-1 border"
                type="text"
                value={emailAddress}
                name="email"
                id="email"
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
                required
              />
            </div>

            {/* Input box for password */}
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                className="mb-1 border"
                type="password"
                value={password}
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>

            {/* Create account button to have the data send to the database */}
            <div className="mt-1 flex flex-col gap-10 justify-center">
              <button
                className=" bg-orange-400 hover:bg-orange-700 text-white p-1 rounded-full "
                type="submit"
              >
                Create Account
              </button>

              {/* goes back to the login page from createAccount Page */}
              <Link to="/">
                <div className="text-blue-600">
                  <small>Back to Login</small>
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAccountPage;
