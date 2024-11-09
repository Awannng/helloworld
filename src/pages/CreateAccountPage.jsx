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
        <div className="flex flex-col mr-auto ml-auto justify-center w-3/12 min-h-svh gap-5">
          <div className="flex flex-col">
            {/* Input box for username */}
            <label htmlFor="username">Username</label>
            <input
              className="mb-1 border"
              type="text"
              value={username}
              name="username"
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>

          {/* Input box for password */}
          <div className="flex flex-col">
            {/* Show the requirment of the password in gray */}
            <p className="text-sm text-slate-500">
              Contains digits from 1 to 9 <br />
              One lowercase letter <br />
              One uppercase letter <br />
              One special character <br />
              No space, 8-16 characters long
            </p>
            <label htmlFor="password">Password</label>
            <input
              className="mb-1 border"
              type="text"
              value={password}
              name="password"
              id="password"
              pattern="/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />

            {/* A dropdown shows the hint of the password */}
            {/* <FaRegQuestionCircle
              className=""
              // changes bool when clicking
              onClick={() => {
                setShowPass(!showPass);
              }}
            /> */}
            {/* if showPass is true, then it will show the hint, otherwise it will dispear */}
            {/* {showPass ? (
              <p className="text-sm text-slate-500">
                Contains digits from 1 to 9 <br />
                one lowercase letter <br />
                one uppercase letter <br />
                one special character <br />
                no space, 8-16 characters long
              </p>
            ) : null} */}
          </div>

          {/* Input box for comfirming password */}
          <div className="flex flex-col">
            <label htmlFor="confirm">Confirm Password</label>{" "}
            <input
              className="mb-1 border"
              type="text"
              value={confirm}
              name="confirm"
              id="confirm"
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
              required
            />
          </div>

          {/* Create account button to have the data send to the database */}
          <div className="mt-1 flex flex-col gap-10 justify-center">
            <Link>
              <button
                className=" bg-lime-700 text-white p-1 rounded-full "
                type="button"
              >
                Create Account
              </button>
            </Link>

            <Link to='/login'>
              <div className="text-blue-600">
                Back to Login
              </div>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateAccountPage;
