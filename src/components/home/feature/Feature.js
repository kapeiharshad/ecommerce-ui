import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="features">
      <div className="features-container section-center-feature">
        <div className="single-feature">
          <h4 className="features-title">100% Genuine Products</h4>
          <p className="features-text">
            We ensure that only the best brands and new designs brought to you by BagGate.
          </p>
        </div>
        <div className="single-feature">
          <h4 className="features-title">Safe & Secure Payments</h4>
          <p className="features-text">
            We use the latest technology to provide you with safe & secure payment system.  
          </p>
        </div>
        <div className="single-feature">
          <h4 className="features-title">Money Back Guarantee</h4>
          <p className="features-text">
            After cancellation of order proprate money will be guarantee refund with in 7 days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
