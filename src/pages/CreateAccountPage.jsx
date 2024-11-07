import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegQuestionCircle } from "react-icons/fa";

const CreateAccountPage = ({}) => {
  //store the data for username
  const [username, setUsername] = useState("");
  //store the data of the password
  const [password, setPassword] = useState("");
  //store the data of confirm password
  const [confirm, setConfirm] = useState("");
  //useState for the password hint
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <form>
        {/* Centers the form */}
        <div className="flex flex-col mr-auto ml-auto justify-center w-1/2 min-h-svh gap-5">
          <div className="flex flex-col">
            {/* Input box for username */}
            <label htmlFor="username">Username</label>
            <input
              className="mb-1 border w-3/4"
              type="text"
              value={username}
              name="username"
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          {/* Input box for password */}
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <div className="inline-block space-x-2">
              <input
                className="mb-1 border w-3/4"
                type="text"
                value={password}
                name="password"
                id="password"
                pattern="/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* A dropdown shows the hint of the password */}
              <FaRegQuestionCircle
                className="inline-block"
                // changes bool when clicking
                onClick={() => {
                  setShowPass(!showPass);
                }}
              />
            </div>

            {/* if showPass is true, then it will show the hint, otherwise it will dispear */}
            {showPass ? (
              <p className="text-sm">
                Contains digits from 1 to 9 <br />
                one lowercase letter <br />
                one uppercase letter <br />
                one special character <br />
                no space, 8-16 characters long
              </p>
            ) : null}
          </div>

          {/* Input box for comfirming password */}
          <div className="flex flex-col">
            <label htmlFor="confirm">Confirm Password</label>{" "}
            <input
              className="mb-1 border w-3/4"
              type="text"
              value={confirm}
              name="confirm"
              id="confirm"
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
            />
          </div>

          {/* Create account button to have the data send to the database */}
          <div className="mt-1 flex justify-center">
            <Link>
              <button
                className=" bg-lime-700 text-white p-1 rounded-full"
                type="button"
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateAccountPage;
