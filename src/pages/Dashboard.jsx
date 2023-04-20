import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchUsers } from "../store/actions/actionCreator";
import loader from "../assets/loader.gif";

const Dashboard = () => {
  const { isLoading, users, errorMsg: error, page } = useSelector((state) => state.user);

  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllUsers(currentPage, searchQuery);
  }, [searchQuery, currentPage]);

  const fetchAllUsers = async (page, search) => {
    try {
      await dispatch(fetchUsers(page, search));
    } catch (err) {
      console.log(err);
    }
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // if (isLoading) {
  //   return (
  //     <div className="d-flex justify-content-center mt-4">
  //       <img className="" src={loader} style={{ width: "100px", height: "100px" }} alt="" />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="h-100" style={{ marginTop: "50px", marginBottom: "50px", marginLeft: "45px", marginRight: "80px", width: "150vh" }}>
        <div class="mt-3 inputs">
          <i class="fa fa-search"></i>
          <form method="post" onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} class="form-control " placeholder="Search here!..." />
          </form>
        </div>

        <div class="card mt-2 fw-bold" style={{ maxWidth: "100%", maxHeight: "100%", textDecoration: "none", backgroundColor: "#3f55d1", color: "white" }}>
          <div class="row g-0">
            <div class="col-md-1 my-auto position-relative text-center" style={{}}>
              {/* <img src="https://robohash.org/hicveldicta.png?size=50x50&set=set1" class="img-fluid bg-black rounded-circle" alt="..." /> */}
              <p class="">Image</p>
            </div>
            <div class="col-md-11">
              <div class="card-body row position-relative" style={{}}>
                <p class="card-text col-3 text-center">Name</p>
                <p class="card-text col-2 text-center">Username</p>
                <p class="card-text col-2 text-center">Email</p>
                <p class="card-text col-2 text-center">Phone Number</p>
                <p class="card-text col-3 text-center">Card Number</p>
              </div>
            </div>
          </div>
        </div>

        {users?.map((el, index) => {
          return (
            <Link to={`/detail/${el.id}`} style={{ textDecoration: "none" }}>
              <a key={index} href="" className={`card mt-2 ${hoveredIndex === index ? "bg-primary-subtle" : ""}`} style={{ maxWidth: "100%", maxHeight: "100%", textDecoration: "none" }} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                <div class="row g-0">
                  <div class="col-md-1 my-auto position-relative" style={{ left: "20px" }}>
                    <img src={el.image} class="img-fluid bg-black rounded-circle" style={{ width: "50px", height: "50px" }} alt="..." />
                  </div>
                  <div class="col-md-11" style={{ fontSize: "12px" }}>
                    <div class="card-body row position-relative" style={{ top: "6px" }}>
                      <p class="card-text col-3 text-center">
                        {el.firstName} {el.lastName.replace(/./g, "*")} {el.maidenName}
                      </p>
                      <p class="card-text col-2 text-center">{el.username}</p>
                      <p class="card-text col-2 text-center">{el.email}</p>
                      <p class="card-text col-2 text-center">{el.phone}</p>
                      <p class="card-text col-3 text-center">{el?.bank?.cardNumber}</p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
        <div className="mt-3 d-flex justify-content-center ">
          <button type="button" class="btn btn-outline-primary" onClick={handlePrevClick} disabled={currentPage === 0}>
            Prev
          </button>
          <button type="button" class="btn btn-outline-primary ms-4" onClick={handleNextClick} disabled={users.length < 30}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
