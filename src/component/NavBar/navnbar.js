import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../assets/images/Logo/logo.png";
import { FaBars } from "react-icons/fa";

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
      <div className="container">
        <nav className="site-header_navbar">
          <div className="site-header__navbar-nav">
            <div className="site-header__logo-container">
              <img src={Logo} className="site-header__logo" />
            </div>
            <ul className="site-header__links" id="menu">
              <li className="dropdown">
                <span className="site-header__link dropdown-toggle" onMouseOver id="item" data-toggle="dropdown" onClick={handleClickNavbarItem} aria-haspopup="true" aria-expanded="false">
                Our Sectors <i class="fa fa-caret-down"></i>
                </span>
                <div class="dropdown-menu site-header__dropdown" aria-labelledby="item">
                <NavLink class="dropdown-item site-header__dropdown-item" to="#" onClick={handleClickNavbarItem}>Eeconomic</NavLink>
                <NavLink class="dropdown-item site-header__dropdown-item" to="#" onClick={handleClickNavbarItem}>Social</NavLink>
                <NavLink class="dropdown-item site-header__dropdown-item" to="#" onClick={handleClickNavbarItem}>Cultural</NavLink>
                <NavLink class="dropdown-item site-header__dropdown-item" to="#" onClick={handleClickNavbarItem}>Ecological</NavLink>
              </div>
              </li>
              <li>
                <NavLink to="/work" className="site-header__link" id="item" onClick={handleClickNavbarItem}
                >
                  Partnership
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="site-header__link" id="item" onClick={handleClickNavbarItem}
                >
                  News & Events
                </NavLink>
              </li>
              <li>
              <NavLink to="/abot" className="site-header__link" id="item" onClick={handleClickNavbarItem}
              >
                Publications
              </NavLink>
            </li>
            <li>
            <NavLink to="/abut" className="site-header__link" id="item" onClick={handleClickNavbarItem}
            >
              Donate
            </NavLink>
          </li>
            </ul>
            <div className="site-header__icons">
            <ul className="site-header__icons-list">
              <li className="site-header__icons-item">
                <FaBars className="site-header__toggle" 
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
