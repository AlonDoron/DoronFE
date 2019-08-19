import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/doronLogo.png";

function Header() {
  const [burgerStyle, setBurgerStyle] = useState("");
  function handleClickOnBurger() {
    if (burgerStyle === "") {
      setBurgerStyle("is-active");
    } else {
      setBurgerStyle("");
    }
  }
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            <img
              src={logo}
              alt="doronLogo"
              width="130"
              height="65"
              className="headerLogo"
            />
          </NavLink>
          <div
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="headerNavbarLinks"
            onClick={handleClickOnBurger}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
        <div id="headerNavbarLinks" className={"navbar-menu " + burgerStyle}>
          <div className="navbar-end">
            <NavLink
              className="navbar-item"
              to="/"
              onClick={handleClickOnBurger}
              exact
            >
              דף הבית
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/about"
              onClick={handleClickOnBurger}
            >
              אודותינו
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/contactus"
              onClick={handleClickOnBurger}
            >
              צור קשר
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
