import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Error404 from "./pages/Error404";

const root = ReactDOM.createRoot(document.getElementById("root"));

let allRoutes = createBrowserRouter([
  {
    path: "/", // This is static routing, "/" means root/default page
    element: <Home />,
  },
  {
    path: "about-us", // This is static routing
    element: <About />,
  },
  {
    path: "course", // This is static routing
    element: <Course />,
  },
  {
    path: "blogs", // This is static routing
    element: <Blog />,
  },
  {
    path: "blogs/:id", // This is dynamic routing
    element: <BlogDetails />,
  },
  {
    path: "*", // This means no routes matches, will render error 404 page
    element: <Error404 />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);
