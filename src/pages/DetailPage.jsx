import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteUser, fetchUserDetail } from "../store/actions/actionCreator";
import loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";

const DetailPage = () => {
  const { isLoading, userDetail, errorMsg: error, page } = useSelector((state) => state.user);
  const [isToggled, setIsToggled] = useState("personalData");

  const dispatch = useDispatch();

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleToggle = (section) => {
    setIsToggled(section);
  };

  const { id } = useParams();

  useEffect(() => {
    fetchDetailUsers(id);
  }, []);

  const fetchDetailUsers = async (id) => {
    try {
      await dispatch(fetchUserDetail(id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteUser(id));
      toast.success("Delete user successfull", toastOptions);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <img className="" src={loader} style={{ width: "100px", height: "100px" }} alt="" />
      </div>
    );
  }

  return (
    <>
      <div className="h-100" style={{ width: "70%", marginBottom: "20px", marginTop: "50px", marginLeft: "12%" }}>
        <div class="card mb-3">
          <img src={userDetail.image} class="card-img-top bg-black rounded-circle mx-auto my-4" style={{ width: "200px", height: "200px" }} alt="..." />

          <div className="position-absolute" style={{ top: "250px", left: "735px" }}>
            <Link to={`/edit-user/${id}`}>
              <button type="button" class="btn btn-outline-success">
                Edit
              </button>
            </Link>

            <button type="button" class="btn btn-outline-danger ms-2" onClick={() => handleDelete(userDetail.id)}>
              Delete
            </button>
          </div>

          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs fw-semibold " style={{ marginLeft: "13px" }}>
              <li class="nav-item">
                <a className={`nav-link ${isToggled === "personalData" ? "active text-primary" : "text-black"}`} onClick={() => handleToggle("personalData")} href="#">
                  Personal Data
                </a>
              </li>
              <li class="nav-item">
                <a className={`nav-link ${isToggled === "userCompany" ? "active text-primary" : "text-black"}`} onClick={() => handleToggle("userCompany")} href="#">
                  User Company
                </a>
              </li>
              <li class="nav-item">
                <a className={`nav-link ${isToggled === "userBankData" ? "active text-primary" : "text-black"}`} onClick={() => handleToggle("userBankData")} href="#">
                  User Bank Data
                </a>
              </li>
            </ul>
          </div>

          {/* Data Personal */}
          {isToggled === "personalData" && (
            <div class="card-body my-2 mx-3">
              <h5 class="card-title mb-4">
                {userDetail?.firstName} {userDetail?.lastName?.replace(/./g, "*")} {userDetail?.maidenName}
              </h5>
              <div className="row">
                <div className="col-3 fw-semibold">
                  <p class="card-text">Username</p>
                  <p class="card-text">Email</p>
                  <p class="card-text">Phone number</p>
                  <p class="card-text">Birth date</p>
                  <p class="card-text">Age</p>
                  <p class="card-text">Gender</p>
                  <p class="card-text">Address</p>
                  <p class="card-text">Postal code</p>
                  <p class="card-text">City</p>
                  <p class="card-text">State</p>
                  <p class="card-text">University</p>
                  <p class="card-text">EIN</p>
                  <p class="card-text">SSN</p>
                </div>
                <div className="col-1 fw-semibold">
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div className="col-8" style={{ marginLeft: "-20px" }}>
                  <p class="card-text">{userDetail.username}</p>
                  <p class="card-text">{userDetail.email}</p>
                  <p class="card-text">{userDetail.phone}</p>
                  <p class="card-text">{userDetail.birthDate}</p>
                  <p class="card-text">{userDetail.age}</p>
                  <p class="card-text">{userDetail.gender}</p>
                  <p class="card-text">{userDetail?.address?.address}</p>
                  <p class="card-text">{userDetail?.address?.postalCode}</p>
                  <p class="card-text">{userDetail?.address?.city}</p>
                  <p class="card-text">{userDetail?.address?.state}</p>
                  <p class="card-text">{userDetail?.university}</p>
                  <p class="card-text">{userDetail?.ein}</p>
                  <p class="card-text">{userDetail?.ssn}</p>
                </div>
              </div>
            </div>
          )}
          {/* Data Personal */}

          {/* User company */}
          {isToggled === "userCompany" && (
            <div class="card-body my-2 mx-3">
              <div className="row">
                <div className="col-3 fw-semibold">
                  <p class="card-text">Company name</p>
                  <p class="card-text">job title</p>
                  <p class="card-text">Department</p>
                  <p class="card-text">Address</p>
                  <p class="card-text">Postal Code</p>
                  <p class="card-text">City</p>
                  <p class="card-text">State</p>
                </div>
                <div className="col-1 fw-semibold">
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div className="col-8" style={{ marginLeft: "-20px" }}>
                  <p class="card-text">{userDetail?.company?.name}</p>
                  <p class="card-text">{userDetail?.company?.title}</p>
                  <p class="card-text">{userDetail?.company?.department}</p>
                  <p class="card-text">{userDetail?.company?.address?.address}</p>
                  <p class="card-text">{userDetail?.company?.address?.postalCode}</p>
                  <p class="card-text">{userDetail?.company?.address?.city}</p>
                  <p class="card-text">{userDetail?.company?.address?.state}</p>
                </div>
              </div>
            </div>
          )}
          {/* User company */}

          {/* User Bank Data */}
          {isToggled === "userBankData" && (
            <div class="card-body my-2 mx-3">
              <div className="row">
                <div className="col-3 fw-semibold">
                  <p class="card-text">Card Number</p>
                  <p class="card-text">IBAN</p>
                  <p class="card-text">Card Type</p>
                  <p class="card-text">Currency</p>
                  <p class="card-text">Card expire</p>
                </div>
                <div className="col-1 fw-semibold">
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div className="col-8" style={{ marginLeft: "-20px" }}>
                  <p class="card-text">{userDetail?.bank?.cardNumber}</p>
                  <p class="card-text">{userDetail?.bank?.iban}</p>
                  <p class="card-text">{userDetail?.bank?.cardType}</p>
                  <p class="card-text">{userDetail?.bank?.currency}</p>
                  <p class="card-text">{userDetail?.bank?.cardExpire}</p>
                </div>
              </div>
            </div>
          )}
          {/* User Bank Data */}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
