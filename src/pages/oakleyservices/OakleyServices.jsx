import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiShield, FiHome, FiBox, FiCalendar, FiMapPin, FiEye } from 'react-icons/fi';
import './oakleyservices.css';

const servicesData = [
    {
        id: 1,
        // Sokin, yupqa premium chiziqlar uchun strokeWidth={1} qildik
        icon: <FiShield size={46} strokeWidth={1} />,
        title: "USE YOUR FSA/HSA BENEFITS",
        desc: "Many vision insurance benefits expire on 12/31. Make the most of yours."
    },
    {
        id: 2,
        icon: <FiHome size={46} strokeWidth={1} />,
        title: "BUY ONLINE, PICK UP IN STORE",
        desc: "Same-day pick up, perfect for last-minute orders."
    },
    {
        id: 3,
        // Original rasmdagi qaytib kelayotgan quti ikonkasiga yaqinrog'i
        icon: <FiBox size={46} strokeWidth={1} />,
        title: "SHIP FROM STORE",
        desc: "Don't miss out on same-day delivery with our premium service."
    },
    {
        id: 4,
        icon: <FiCalendar size={46} strokeWidth={1} />,
        title: "BOOK AN APPOINTMENT",
        desc: "Get all the help you need from our in-store crew."
    },
    {
        id: 5,
        icon: <FiMapPin size={46} strokeWidth={1} />,
        title: "FIND IN STORE",
        desc: "Check if your items are available at an Oakley store near you."
    },
    {
        id: 6,
        icon: <FiEye size={46} strokeWidth={1} />,
        title: "FRAME ADVISOR",
        desc: "Find your perfect fit with personalized frame recommendations."
    }
];

const OakleyServices = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Katta ekranda birdaniga 3ta karta ko'rinadi
    const maxIndex = servicesData.length - 3;

    const nextSlide = () => {
        if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
    };

    const prevSlide = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    return (
        <div className="oakley-services-section">
            <div className="services-slider-container">

                {/* CHAP TOMONDAGI STRELKA (Faqat kerak bo'lganda chiqadi) */}
                {currentIndex > 0 && (
                    <button className="main-slider-arrow left-arrow" onClick={prevSlide} aria-label="Previous slide">
                        <FiChevronLeft size={22} color="#fff" />
                    </button>
                )}

                {/* KARTALAR KO'RINADIGAN OYNA */}
                <div className="services-track-viewport">
                    <div
                        className="services-slider-track"
                        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                    >
                        {servicesData.map((item) => (
                            <div key={item.id} className="service-card-item">
                                <div className="card-inner-content">

                                    {/* 🎯 Ikonka - Klasini o'zgartirdik, CSS orqali uni mutloq O'NG BURCHAKKA olamiz */}
                                    <div className="service-card-icon-right">
                                        {item.icon}
                                    </div>

                                    {/* 🎯 Matnlar - Klasini o'zgartirdik, CSS orqali PASTGA taqaymiz */}
                                    <div className="service-card-info-bottom">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* O'NG TOMONDAGI STRELKA */}
                {currentIndex < maxIndex && (
                    <button className="main-slider-arrow right-arrow" onClick={nextSlide} aria-label="Next slide">
                        <FiChevronRight size={22} color="#fff" />
                    </button>
                )}

            </div>
        </div>
    );
};

export default OakleyServices;