import React from "react";
import "./About.css";
import aboutimg from "../../../img/aboutImg.png";

const About = () => {
  return (
    <div className="about main-body">
      <div className="main-title">
        <h3>
          About <span className="main-sub-title">us</span>
        </h3>
      </div>
      <div className="about-container section-center-about">
        <div className="about-image-container">
          <img src={aboutimg} alt="bag" className="about-image" />
        </div>
        <div className="about-text">
          Today, BagGate's standards of quality are just as uncompromising as
          when the brand was founded. Every piece is created by artisans who
          have dedicated their lives to learning the art of making beautiful and
          practical goods. Through unparalleled craftsmanship, BagGate is made
          to last. <br /> <br />
          Over the years, we’ve built long-standing relationships with our
          production partners, each one rooted in trust and a commitment to
          excellence. In fact, the BagGate original collection is still crafted
          in the same factory in Mumbai. <br /> <br />
          Where and how our products are made is an integral part of our
          heritage. Every piece in our collection is made to serve as your
          trusted companion through a lifetime of experiences.
        </div>
      </div>
    </div>
  );
};

export default About;
