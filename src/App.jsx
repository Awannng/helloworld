import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrendingPage from "./pages/TrendingPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  //might need loader later(need more research)
  //This page is the router that connects to different pages. So far, I only added 2 pages. Make sure the path of the router matches to the Link 'to' attribute in the NavBar component.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "trending",
      element: <TrendingPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
