import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../assets/images/Logo/logo.png";
import { FaBars } from "react-icons/fa";
import Header from "../Header/header";

// onClick Function Handeler for responsive navbar
const handleClickIcon = () => {
  document.querySelector("#menu").classList.toggle("active");
  // document.querySelector("#dropDown").classList.("active");
};
const handleClickNavbarItem = () => {
  document.querySelector("#menu").classList.remove("active");
};
// Navbar Component
const Navbar = () => {
  return (
    
    <header className="site-header ">
    <Header />
      <div className="container">
        <nav className="site-header_navbar">
          <div className="site-header__navbar-nav">
            <a href="/">
              <div className="site-header__logo-container">
                <img src={Logo} className="site-header__logo" />
              </div>
            </a>
            <ul className="site-header__links" id="menu">
              <li className="dropdown">
                <span
                  className="site-header__link dropdown-toggle"
                  onMouseOver
                  id="item"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our Sectors <i class="fa fa-caret-down"></i>
                </span>
                <div
                  class="dropdown-menu site-header__dropdown"
                  aria-labelledby="item"
                >
                  <a
                    class="dropdown-item site-header__dropdown-item"
                    href="/economic"
                  >
                    Eeconomic
                  </a>
                  <a
                    class="dropdown-item site-header__dropdown-item"
                    href="/social"
                  >
                    Social
                  </a>
                  <a
                    class="dropdown-item site-header__dropdown-item"
                    href="/cultural"
                  >
                    Cultural
                  </a>
                  <a
                    class="dropdown-item site-header__dropdown-item"
                    href="/ecological"
                  >
                    Ecological
                  </a>
                </div>
              </li>
              <li>
                <NavLink
                  exact
                  to="/partnership"
                  className="site-header__link"
                  id="item"
                  onClick={handleClickNavbarItem}
                >
                  Partnership
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/news"
                  className="site-header__link"
                  id="item"
                  onClick={handleClickNavbarItem}
                >
                  News & Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/publications"
                  className="site-header__link"
                  id="item"
                  onClick={handleClickNavbarItem}
                >
                  Publications
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/donate"
                  className="site-header__link"
                  id="item"
                  onClick={handleClickNavbarItem}
                >
                  Donate
                </NavLink>
              </li>
            </ul>
            <div className="site-header__icons">
              <ul className="site-header__icons-list">
                <li className="site-header__icons-item">
                  <FaBars
                    className="site-header__toggle"
                    onClick={handleClickIcon}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
