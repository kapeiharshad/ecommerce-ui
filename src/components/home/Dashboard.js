import React, {Component} from "react";
import Header from "../header/Header";
import {Link} from "react-router-dom";
import bagImage from "../../img/bannerImg.png";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="main-body Dashboard">
        <div className="hero">
          <Header />
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
                <Link to="/collections" className="hero-button">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="bagImage-container">
              <img src={bagImage} alt="Bags" className="bagImage" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
