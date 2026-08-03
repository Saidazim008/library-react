import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './customslider.css';

// Ko'zoynak rasmlari importi
import glasses1 from '../../assets/image copy 2.png';
import glasses2 from '../../assets/image copy 3.png';
import glasses3 from '../../assets/image copy 4.png';
import glasses4 from '../../assets/image copy 5.png';
import glasses5 from '../../assets/image copy 6.png';
import glasses6 from '../../assets/image copy 7.png';
import glasses7 from '../../assets/image copy 8.png';

const CustomSlider = () => {
    // Import qilingan haqiqiy rasmlar obyektga joylashtirildi (tirnoqsiz)
    const products = [
        { id: 1, name: "Custom Radar® Ev 1", img: glasses1 },
        { id: 2, name: "Custom Radar® Ev 2", img: glasses2 },
        { id: 3, name: "Custom Radar® Ev 3", img: glasses3 },
        { id: 4, name: "Custom Radar® Ev 4", img: glasses4 },
        { id: 5, name: "Custom Radar® Ev 5", img: glasses5 },
        { id: 6, name: "Custom Radar® Ev 6", img: glasses6 },
        { id: 7, name: "Custom Radar® Ev 7", img: glasses7 },
    ];

    const [currentIndex, setCurrentIndex] = useState(2);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    };

    const getCardClass = (index) => {
        if (index === currentIndex) return "slide-card active";
        if (index === (currentIndex - 1 + products.length) % products.length) return "slide-card left";
        if (index === (currentIndex + 1) % products.length) return "slide-card right";
        return "slide-card hidden";
    };

    return (
        <div className="custom-section">
            {/* Tepadagi sarlavha */}
            <div className="section-header">
                <h2 className="section-title">CUSTOM</h2>
                <p className="section-subtitle">Personalize your glasses—now available with prescription lenses.</p>
                <button className="view-all-btn">VIEW ALL</button>
            </div>

            {/* Karusel (Faqat rasmlar aylanadi) */}
            <div className="slider-container">
                <button className="arrow-btn prev-btn" onClick={handlePrev}>
                    <FiChevronLeft size={24} />
                </button>

                <div className="slides-wrapper">
                    {products.map((product, index) => (
                        <div key={product.id} className={getCardClass(index)}>
                            <img src={product.img} alt={product.name} className="product-img" />
                        </div>
                    ))}
                </div>

                <button className="arrow-btn next-btn" onClick={handleNext}>
                    <FiChevronRight size={24} />
                </button>
            </div>

            {/* AYLANMAYDIGAN ALOHIDA QISM (Tugma va matn pastda qotib turadi) */}
            <div className="fixed-product-info">
                <h4 className="product-title">{products[currentIndex].name}</h4>
                <button className="shop-now-btn">SHOP NOW</button>
            </div>

            {/* Indikator chiziqchalar */}
            <div className="slider-indicators">
                {products.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator-line ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CustomSlider;