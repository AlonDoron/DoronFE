import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const activeStyle = { color: "red" };
  return (
    <header>
      <nav className="columns is-variable is-4 is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <NavLink
          to="/"
          className="column headerItem"
          activeStyle={activeStyle}
          exact
        >
          דף הבית
        </NavLink>
        <NavLink
          to="/about"
          className="column headerItem"
          activeStyle={activeStyle}
        >
          אודותינו
        </NavLink>
        <NavLink
          to="/contactus"
          className="column headerItem"
          activeStyle={activeStyle}
        >
          צור קשר
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
