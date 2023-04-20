import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { redirect } from "react-router-dom";

// import Sidebar from "../components/Sidebar";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import DetailPage from "../pages/DetailPage";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";

const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/edit-user/:id",
        element: <EditUser />,
      },
    ],
  },
]);

// rhf form react

export default router;
