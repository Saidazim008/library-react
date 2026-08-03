import React from 'react';
import './golfbanner.css';

const GolfBanner = () => {
  return (
    <div className="golf-banner-container">
      {/* JIGAR: Orqa fondagi YouTube Iframe videoroligi */}
      <div className="golf-video-background">
        <iframe 
          src="https://www.youtube.com/embed/AsQ_8_oQ188?autoplay=1&mute=1&loop=1&playlist=AsQ_8_oQ188&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3" 
          title="Oakley Meta Vanguard | Athletic Intelligence is here" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Rasm ustidagi matnlar va tugmalar qatlami */}
      <div className="golf-banner-content">
        
        {/* Chap tomondagi matnlar qismi */}
        <div className="golf-left-section">
          <h1 className="golf-title">
            THE GRIND STAYED, <br />
            THE GAME CHANGED.
          </h1>
          <p className="golf-subtitle">
            Performance eyewear and apparel from the new Golf Collection.
          </p>
        </div>

        {/* O'ng tomondagi ikkita tugma qismi */}
        <div className="golf-right-section">
          <button className="golf-btn transparent-btn">
            SHOP COLLECTION
          </button>
          <button className="golf-btn transparent-btn">
            VIEW ALL SUNGLASSES
          </button>
        </div>

      </div>
    </div>
  );
};

export default GolfBanner;