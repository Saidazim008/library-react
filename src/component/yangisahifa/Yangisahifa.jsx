import React from 'react';
import rasim from "../../assets/image copy.png";
import "./yangisahifa.css";

const Yangisahifa = () => {
  return (
    <div className="banner-container">
      {/* Orqa fondagi rasm */}
      <img className="banner-img" src={rasim} alt="Banner" />

      {/* Rasm ustidagi qatlam */}
      <div className="banner-content">
        <div className="left-side">
          <h1 className="banner-title">
            MADE FOR WHEN THE <br />
            WORLD IS WATCHING
          </h1>
          <p className="banner-text">
            Discover Kylian Mbappé's Signature Series and the Players Collection.
          </p>
        </div>

        <div className="right-sida">
          <button className="banner-btn">SHOP COLLECTION</button>
          <button className="banner-btn">SHOP SUNGLASSES</button>
        </div>
      </div>
    </div>
  );
};

export default Yangisahifa;