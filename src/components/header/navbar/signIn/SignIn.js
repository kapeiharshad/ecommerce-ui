import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SignIn.css";

class SignIn extends Component {
  render() {
    return (
      <div className="signin main-body">
        <div className="signin-container">
          <div className="main-title">
            <h3>
              Sign <span className="main-sub-title">in</span>
            </h3>
          </div>
          <form action="">
            <input type="email" className="input-box" />
            <input type="password" className="input-box" />
            <button className="secoundary-btn">Sing In</button>
          </form>
          <div>
            <Link to="" className="secoundary-btn">
              <p>Forget Password ?</p>
            </Link>
          </div>
          <div>
            <Link to="/singup" className="secoundary-btn">
              <p>Don't have an account ?</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
