import React, { Component } from "react";
import { Link } from "react-router-dom";
import bagImage from "../../img/bannerImg.png";
import "./Dashboard.css";
import Feature from "./feature/Feature";
import Gallery from "./gallery/Gallery";

class Dashboard extends Component {
  render() {
    return (
      <div className="main-body Dashboard">
        <div className="hero">
          <div className="hero-container">
            <div className="hero-title-container">
              <h1 className="hero-title">
                Enter <span className="hero-subtitle">into</span> bags heaven
                <span className="hero-subtitle">...</span>
              </h1>
              <div className="hero-text-container">
                <p className="hero-text">
                  The most trendy and fashionable bags waiting for you.
                </p>
                <Link to="/collections" className="main-btn">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="bagImage-container">
              <img src={bagImage} alt="Bags" className="bagImage" />
            </div>
          </div>
        </div>
        <Feature />
        <Gallery />
      </div>
    );
  }
}

export default Dashboard;
