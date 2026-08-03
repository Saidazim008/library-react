import React from 'react';
import './blakman.css';

const Blakman = () => {
    return (
        <div className="jaylen-banner-container">
            {/* Ichki kontentlarni chiroyli joylash uchun wrapper */}
            <div className="jaylen-banner-content">

                {/* Chap tomondagi matnlar qismi */}
                <div className="jaylen-text-section">
                    <h1 className="jaylen-title">
                        WELCOME TO <br />
                        JAYLENTOPIA
                    </h1>
                    <p className="jaylen-subtitle">
                        Explore apparel and accessories from Jaylen Brown’s first signature collection.
                    </p>
                </div>

                {/* O'ng tomondagi tugma qismi */}
                <div className="jaylen-action-section">
                    <button className="jaylen-shop-btn">
                        SHOP COLLECTION
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Blakman;