import React, { useState } from "react";
import FormAddEdit from "../components/FormAddEdit";
import loader from "../assets/loader.gif";
import { useSelector } from "react-redux";

const EditUser = () => {
  const { isLoading } = useSelector((state) => state.user);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <img className="" src={loader} style={{ width: "100px", height: "100px" }} alt="" />
      </div>
    );
  }
  return (
    <>
      <div className="h-90 bg-white p-5 rounded-5" style={{ width: "70%", marginBottom: "20px", marginTop: "50px", marginLeft: "12%" }}>
        <h1 className="fw-bold mb-3">Edit User</h1>

        <FormAddEdit />
      </div>
    </>
  );
};

export default EditUser;
