import { useState, useEffect } from "react";
// Import useState and useEffect hooks from React for state management and side effects.
import { GoogleOAuthProvider } from "@react-oauth/google";
// Import GoogleOAuthProvider for integrating Google OAuth authentication.
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
// Import routing components from react-router-dom: BrowserRouter for routing context,
// Routes and Route for defining paths, Navigate for redirection, and useNavigate for programmatic navigation.

import LandingPage from "./pages/LandingPage";
// Import LandingPage component for the login route.
import HomePage from "./pages/HomePage";
// Import HomePage component for the main/home route.
import CreateAccountPage from "./pages/CreateAccountPage";
import ProfilePage from "./pages/ProfilePage";
import TimeLinePage from "./pages/TimeLinePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Define a state variable isAuthenticated to track if the user is logged in; initialized to false.
  const navigate = useNavigate();
  // Get the navigate function from react-router-dom to allow for programmatic navigation.

  //shows the dropdown menu for Homepage and the Profile page(prop)
  const [menu, setMenu] = useState(false);

  //when click Log Out, go to the landing page
  const signOut = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log("Authentication status:", isAuthenticated);
    // Log the current authentication status to the console for debugging.
    if (isAuthenticated) {
      console.log("Navigating to home page");
    }
  }, [isAuthenticated, navigate]);
  // useEffect runs whenever isAuthenticated or navigate changes.
  // This checks the authentication status and navigates if necessary.

  return (
    <Routes>
      {/* Define all routes within the Routes component */}
      <Route
        path="/"
        element={<LandingPage />}
        //the default page
      />

      <Route
        path="/home"
        element={
          //with Authenticated props, we can check if isAuthenticated= true or false for Log Out
          //with Profile props, we can check if the clickProfile=true for going to Profile page
          <HomePage menu={menu} setMenu={setMenu} signOut={signOut} />
        }
      />

      <Route
        path="/createAccount"
        element={
          <CreateAccountPage
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        }
        //Goes to the createAccount page from the button
      />
      <Route
        path="/profile"
        element={
          <ProfilePage menu={menu} setMenu={setMenu} signOut={signOut} />
        }
        //Goes to the Profile page from the button
      />
      <Route
        path="/timeline"
        element={<TimeLinePage/>}
      />
    </Routes>
  );
}

export default function RootApp() {
  return (
    <GoogleOAuthProvider clientId="584140172046-gkgm53jvaso7vqrvh75r1lsc3dvdk1qa.apps.googleusercontent.com">
      {/* Wrap the application in GoogleOAuthProvider to enable Google OAuth login,
          with the clientId from Google Cloud Console */}
      <BrowserRouter>
        {/* Wrap App with BrowserRouter to enable routing throughout the application */}
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
