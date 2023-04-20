import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function Layout() {
  const { isLoading } = useSelector((state) => state.user);
  return (
    <div className="overflow-hidden">
      <div className="row">
        <div className="col-12 position-fixed z-2">
          <Header />
        </div>
        <div className="row">
          <div className="col-1 position-fixed z-1" style={{ marginTop: "70px" }}>
            <Sidebar />
          </div>
          <div className="col-11 offset-md-2" style={{ marginTop: "70px" }}>
            <Outlet />
            <ToastContainer />
          </div>
        </div>
        <div className={`col-12 z-2 offset-md-2 ${isLoading ? "visually-hidden" : ""}`} style={{ marginLeft: "182px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
