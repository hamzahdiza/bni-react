import React from "react";
import BNI from "../assets/bni.png";

const Footer = () => {
  return (
    <>
      <div class="container bg-white w-100 h-100">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 mt-5 mb-2 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <img src={BNI} className="ms-4" alt="" style={{ width: "120px" }} />
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
