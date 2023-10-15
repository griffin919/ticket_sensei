import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterHost from "./host/HostCRUD/RegisterHost.jsx";
import RegisterGuest from "./guest/GuestCRUD/RegisterGuest.jsx";
import ErrorPage from "./ErrorPage.jsx";
import HPLayout from "./homepage/HPLayout.jsx";
import Homepage from "./homepage/Homepage.jsx";
import CreateEvent from "./events/CreateEvent.jsx";

const router = createBrowserRouter([
  {
    path: "/host/register",
    element: <RegisterHost />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/guest/register",
    element: <RegisterGuest />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <HPLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/event/create",
        element: <CreateEvent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
