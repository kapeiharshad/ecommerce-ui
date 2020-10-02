import React, { Component } from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";

import mainImg from "../../img/main-galleryImg.jpg";
import subImg1 from "../../img/sub-galleryImg1.jpg";
import subImg2 from "../../img/sub-galleryImg2.jpg";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="main-gallery-container">
          <div className="main-gallery-img-container">
            <img src={mainImg} alt="main gallery Img" className="main-image" />
          </div>
          <div className="main-gallery-text-container">
            <i className="fas fa-crown main-gallery-icon"></i>
            <h4 className="main-gallery-title">Luxury at its finest</h4>
            <p className="main-gallery-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              sunt.
            </p>
            <Link to="/collections" className="main-btn">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="sub-gallery-container">
          <img src={subImg1} alt="sub img 1" className="sub-image" />
          <div className="sub-gallery-content">
            <div className="sub-gallery-icon-container">
              <i className="fas fa-paint-brush"></i>
              <div className="plus">+</div>
              <i className="fas fa-feather"></i>
            </div>
          </div>
          <img src={subImg2} alt="sub img 2" className="sub-image" />
        </div>
      </div>
    );
  }
}

export default Gallery;
