import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from '../../assets/doronLogo.png';


function Header() {
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://localhost:3000">
            <img src={logo} alt="doronLogo" width="130" height="65" className="headerLogo" />
          </a>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="headerNavbarLinks">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="headerNavbarLinks" className="navbar-menu">
          <div className="navbar-end">
            <NavLink className="navbar-item" to="/" exact>דף הבית</NavLink>
            <NavLink className="navbar-item" to="/about">אודותינו</NavLink>
            <NavLink className="navbar-item" to="/contactus">צור קשר</NavLink>
          </div>
        </div>
      </nav>
    </header >
  );
}

export default Header;