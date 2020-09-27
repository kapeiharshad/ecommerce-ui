import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div className="footer main-body ">
      <div className="footer-container">
        <div className="footer-link-container">
          <NavLink to="/" id="footer-home-id" className="footer-link">
            Home
          </NavLink>
          <NavLink to="/about" className="footer-link">
            About Us
          </NavLink>
          <NavLink to="/collections" className="footer-link">
            Collections
          </NavLink>
          <NavLink to="/contact" className="footer-link">
            Contact Us
          </NavLink>
        </div>
        <div className="footer-icon-container">
          <span className="footer-icon">
            <i className="fab fa-facebook"></i>
          </span>
          <span className="footer-icon">
            <i className="fab fa-twitter"></i>
          </span>
          <span className="footer-icon">
            <i className="fab fa-instagram"></i>
          </span>
        </div>
        <div className="footer-rigths">
          <span className="footer-rigths-text">
            copyright &copy;
            <span className="footer-rigths-subtext">
              bagGate <span>{date}</span>
            </span>
            . all rights reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
