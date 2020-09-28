import React from "react";
import "./About.css";
import aboutimg from "../../../img/aboutImg.png";

const About = () => {
  return (
    <div className="about main-body">
      <div className="about-title">
        <h3>
          About <span className="sub-title">us</span>
        </h3>
      </div>
      <div className="about-container section-center">
        <div className="about-image">
          <img src={aboutimg} alt="bag" />
        </div>
        <div className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          itaque incidunt illum aliquam delectus sed ipsum harum vel similique
          nisi ducimus autem, sunt est voluptatem placeat, eaque quos!
          Necessitatibus deserunt hic odit cumque cupiditate eaque quos,
          accusamus maxime porro illo vero tempora sit repellat praesentium!
          Cumque quaerat, provident officiis dolore deleniti id saepe
          reprehenderit quibusdam veniam est culpa, quam illo itaque
          consectetur, temporibus maxime cum. Velit, quidem. Eum a aliquid nemo
          ad laudantium corrupti ipsam praesentium recusandae labore modi
          dolorem voluptas impedit vero ab nobis tenetur dicta, quia eaque earum
          illo. Iure nisi cupiditate corrupti nobis dicta distinctio velit
          consequuntur?
        </div>
      </div>
    </div>
  );
};

export default About;
