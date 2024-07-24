import React, { Fragment } from "react";
import "./nav.css";
import Homepage from "../Home/Homepage";
import { NavLink } from "react-router-dom";

const NavTop = () => {
  return (
    <Fragment>
      <div className="topnav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/users">Manage User</NavLink>
      </div>
    </Fragment>
  );
};

export default NavTop;
