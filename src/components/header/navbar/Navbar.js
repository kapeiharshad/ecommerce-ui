import React from "react";
import "./Navbar.css";
import logo from "../../../img/logoImg.png";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-body" style={{paddingTop: "2rem"}}>
      <div className="navbar section-center-navbar">
        <div className="brandLogo">
          <Link to="/">
            <img src={logo} alt="BagGate Logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <form action="" className="search-container nav-text">
            <input
              className="search-input"
              type="text"
              placeholder="Search here"
            />
            <button>
              <i className="fas fa-search search-button"></i>
            </button>
          </form>

          {/* <div className="signInedTab">
            <div>
              <span className="nav-text">
                <i className="fas fa-shopping-bag nav-links-icon"></i>My orders
              </span>
              <span className="nav-text">
                <i className="fas fa-power-off nav-links-icon"></i>Logout
              </span>
            </div>
          </div> */}

          <div className="signOutedTab">
            <div>
              <span className="nav-text">
                <i className="fas fa-sign-in-alt nav-links-icon"></i>Sign In
              </span>
              <span className="nav-text">
                <i className="fas fa-user-plus nav-links-icon"></i>Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default Navbar;
