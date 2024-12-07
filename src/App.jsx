import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ProfilePage from "./pages/ProfilePage";
import TimeLinePage from "./pages/TimeLinePage";

function App() {
  const { signOut } = useClerk(); // Get the Clerk sign-out method
  const { isSignedIn } = useUser(); // Use Clerk to check if the user is signed in
  const [menu, setMenu] = useState(false); // State to manage the menu visibility
  const navigate = useNavigate();

  // Global sign-out logic
  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("User has been logged out.");
      navigate("/", {
        state: { message: "You have successfully logged out." },
      }); // Navigate with a message
    } catch (error) {
      console.error("Error during sign out:", error);
      alert("An error occurred during sign out. Please try again.");
    }
  };

  useEffect(() => {
    if (isSignedIn === undefined) return; // Wait for Clerk to initialize
    const allowedPaths = ["/home", "/profile", "/timeline"];
    if (isSignedIn && !allowedPaths.includes(window.location.pathname)) {
      console.log("Navigating to home page...");
      navigate("/home");
    }
  }, [isSignedIn, navigate]);

  

  return (
    <Routes>
      {/* Define all routes within the Routes component */}
      <Route
        path="/"
        element={<LandingPage />}
        // Default page
      />

      <Route
        path="/home"
        element={
          isSignedIn ? (
            <HomePage
              menu={menu}
              setMenu={setMenu}
              signOut={handleSignOut}
            />
          ) : (
            <Navigate to="/" /> // Redirect to the landing page if not signed in
          )
        }
      />

      <Route
        path="/createAccount"
        element={<CreateAccountPage />}
        // Navigate to the create account page from a button
      />
      <Route
        path="/profile"
        element={
          isSignedIn ? (
            <ProfilePage
              menu={menu}
              setMenu={setMenu}
              signOut={handleSignOut}
            />
          ) : (
            <Navigate to="/" /> // Redirect to the landing page if not signed in
          )
        }
        // Navigate to the profile page from a button
      />
      <Route
        path="/timeline"
        element={
          isSignedIn ? (
            <TimeLinePage
              menu={menu}
              setMenu={setMenu}
              signOut={handleSignOut}
            />
          ) : (
            <Navigate to="/" /> // Redirect to the landing page if not signed in
          )
        }
      />
    </Routes>
  );
}
export default App;
