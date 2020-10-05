import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "./SignUp.css";

class signUp extends Component {
  render() {
    return (
      <div className="singup main-body">
        <div className="main-title">
          <h3>
            Sign <span className="main-sub-title">up</span>
          </h3>
        </div>
        <div className="signup-container section-center-signup">
          <form action="">
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                className="input-box"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter Email"
                className="input-box"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="input-box"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Re-enter password"
                className="input-box"
              />
            </div>
            <button className="secoundary-btn">Sign Up</button>
          </form>
          <p className="tandc-text">
            By clicking singup,I agree to your terms & conditions.
          </p>
        </div>
      </div>
    );
  }
}

export default signUp;
