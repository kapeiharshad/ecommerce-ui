import React, {Component} from "react";
import "./Gallery.css";
import mainImg from "../../img/main-galleryImg.jpg";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="gallery-container">
          <div className="main-gallery-container">
            <img src={mainImg} alt="main gallery Img" className="main-image" />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
