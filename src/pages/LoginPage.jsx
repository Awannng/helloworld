import React from 'react';

const LoginPage = ({ setIsAuthenticated }) => {
  const handleLogin = () => {
    
    // Simulate login, set authentication status to true
    console.log("Login button clicked"); // Debugging.I'm getting an error reporting that the page can't be displayed so I'm printing out the output to check for problems
   
    //Monitor user click event and update boolean values
    setIsAuthenticated(true);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh', textAlign: 'center' }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;

