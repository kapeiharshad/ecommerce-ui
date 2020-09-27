import React from "react";
import "./About.css";
import aboutimg from "../../../img/aboutimg.png"

const About = () => {
  return <div className="about main-body">
    <div className="abouttitle">
      About <span className="sub-title">us</span> 
    </div>
  <img src={aboutimg} alt="bag"/>
    <div className="aboutcontent">
      Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,
      Pellentesque maximus libero.Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer.
    </div>
    
  </div>;
};

export default About;
