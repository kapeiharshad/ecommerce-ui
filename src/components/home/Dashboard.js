import React, { Component } from "react";
import Header from "../header/Header";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="hero">
          <Header />
        </div>
      </div>
    );
  }
}

export default Dashboard;
