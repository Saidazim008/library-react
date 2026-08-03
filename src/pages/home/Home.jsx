import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="video-block-container">
      {/* Avtomatik va cheksiz aylanadigan video qatlami */}
      <iframe
        className="background-video"
        src="https://www.youtube.com/embed/Ttm9dKpEc9g?autoplay=1&mute=1&loop=1&playlist=Ttm9dKpEc9g&controls=0&showinfo=0&rel=0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      ></iframe>

      {/* Soya qatlami */}
      <div className="video-shadow-overlay"></div>

      {/* Video ustidagi yozuvlar va tugmalar */}
      <div className="video-text-content">
        <h1 className="video-main-title">CUTTING-EDGE SHOULD <br /> LEAVE A DEEP MARK</h1>
        <p className="video-description">Introducing Scar & Suture Jacket Limited Edition, the first Oakley MUZM collector's set.</p>

        <div className="hero-btn-group">
          <button className="hero-custom-btn hero-btn-white">SHOP NOW</button>
          <button className="hero-custom-btn hero-btn-trans">SHOP SUNGLASSES</button>
        </div>
      </div>
    </div>
  );
};

export default Home;