import React, { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBarNav  from "./SearchBarNav";
// import Dropdown from './Dropdown';
// import { MainLogo } from "./MainLogo";
import { CSSTransition } from "react-transition-group";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };



  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          {/* EPIC <i className="fab fa-firstdraft" /> */}
          <img src={require("../images/main-logo.png")} />
          <a href="http://google.com"></a>
          {/* <MainLogo /> */}
        </Link>
        <Link to="/" className="logo-mobile-small">
          {/* EPIC <i className="fab fa-firstdraft" /> */}
          <img src={require("../images/logo-mobile-small.svg")} />
          <a href="http://google.com"></a>
          {/* <MainLogo /> */}
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/movies"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Movies
            </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
          <li className="nav-item">
            <Link
              to="/mymovies"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              My Movies
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link> */}
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
             Join-Us
            </Link>
          </li>
        </ul>
        {/* <Button /> */}
        {/* <div className="right-icons"> */}
        <SearchBarNav />
        {/* <i className="fas fa-search fa-2x"></i> */}
        
        <i className="fas fa-plus fa-lg"></i>
        <Link to="/sign-up">
          <i className="fas fa-user user-icon fa-lg"></i>
        </Link>
        {/* </div> */}
      </nav>
    </>
  );
}

export default Navbar;
