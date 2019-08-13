import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <NavLink to="/" exact>
        דף הבית
      </NavLink>
      {" | "} <NavLink to="/about">אודותינו</NavLink> {" | "}
      <NavLink to="/contactus">צור קשר</NavLink>
    </nav>
  );
}

export default Header;
