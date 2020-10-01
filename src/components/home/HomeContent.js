import React, {Component} from "react";
// import {Link} from "react-router-dom";
import "./HomeContent.css";

class HomeContent extends Component {
  render() {
    return (
      <div className="home-content">
        <div className="features-container">
          <div className="single-feature">
            <h4 className="features-title">100% Genuine Products</h4>
            <p className="features-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum
              exercitationem doloremque minus ipsa quam fugit nemo ratione
              voluptates placeat?
            </p>
          </div>
          <div className="single-feature">
            <h4 className="features-title">100% Genuine Products</h4>
            <p className="features-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum
              exercitationem doloremque minus ipsa quam fugit nemo ratione
              voluptates placeat?
            </p>
          </div>
          <div className="single-feature">
            <h4 className="features-title">100% Genuine Products</h4>
            <p className="features-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum
              exercitationem doloremque minus ipsa quam fugit nemo ratione
              voluptates placeat?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;
