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

// const LoginPage = ({ setIsAuthenticated }) => {
//   //useState for the username
//   const [username, setUsername] = useState("");
//   //useState for the password
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     // Log a message when the login button is clicked
//     console.log("Login button clicked");

//     // Check if username or password fields are empty
//     if (!username || !password) {
//       alert("Please enter both username and password."); // Alert the user if input fields are empty
//       return; // Exit the function early if input validation fails
//     }

//     try {
//       // Call the backend API to perform the login action
//       const response = await loginUser({ username, password }); // Replace with your `loginUser` function
//       console.log("Login successful:", response); // Log the successful response from the backend

//       // If login is successful, update the authentication status and notify the user
//       setIsAuthenticated(true); // Update the state to indicate the user is authenticated
//       alert("Login successful!"); // Display a success message to the user
//     } catch (error) {
//       // Log the error message if the login fails
//       console.error("Login failed:", error.message);

//       // Display an error message to the user with details of the failure
//       alert("Login failed: " + error.message);
//     }
//   };

//   return (
//     <>
//       <div
//         className="place-content-center log-in-bg min-w-[400px]"
//         style={{
//           minHeight: "100vh",
//           textAlign: "center",
//         }}
//       >
//         <div className="text-center mb-5 min-w-[400px]">
//           <h1 className="text-5xl text-sky-800">
//             Hello World travels with you!
//           </h1>
//         </div>

//         {/* Adds a border and darker shade of color around the input boxes fotr login */}
//         <div className="rounded-lg p-2 mr-auto ml-auto w-1/3 min-w-[300px] log-in-contrast">
//           {/* Inputbox for username and password */}
//           <div className="flex flex-col justify-center items-center gap-3">
//             <div className="-mb-10">
//               <div className="w-40 h-40 rounded-full">
//                 <img src="/images/logo.png" alt="Logo of the Web" />
//               </div>
//             </div>

//             <div className="flex gap-2 items-center justify-center ">
//               {/* Icon for the username */}
//               <FaRegUser />
//               <input
//                 className="p-1 rounded w-[20vw]"
//                 type="text"
//                 placeholder="username"
//                 value={username}
//                 onChange={(e) => {
//                   setUsername(e.target.value);
//                 }}
//               />
//             </div>

//             {/* Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long. */}
//             <div className="flex gap-2 items-center justify-center">
//               {/* Icon for the password */}
//               <RiLockPasswordLine />
//               <input
//                 className="p-1 rounded w-[20vw]"
//                 type="password"
//                 placeholder="password"
//                 value={password}
//                 pattern="/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/"
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//               />
//             </div>
//           </div>

//           {/* Login Button that checks if is authenticated, if is then it will jump to the Homepage*/}
//           <button
//             className="bg-orange-400 rounded-full p-2 text-white hover:bg-orange-700 text-sm mt-5 mb-4 w-[100px]"
//             onClick={handleLogin}
//           >
//             Login
//           </button>
//         </div>

//         {/* This is for creating an account */}
//         <div className="mt-6 flex justify-center items-center gap-2">
//           <p className="text-sm">If you don't have an account: </p>
//           {/* When clicked, jumps to a create account page which is a form */}
//           <Link
//             to="/createAccount"
//             className="bg-orange-400 rounded-full p-2 text-white hover:bg-orange-700 text-sm w-[150px]"
//           >
//             Create Account
//           </Link>
//         </div>

//         {/* Third Party Login */}
//         <div className="mt-6 flex justify-center items-center gap-2">
//           <p className="text-sm">Use Google to Sign In:</p>
//           {/*pass setIsAuthenticated as parameter to GoogleLoginComponent */}
//           <GoogleLoginComponent setIsAuthenticated={setIsAuthenticated} />
//         </div>
//       </div>
//     </>
//   );
// };

const LandingPage = () => {
  return (
    <>
      {/* The Nav bar at the top of the page */}
      <div className="min-h-full">
        <div className="h-20 landing-bg w-full">
          <nav className="flex justify-center items-center white-space">
            <ul className="flex justify-center items-center gap-10 ">
              <Logo />
              {/* able to go to the sections of the page when click on it */}
              <a className="underline-animation" href="#about">
                <li className="">About</li>
              </a>
              <a className="underline-animation" href="#feature">
                <li>Features</li>
              </a>
              <a className="underline-animation" href="#techStack">
                <li>Tech Stacks</li>
              </a>
              <a className="underline-animation" href="#aboutUs">
                <li>About Us</li>
              </a>

              {/* SignUp button that can jumps to Clerk */}
              <button className="bg-orange-500 p-1 text-white rounded-md hover:bg-orange-700">
                Sign Up
              </button>
            </ul>
          </nav>
        </div>

        <div className="landing-bg-2">
          {/* Hero Sectoin */}
          <div id="about" className="relative mb-20">
            <img
              className="max-h-dvh w-full filter"
              src="/images/LandingHero.jpg"
              alt="a map with pins"
            />
            <div className="absolute left-6 bottom-28 text-white p-2 rounded-md w-2/3">
              <h1 className="mb-7 text-5xl">Hello World Travels with You</h1>
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
            <div className="grid grid-cols-3 gap-10">
              <div>
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
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                tempora totam dolorem molestias ratione veniam temporibus hic
                blanditiis voluptatem obcaecati cum libero, debitis neque?
                Quaerat fuga delectus magni blanditiis! Accusamus!
              </div>
            </div>
          </div>

          {/* Tech Stacks Section */}
          <div id="techStack" className="white-space mb-20">
            <h1 className="text-4xl mb-4">Tech Stacks</h1>
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
          <div id="aboutUs" className="white-space mb-20">
            <h1 className="text-4xl mb-4">About Us</h1>
            <div className="flex flex-col">
              <h1 className="text-2xl">Allison Lee</h1>
              <div className="grid grid-cols-2 mb-4">
                <img src="" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  vitae rem perspiciatis voluptatum fuga! Porro nesciunt
                  eligendi, iste minus aperiam nemo, similique veniam
                  laboriosam, doloremque inventore eaque earum officiis. In.
                </p>
              </div>

              <h1 className="text-2xl">Jing Wang</h1>
              <div className="grid grid-cols-2 mb-4">
                <img src="" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  vitae rem perspiciatis voluptatum fuga! Porro nesciunt
                  eligendi, iste minus aperiam nemo, similique veniam
                  laboriosam, doloremque inventore eaque earum officiis. In.
                </p>
              </div>

              <h1 className="text-2xl">Shika Lu</h1>
              <div className="grid grid-cols-2">
                <img src="" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  vitae rem perspiciatis voluptatum fuga! Porro nesciunt
                  eligendi, iste minus aperiam nemo, similique veniam
                  laboriosam, doloremque inventore eaque earum officiis. In.
                </p>
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
