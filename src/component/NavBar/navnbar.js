import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import {getSectorsRequest} from '../../store/actions/sectors'
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
const Navbar = ({sector,getSector}) => {
  // i'm using state mangment to get the sector data in dropdown
  useEffect(()=>{
    getSector();
  },[]);

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
                  id="item"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our Sectors <i className="fa fa-caret-down"></i>
                </span>
                <div
                  className="dropdown-menu site-header__dropdown"
                  aria-labelledby="item"
                >
                 {
                  // get the title of sector from data base 
                  sector?(
                   sector.map((item)=>{
                     return(
                      <a href={`/sector/${item._id}`} className="site-header__dropdown-item">
                      <h4>{item.title}</h4>
                      </a>
                     )
                  
                   })
                 ):"Some Thing wrong in server please wait .. "}
                </div>
              </li>
              <li>
                <a
                  
                  href="/partnership"
                  className="site-header__link"
                  id="item"
                  onClick={handleClickNavbarItem}
                >
                  Partnership
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="site-header__link"
                  id="item"
                  onClick={handleClickNavbarItem}
                >
                  News & Events
                </a>
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
const mapStateToProps=(state)=>({
  sector:state.sector.sectors.data,
})
const mapDispatchToProps={
  getSector:getSectorsRequest,
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
