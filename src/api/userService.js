// userService.js

// Define the base URL of your backend server
const API_URL = "http://localhost:3000";//==> this is usual the port for node server like default port just like reacte has its default port 5173

// Function to create a user or handle user login
export const createUser = async (userData) => {
  try {
    // Send a POST request to the '/user' endpoint on the backend
    const response = await fetch(`${API_URL}/user`, {
      method: "POST", // HTTP method set to POST
      headers: {
        "Content-Type": "application/json", // Specify that the request body contains JSON
      },
      body: JSON.stringify(userData), // Convert the userData object into a JSON string
    });

    // Parse the JSON response from the server
    const data = await response.json();

    // Check if the response status is not OK (not 200-299)
    if (!response.ok) {
      throw new Error(data.error || "Request failed"); // Throw an error with the server's message or a default one
    }

    // If successful, return the parsed data
    return data;
  } catch (error) {
    // Log any errors encountered during the API call
    console.error("API Error:", error);

    // Re-throw the error to be handled by the calling function
    throw error;
  }
};

// Function to log in a user by sending their credentials to the backend
export const loginUser = async (userData) => {
  try {
    // Send a POST request to the '/login' endpoint on the backend
    const response = await fetch(`${API_URL}/login`, {
      method: "POST", // HTTP method set to POST
      headers: {
        "Content-Type": "application/json", // Specify that the request body contains JSON
      },
      body: JSON.stringify(userData), // Convert the userData object into a JSON string
    });

    // Parse the JSON response from the server
    const data = await response.json();

    // Check if the response status is not OK (not 200-299)
    if (!response.ok) {
      throw new Error(data.error || "Login failed"); // Throw an error with the server's message or a default one
    }

    // If successful, return the parsed data
    return data;
  } catch (error) {
    // Log any errors encountered during the API call
    console.error("Login API Error:", error);

    // Re-throw the error to be handled by the calling function
    throw error;
  }
};
