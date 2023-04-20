import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometer, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import BNI from "../assets/bni.png";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isToggled, setIsToggled] = useState("home");

  const handleToggle = (section) => {
    setIsToggled(section);
  };

  return (
    <>
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary vh-100" style={{ width: "250px" }}>
        {/* <a href="/" class="d-flex align-items-center mb-2 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mt-2" style={{ borderBottom: "2px solid #bfbfbf" }}>
          <img src={BNI} className="w-50 mx-auto mb-4" alt="" />
        </a> */}

        <div class="b-example-divider"></div>

        <ul class="nav nav-pills flex-column mb-auto ">
          <li class="nav-item">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <a href="/" className={`nav-link fw-bolder  fs-8 mt-3  ${isToggled === "home" ? "active" : ""}`} aria-current="page" onClick={() => handleToggle("home")}>
                <FontAwesomeIcon icon={faTachometer} size="1px" color="black" className="my-icon justify-center me-2 my-auto" />
                Home
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/add-user"} style={{ textDecoration: "none" }}>
              <a href="#" className={`nav-link fw-bolder fs-8 mt-1 ${isToggled === "addUser" ? "active" : ""}`} onClick={() => handleToggle("addUser")} aria-current="page">
                <FontAwesomeIcon icon={faUserPlus} size="1px" color="black" className="my-icon justify-center me-2 my-auto" />
                Add User
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
