import React from 'react';
// Import React for creating components.

import { useGoogleLogin } from '@react-oauth/google';
// Import useGoogleLogin hook from @react-oauth/google for handling Google OAuth login.

import { FcGoogle } from 'react-icons/fc';
// Import the Google icon from react-icons library for displaying in the button.

const GoogleLoginComponent = ({ setIsAuthenticated }) => {
  // Define GoogleLoginComponent as a functional component that takes setIsAuthenticated as a prop.

  const login = useGoogleLogin({
    // Call useGoogleLogin hook to initiate the Google login process and store the login function.
    
    onSuccess: (tokenResponse) => {
      // Define the onSuccess callback, which will be called if login is successful.
      
      console.log('Login Success:', tokenResponse);
      // Log the token response to the console for debugging purposes.
      
      setIsAuthenticated(true); 
      // Call setIsAuthenticated with true to update the authentication status when login is successful.
      
      console.log('isAuthenticated should now be true');
      // Log a message to the console indicating that isAuthenticated should now be true.
    },
    
    onError: () => {
      // Define the onError callback, which will be called if login fails.
      
      console.log('Login Failed');
      // Log a message to the console indicating that the login attempt failed.
    },
    
    scope: 'openid email profile',
    // Specify the scope for the Google OAuth request, requesting access to basic profile and email information.
  });

  return (
    <button onClick={login} className="google-login-button flex items-center gap-2">
      {/* Render a button element with an onClick handler that triggers the login function. 
          Apply classes for styling the button (e.g., alignment and spacing). */}
      
      <FcGoogle className="size-6" />
      {/* Display the Google icon within the button for visual indication of Google login */}
     
    </button>
  );
};

export default GoogleLoginComponent;
// Export the GoogleLoginComponent to be used in other parts of the application.
