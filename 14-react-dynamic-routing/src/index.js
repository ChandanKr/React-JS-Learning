import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

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
  {
    path: "blogs",
    element: <Blog />,
  },
  {
    path: "blogs/:id",
    element: <BlogDetails />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);
