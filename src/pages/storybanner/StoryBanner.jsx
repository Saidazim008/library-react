import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './storybanner.css';

// Kichkina kartochkalar uchun rasmlar
import avatar1 from '../../assets/image copy 2.png';
import avatar2 from '../../assets/image copy 3.png';

const stories = [
    {
        id: 0,
        title: 'META VANGUARD',
        videoId: 'eGTRr5Dp08Q',
        mainTitle: 'OAKLEY META VANGUARD',
        desc: '“Hey Meta, Take a Video”. Athletic Intelligence is officially here.',
        duration: 7000
    },
    {
        id: 1,
        title: 'KYLIANTOPIA',
        videoId: 'tVWHAz9G7Uo',
        mainTitle: 'OAKLEY | KYLIANTOPIA',
        desc: 'Explore the future of performance with Kylian Mbappé.',
        duration: 7000
    },
    {
        id: 2,
        title: 'META HSTN',
        videoId: 'txZR7yzWR8I',
        mainTitle: 'OAKLEY META HSTN',
        desc: '“Hey Meta, Take a Photo”. Gabriel Medina surfing the next wave.',
        duration: 7000
    },
    {
        id: 3,
        title: 'OUR ORIGINS',
        videoId: 'ylDu1Jq980Q',
        mainTitle: 'OUR ORIGINS RIDE WITH US',
        desc: 'Uncompromising speed and legacy. This is where it all started.',
        duration: 7000
    }
];

const StoryBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    // Tepadagi progress barlarni sekin to'ldirish va avtomatik o'tish logikasi
    useEffect(() => {
        setProgress(0);
        const currentDuration = stories[activeIndex].duration;
        const intervalTime = 50;
        const step = (intervalTime / currentDuration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
                    return 0;
                }
                return prev + step;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [activeIndex]);

    const activeStory = stories[activeIndex];

    return (
        <div className="story-banner-container">

            {/* BACKGROUND YOUTUBE IFRAME GENERATOR */}
            <div className="story-video-background">
                {stories.map((story) => (
                    <iframe
                        key={story.id}
                        className={`story-iframe-element ${story.id === activeIndex ? 'is-visible' : ''}`}
                        /* JIGAR: Bu yerda hamma videolarga srazu autoplay=1 berildi, brauzer hammasini fonda birdan chalib yuboradi */
                        src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1&mute=1&loop=1&playlist=${story.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1`}
                        title={story.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                ))}
            </div>

            {/* TEPADAGI 4 TA NAVBATMA-NAVBAT TO'LUVCHI CHIZIQ */}
            <div className="story-tabs-wrapper">
                {stories.map((story) => {
                    let width = '0%';
                    if (story.id < activeIndex) width = '100%';
                    if (story.id === activeIndex) width = `${progress}%`;

                    return (
                        <div
                            key={story.id}
                            className={`story-tab-item ${story.id === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(story.id)}
                        >
                            <span className="story-tab-title">{story.title}</span>
                            <div className="story-progress-bg">
                                <div className="story-progress-fill" style={{ width }} />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ASOSIY MATNLAR VA TUGMALAR MATRICASI */}
            <div className="story-content-layer">
                <div className="story-left-block">
                    <h1 className="story-main-heading">{activeStory.mainTitle}</h1>
                    <p className="story-description">{activeStory.desc}</p>
                    <button className="story-discover-btn">
                        DISCOVER MORE <FiArrowRight className="arrow-icon" />
                    </button>
                </div>

                {/* PASTKI CHAP BURCHAKDAGI MAHSULOT KARTALARI */}
                <div className="story-bottom-products">
                    <div className="product-mini-card">
                        <img src={avatar1} alt="product" />
                        <div className="card-info">
                            <h4>Lateralis Fabio Qu...</h4>
                            <p>$217.00</p>
                        </div>
                    </div>
                    <div className="product-mini-card">
                        <img src={avatar2} alt="product" />
                        <div className="card-info">
                            <h4>HSTN SQ MotoGP...</h4>
                            <p>$207.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryBanner;