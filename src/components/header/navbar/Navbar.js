import React from "react";
import "./Navbar.css";
import logo from "../../../img/logoImg.png";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-body" style={{paddingTop: "32px"}}>
      <div className="navbar section-center-navbar">
        <div className="nav-toogle-container">
          <div className="nav-toogle">
            <i className="fas fa-bars nav-toogle-icon"></i>
          </div>
          <div className="brandLogo-container">
            <Link to="/">
              <img src={logo} alt="BagGate Logo" className="brandLogo" />
            </Link>
          </div>
        </div>
        <div className="nav-links-container">
          <form action="" className="search-container nav-text-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search here"
            />
            <button>
              <i className="fas fa-search search-button"></i>
            </button>
          </form>

          <div className="signInedTab">
            <NavLink to="/orders">
              <span className="nav-text-container">
                <i
                  className="fas fa-shopping-bag nav-links-icon"
                  style={{color: "#495057"}}
                ></i>
                <span className="links-text">My orders</span>
              </span>
            </NavLink>
            <NavLink className="navlink" to="/logout">
              <span className="nav-text-container">
                <i className="fas fa-power-off nav-links-icon"></i>
                <span className="links-text">Logout</span>
              </span>
            </NavLink>
          </div>

          {/* <div className="signOutedTab">
            <NavLink className="navlink" to="/signin">
              <span className="nav-text-container">
                <i
                  className="fas fa-sign-in-alt nav-links-icon"
                  style={{ color: "#495057" }}
                ></i>
                <span className="links-text">Sign In</span>
              </span>
            </NavLink>

            <NavLink className="navlink" to="/signup">
              <span className="nav-text-container">
                <i className="fas fa-user-plus nav-links-icon"></i>
                <span className="links-text">Sign Up</span>
              </span>
            </NavLink>
          </div> */}
        </div>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default Navbar;
