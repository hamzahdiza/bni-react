import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div>Sidebar</div>
    </>
  );
}

export default Sidebar;
