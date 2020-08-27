import React from "react";
import "./Navbar.css";
import logo from "../../../img/logoImg.png";

const Navbar = () => {
  return (
    <div className="body">
      <img src={logo} alt="BagGate Logo" />
    </div>
  );
};

export default Navbar;
