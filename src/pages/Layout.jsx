import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <div>
      <div className="d-flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
