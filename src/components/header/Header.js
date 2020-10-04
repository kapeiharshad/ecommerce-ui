import React from "react";
import Navbar from "./navbar/Navbar";
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header main-body">
      <Navbar />
      <div className="headers-link-container section-center-header">
        <NavLink to="/" className="header-link">
          Home
        </NavLink>
        <NavLink to="/about" className="header-link">
          About Us
        </NavLink>
        <NavLink to="/collections" className="header-link">
          Collections
        </NavLink>
        <NavLink to="/contact" className="header-link">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
