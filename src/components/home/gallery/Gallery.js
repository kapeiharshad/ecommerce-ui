import React, { Component } from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";

import mainImg from "../../../img/main-galleryImg.jpg";
import subImg1 from "../../../img/sub-galleryImg1.jpg";
import subImg2 from "../../../img/sub-galleryImg2.jpg";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        {/* --------------------------- main gallery start -------------------------- */}
        <div className="main-gallery-container">
          <div className="main-gallery-img-container">
            <img src={mainImg} alt="main gallery Img" className="main-image" />
          </div>
          <div className="main-gallery-text-container">
            <i className="fas fa-crown main-gallery-icon"></i>
            <h4 className="main-gallery-title">Luxury at its finest</h4>
            <p className="main-gallery-text">
              BagGate brings luxurious edge to your dainty outfits.
            </p>
            <Link to="/collections" className="main-btn">
              Shop Now
            </Link>
          </div>
        </div>
        {/* --------------------------- main gallery end -------------------------- */}

        {/*  ----------------------------sub gallery section start---------------------- */}
        <div className="sub-gallery-container">
          <img src={subImg1} alt="sub img 1" className="sub-image" />
          <div className="sub-gallery-content">
            <div className="sub-gallery-icon-container">
              <div>
                <i className="fas fa-paint-brush sub-gallery-icon"></i>
              </div>
              <div className="plus">+</div>
              <div>
                <i className="fas fa-feather sub-gallery-icon"></i>
              </div>
            </div>
            <h4 className="sub-gallery-title">Where Design meets Comfort</h4>
            <p className="sub-gallery-text">
              BagGate gives you trendy,classic,ethnic and many more designs of bags
            </p>
            <Link to="/collections" className="main-btn">
              Shop Now
            </Link>
          </div>
          <img src={subImg2} alt="sub img 2" className="sub-image" />
        </div>
        {/*  ----------------------------sub gallery section end---------------------- */}

        {/* ----------------------------bottom gallery start ------------------------- */}
        <div className="bottom-gallery-container">
          <div>
            <div className="bottom-gallery-img-container">
              <div className="bottom-gallery-content">
                <div className="fa-stack fa-lg bottom-gallery-icon">
                  <i className="fa fa-certificate fa-stack-2x"></i>
                  <i className="fa fa-tag fa-stack-1x fa-inverse"></i>
                </div>
                <h3 className="bottom-gallery-title">
                  Get 30% discount on your first order
                </h3>

                <Link to="/collections" className="main-btn btn-margin">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------bottom gallery end ------------------------- */}
      </div>
    );
  }
}

export default Gallery;
