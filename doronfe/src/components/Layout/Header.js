import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/doronLogo.png";
import { RequestNewLeadButton } from "../Common";

function Header() {
  const [burgerStyle, setBurgerStyle] = useState("");
  function openBurgerMenu() {
    setBurgerStyle("is-active");
  }
  function closeBurgerMenu() {
    setBurgerStyle("");
  }

  const activeStyle = {
    color: "#209cee",
    backgroundColor: "#fafafa"
  };

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            <img
              src={logo}
              alt="doronLogo"
              className="headerLogo"
              onClick={closeBurgerMenu}
            />
          </NavLink>
          <div
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="headerNavbarLinks"
            onClick={burgerStyle === "" ? openBurgerMenu : closeBurgerMenu}
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
              onClick={closeBurgerMenu}
              activeStyle={activeStyle}
              exact
            >
              דף הבית
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/about"
              onClick={closeBurgerMenu}
              activeStyle={activeStyle}
            >
              אודותינו
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/contactus"
              onClick={closeBurgerMenu}
              activeStyle={activeStyle}
            >
              צור קשר
            </NavLink>
            <RequestNewLeadButton onClick={closeBurgerMenu} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
