import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {" | "} <NavLink to="/about">About</NavLink> {" | "}
      <NavLink to="/contactus">Contact Us</NavLink>
    </nav>
  );
}

export default Header;
