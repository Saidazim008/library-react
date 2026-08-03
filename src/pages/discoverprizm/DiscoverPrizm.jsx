import React, { useState } from 'react';
import { FiChevronRight, FiShield, FiHome, FiTruck, FiCalendar, FiMapPin, FiEye } from 'react-icons/fi';
import { FaPause, FaPlay } from 'react-icons/fa';
import './discoverprizm.css';

// Har bir tab uchun o'ziga tegishli 3 tadan karta ma'lumotlari (Rasmda ko'rsatganingdek)
const prizmTabsData = [
    {
        id: 0,
        title: 'ROAD',
        services: [
            { id: 1, icon: <FiShield size={38} strokeWidth={1.5} />, title: "USE YOUR FSA/HSA BENEFITS", desc: "Many vision insurance benefits expire on 12/31. Make the most of yours." },
            { id: 2, icon: <FiHome size={38} strokeWidth={1.5} />, title: "BUY ONLINE, PICK UP IN STORE", desc: "Same-day pick up, perfect for last-minute orders." },
            { id: 3, icon: <FiTruck size={38} strokeWidth={1.5} />, title: "SHIP FROM STORE", desc: "Don't miss out on same-day delivery with our premium service." }
        ]
    },
    {
        id: 1,
        title: 'EVERYDAY',
        services: [
            { id: 4, icon: <FiCalendar size={38} strokeWidth={1.5} />, title: "BOOK AN APPOINTMENT", desc: "Get all the help you need from our in-store crew." },
            { id: 5, icon: <FiMapPin size={38} strokeWidth={1.5} />, title: "FIND IN STORE", desc: "Check if your items are available at an Oakley store near you." },
            { id: 6, icon: <FiEye size={38} strokeWidth={1.5} />, title: "FRAME ADVISOR", desc: "Find your perfect fit with personalized frame recommendations." }
        ]
    },
    {
        id: 2,
        title: 'FIELD',
        services: [
            { id: 7, icon: <FiEye size={38} strokeWidth={1.5} />, title: "VIRTUAL TRY-ON", desc: "Pick out your perfect pair with our virtual try-on tool." },
            { id: 8, icon: <FiTruck size={38} strokeWidth={1.5} />, title: "FREE SHIPPING OVER $50", desc: "Enjoy your items — we'll take care of the rest." },
            { id: 9, icon: <FiShield size={38} strokeWidth={1.5} />, title: "OAKLEY WARRANTY", desc: "Our products are backed by a comprehensive warranty policy." }
        ]
    }
];

const DiscoverPrizm = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <div className="prizm-banner-container">

            {/* 1. ORQA FONDAGI REKLAMA VIDEOSI (Qotmaydigan optimizatsiya qilingan holatda) */}
            <div className="prizm-video-wrapper">
                <iframe
                    src="https://www.youtube.com/embed/Z7FOWvRXlO0?autoplay=1&mute=1&loop=1&playlist=Z7FOWvRXlO0&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
                    title="OAKLEY PRIZM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>

            {/* 2. KO'ZOYNAK LINZASI SHAKLI (1:1 ORIGINAL KONTUR) */}
            <div className="prizm-lens-layer">
                <div className="lens-outline-shape"></div>
            </div>

            {/* 3. TEPADAGI ASOSIY MATN */}
            <div className="prizm-header-title">
                DISCOVER PRIZM™
            </div>

            {/* 4. MARKAZDAGI SHOP NOW TUGMALARI */}
            <div className="prizm-center-buttons">
                <button className="btn-prizm-shop">SHOP NOW</button>
                <button className="btn-prizm-discover">DISCOVER MORE</button>
            </div>

            {/* 5. INTERAKTIV KARTALAR BLOKI (Bo'lim o'zgarganda faqat matnlar silliq almashadi) */}
            <div className="prizm-cards-overlay-container">
                <div className="prizm-cards-grid">
                    {prizmTabsData[activeIndex].services.map((item) => (
                        <div key={item.id} className="prizm-interactive-card">

                            {/* Ikonka skrinshotdagidek o'ng tomonga yopishgan */}
                            <div className="prizm-card-icon-top-right">
                                {item.icon}
                            </div>

                            {/* Sarlavha va matnlar mutloq markazda (o'rtada) */}
                            <div className="prizm-card-body-centered">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>

                            {/* Sichqoncha borganda chiqadigan o'ngga o'tkazish strelkasi */}
                            <div className="prizm-card-hover-arrow">
                                <div className="arrow-circle-next">
                                    <FiChevronRight size={18} color="#fff" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* 6. PASTKI TABS CHIZIG'I PANEL (ROAD, EVERYDAY, FIELD — TO'LIQ O'RTADA TURADI) */}
            <div className="prizm-footer-bar">

                {/* CHAP BURCHAKDAGI HELP BEDJI */}
                <div className="prizm-help-section">
                    <div className="prizm-help-badge">
                        <span className="badge-icon">💬</span>
                        <span className="badge-text">HELP?</span>
                    </div>
                </div>

                {/* MARKAZDAGI BO'LIMLAR (ROAD, EVERYDAY, FIELD) - ENDI MUTLOQ SENTRDA O'RTADA TURADI */}
                <div className="prizm-tabs-group">
                    {prizmTabsData.map((tab) => (
                        <div
                            key={tab.id}
                            className={`prizm-tab-item ${tab.id === activeIndex ? 'is-active' : ''}`}
                            onClick={() => setActiveIndex(tab.id)}
                        >
                            <span className="tab-item-text">{tab.title}</span>
                        </div>
                    ))}
                </div>

                {/* O'NG BURCHAKDAGI PAUSE TUGMASI */}
                <div className="prizm-action-media">
                    <div className="outer-media-circle" onClick={() => setIsPlaying(!isPlaying)}>
                        <div className="inner-media-circle">
                            {isPlaying ? <FaPause size={9} color="#fff" /> : <FaPlay size={9} color="#fff" />}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DiscoverPrizm;