import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { redirect } from "react-router-dom";

// import Sidebar from "../components/Sidebar";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

// rhf form react

export default router;
