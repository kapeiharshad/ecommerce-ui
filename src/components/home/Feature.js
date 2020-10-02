import React, {Component} from "react";
// import {Link} from "react-router-dom";
import "./Feature.css";

class Feature extends Component {
  render() {
    return (
      <div className="home-content">
        <div className="features-container section-center-feature">
          <div className="single-feature">
            <h4 className="features-title">100% Genuine Products</h4>
            <p className="features-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ex
              ullam ipsa natus qui.
            </p>
          </div>
          <div className="single-feature">
            <h4 className="features-title">Safe & Secure Payments</h4>
            <p className="features-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ex
              ullam ipsa natus qui.
            </p>
          </div>
          <div className="single-feature">
            <h4 className="features-title">Money Back Guarantee</h4>
            <p className="features-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ex
              ullam ipsa natus qui.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
