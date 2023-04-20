import React from "react";
import BNI from "../assets/bni.png";

const Header = () => {
  return (
    <>
      <div class="vw-100">
        <header class="d-flex flex-wrap justify-content-center py-3 bg-body-tertiary px-5">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src={BNI} className="ms-4" alt="" style={{ width: "120px" }} />
            <span class="fs-4 fw-bold" style={{ marginLeft: "100px", color: "#545454" }}>
              User Dashboard
            </span>
          </a>
        </header>
      </div>
    </>
  );
};

export default Header;
