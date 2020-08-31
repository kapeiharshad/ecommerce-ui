import React from "react";
import "./Navbar.css";
import logo from "../../../img/logoImg.png";

const Navbar = () => {
  return (
    <div className="body">
      <div className="navbar section-center-navbar">
        <div className="brandLogo">
          <img src={logo} alt="BagGate Logo" />
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
              <i className="fas fa-power-off nav-links-icon"></i>Logout
            </span>
            <span className="nav-text">
              <i className="fas fa-shopping-bag nav-links-icon"></i>My orders
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
