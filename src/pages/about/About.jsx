import React from 'react';
import img from "../../assets/image.png";
import "./about.css";

const About = () => {
  return (
    <div className="banner-container">
      {/* Orqa fondagi rasm */}
      <img className="banner-img" src={img} alt="Banner" />

      {/* Rasm ustidagi qatlam (Overlay content) */}
      <div className="banner-content">
        <div className="left-side">
          <h1 className="banner-title">
            GET 50% OFF <br />
            PRESCRIPTION LENSES
          </h1>
          <p className="banner-text">
            Find your pair of prescription eyewear and save on lenses.
          </p>
        </div>

        <div className="right-side">
          <button className="banner-btn filled">SHOP PRESCRIPTION SUNGLASSES</button>
          <button className="banner-btn outlined">SHOP PRESCRIPTION EYEGLASSES</button>
        </div>
      </div>
    </div>
  );
};

export default About;