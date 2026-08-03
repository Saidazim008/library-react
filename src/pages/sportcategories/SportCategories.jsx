import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './sportcategories.css';

// Sport turlarining rasmlari importi
import imgCycling from '../../assets/image copy 2.png';
import imgBaseball from '../../assets/image copy 3.png';
import imgGolf from '../../assets/image copy 4.png';
import imgRunning from '../../assets/image copy 5.png';
import imgSnow from '../../assets/image copy 6.png';
import imgGaming from '../../assets/image copy 7.png';
import imgFootball from '../../assets/image copy 8.png';
import imgTraining from '../../assets/image copy 9.png'; // Siz olib kelgan yangi rasm shu yerga ulandi!

const SportCategories = () => {
    // Sahifa ochilganda CYCLING katagi avtomatik aktiv turadi
    const [hoveredSport, setHoveredSport] = useState('CYCLING');

    const categories = [
        { name: 'CYCLING', img: imgCycling },
        { name: 'BASEBALL', img: imgBaseball },
        { name: 'GOLF', img: imgGolf },
        { name: 'RUNNING', img: imgRunning },
        { name: 'SNOW', img: imgSnow },
        { name: 'GAMING', img: imgGaming },
        { name: 'FOOTBALL', img: imgFootball },
        { name: 'TRAINING', img: imgTraining }, // Endi barcha 8 ta katakda rasm bor
    ];

    return (
        <div
            className="sport-section-container"
            onMouseLeave={() => setHoveredSport(null)} // Cursor butunlay chiqib ketganda rasmlar silliq yo'qoladi
        >
            {/* TEPADAGI SARLAVHA QISMI */}
            <div className="sport-top-header">
                <h2 className="sport-main-title">Sport</h2>
                <div className="sport-pause-icon">║</div>
            </div>

            {/* 2 TA USTUNLI KATAKLAR TIZIMI */}
            <div className="sport-grid-container">
                {categories.map((sport) => (
                    <div
                        key={sport.name}
                        className={`sport-grid-item ${hoveredSport === sport.name ? 'is-active' : ''}`}
                        onMouseEnter={() => setHoveredSport(sport.name)}
                    >
                        <div className="sport-item-text-group">
                            <span className="sport-item-name">{sport.name}</span>
                        </div>

                        {/* Rasm va strelka bitta wrapperda, mutloq o'ng tomonda tekis joylashadi */}
                        <div className="sport-item-action-wrapper">
                            <div className="sport-image-popup-container">
                                {sport.img && (
                                    <img src={sport.img} alt={sport.name} className="sport-popup-actual-img" />
                                )}
                            </div>
                            <FiArrowRight className="sport-popup-arrow-icon" size={24} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SportCategories;