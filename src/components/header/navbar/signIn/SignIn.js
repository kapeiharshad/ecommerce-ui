import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SignIn.css";

class SignIn extends Component {
  render() {
    return (
      <div className="signin main-body">
        <div className="main-title">
          <h3>
            Sign <span className="main-sub-title">in</span>
          </h3>
        </div>
        <div className="signin-container section-center-signin">
          <form action="">
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
            <button className="secoundary-btn">Sign In</button>
          </form>
          <div className="singin-links-container">
            <span className="createaccount-text">
              <Link to="/signup">
                <p>Don't have an account ?</p>
              </Link>
            </span>
            <span className="forget-text">
              <Link to="">
                <p>Forget Password ?</p>
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
