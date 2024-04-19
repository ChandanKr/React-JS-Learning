import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";

const root = ReactDOM.createRoot(document.getElementById("root"));

let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about-us",
    element: <About />,
  },
  {
    path: "course",
    element: <Course />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);
