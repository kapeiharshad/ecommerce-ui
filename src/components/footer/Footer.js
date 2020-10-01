import React from "react";
import {NavLink} from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div className="footer main-body ">
      <div className="footer-top-container">
        <div className="footer-top">
          <div className="footer-top-icon">
            <i class="fas fa-users"></i>
          </div>
          <h4 className="footer-top-title">Membership Discount</h4>
          <p className="footer-top-text">Register & save upto 80%</p>
        </div>
        <div className="footer-top">
          <div className="footer-top-icon">
            <i class="fas fa-truck"></i>
          </div>
          <h4 className="footer-top-title">Free & Fast Shipping</h4>
          <p className="footer-top-text">On Order above Rs 999/-</p>
        </div>
        <div className="footer-top">
          <div className="footer-top-icon">
            <i class="fas fa-exchange-alt"></i>
          </div>
          <h4 className="footer-top-title">Free Return or Exchange</h4>
          <p className="footer-top-text">Within 7 days.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-link-container">
            <NavLink to="/" className="footer-link">
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
    </div>
  );
};

export default Footer;
