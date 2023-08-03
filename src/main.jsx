import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Register from "./Components/Register.jsx";
import Home from "./Components/Home.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Dashboard, {
  taskLoader,
} from "./Components/PrivateRoutes/Dashboard.jsx";
import TaskDetails, {
  taskDetailsLoader,
} from "./Components/PrivateRoutes/TaskDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/tasks",
        element: <Dashboard></Dashboard>,
        loader: taskLoader,
      },
      {
        path: "tasks/:id",
        element: <TaskDetails></TaskDetails>,
        loader: taskDetailsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
