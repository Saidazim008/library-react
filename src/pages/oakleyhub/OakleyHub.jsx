import React from 'react';
import house from "../../assets/image copy 11.png";
import './oakleyhub.css';

const OakleyHub = () => {
    return (
        <div className="oakley-hub-section">

            {/* 1. Sening rasming */}
            <img src={house} alt="Oakley Hub" className="img-house" />

            {/* 2. Orqadagi qoramtir soya (Matnlar va tugma yaxshi ko'rinishi uchun) */}
            <div className="hub-overlay-gradient"></div>

            {/* 3. Chap burchakdagi tikka HELP bedji
            <div className="hub-help-sidebar">
                <div className="hub-help-badge">
                    <span className="hub-badge-icon">💬</span>
                    <span className="hub-badge-text">HELP?</span>
                </div>
            </div> */}

            {/* 4. Pastki asosiy kontent (Matnlar va Meta tugmasi) */}
            <div className="hub-content-footer">

                {/* Chap tomondagi matnlar */}
                <div className="hub-text-info">
                    <h2 className="hub-main-title">OAKLEY 360 HUB</h2>
                    <p className="hub-sub-title">Get full visibility on everything Oakley.</p>
                </div>

                {/* O'ng tomondagi Meta tugmasi */}
                <div className="hub-action-wrapper">
                    <button className="btn-enter-experience">
                        ENTER THE EXPERIENCE
                    </button>

                    {/* Dumaloq ichidagi ko'k cheksizlik (Meta) logotipi */}
                    {/* <div className="meta-logo-circle">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="meta-svg">
                            <path d="M16.5 6C14.28 6 12.63 7.37 12 8.35C11.37 7.37 9.72 6 7.5 6C4.46 6 2 8.46 2 11.5C2 14.54 4.46 17 7.5 17C9.72 17 11.37 15.63 12 14.65C12.63 15.63 14.28 17 16.5 17C19.54 17 22 14.54 22 11.5C22 8.46 19.54 6 16.5 6ZM7.5 15C5.57 15 4 13.43 4 11.5C4 9.57 5.57 8 7.5 8C9.07 8 10.15 9.17 10.63 9.94C10.74 10.12 10.74 10.35 10.61 10.51C9.88 11.45 8.78 12.42 7.74 12.42C7.33 12.42 7 12.09 7 11.68C7 11.12 7.42 10.75 7.85 10.43C8.16 10.2 8.5 10 8.5 9.5C8.5 9.22 8.28 9 8 9C7.17 9 6.5 9.67 6.5 10.5C6.5 11.88 7.62 13 9 13C10.05 13 10.97 12.23 11.5 11.5C11.31 11.94 10.64 13 9.5 13C8.5 13 7.5 14.05 7.5 15ZM16.5 15C15.36 15 14.69 13.94 14.5 11.5C15.03 12.23 15.95 13 17 13C18.38 13 19.5 11.88 19.5 10.5C19.5 9.67 18.83 9 18 9C17.72 9 17.5 9.22 17.5 9.5C17.5 10 17.84 10.2 18.15 10.43C18.58 10.75 19 11.12 19 11.68C19 12.09 18.67 12.42 18.26 12.42C17.22 12.42 16.12 11.45 15.39 10.51C15.26 10.35 15.26 10.12 15.37 9.94C15.85 9.17 16.93 8 18.5 8C20.43 8 22 9.57 22 11.5C22 13.43 20.43 15 16.5 15Z" fill="url(#metaHubGradient)" />
                            <defs>
                                <linearGradient id="metaHubGradient" x1="2" y1="11.5" x2="22" y2="11.5" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#2B7FFF" />
                                    <stop offset="100%" stopColor="#00D4FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default OakleyHub;