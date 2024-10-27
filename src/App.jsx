import { useState, useEffect } from 'react';
// Importing necessary hooks and components from React and react-router-dom
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';  // Importing the LoginPage component
import HomePage from './pages/HomePage';    // Importing the HomePage component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Declaring a state variable 'isAuthenticated' to track if the user is logged in
  // 'setIsAuthenticated' is the function to update this state

  const navigate = useNavigate();
  // useNavigate hook returns a navigation function which allows for programmatic navigation

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
      // If the user is authenticated, navigate them to the homepage ('/')
    }
  }, [isAuthenticated, navigate]);
  // useEffect hook that runs whenever 'isAuthenticated' or 'navigate' changes
  // Ensures that if 'isAuthenticated' becomes true, the user is redirected to '/'

  return (
    <Routes>
      {/* Define all routes within the Routes component */}
      <Route
        path="/"
        element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        // If user is authenticated, render HomePage at the root path '/'
        // Otherwise, redirect to '/login' using the Navigate component
      />
      <Route
        path="/login"
        element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        // Render LoginPage at '/login' path
        // Pass 'setIsAuthenticated' to LoginPage so it can update the authentication state
      />
    </Routes>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
      {/* BrowserRouter provides routing context for the entire app */}
    </BrowserRouter>
  );
}

