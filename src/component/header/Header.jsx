import React, { useState, useEffect } from 'react';
import { FiHeart, FiSearch, FiUser, FiShoppingBag, FiMenu } from 'react-icons/fi';
import './header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Sunglasses', isSale: false },
    { name: 'AI Glasses', isSale: false },
    { name: 'Prescription', isSale: false },
    { name: 'Custom', isSale: false },
    { name: 'Spare Lenses', isSale: false },
    { name: 'Apparel', isSale: false },
    { name: 'Accessories', isSale: false },
    { name: 'Shoes', isSale: false },
    { name: 'Bags', isSale: false },
    { name: 'Sports', isSale: false },
    { name: 'Sale', isSale: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setIsScrolled(false);
        return;
      }
      setIsScrolled(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isScrolled && <div className="header-placeholder"></div>}

      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>

        {/* 1. CHAP TARAFI */}
        <div className="header-left">
          <div className="logo-link">
            <svg width="48" height="24" viewBox="0 0 100 50" fill="currentColor">
              <path d="M50 5C22.4 5 0 14 0 25s22.4 20 50 20 50-9 50-20S77.6 5 50 5zm0 28c-13.8 0-25-3.6-25-8s11.2-8 25-8 25 3.6 25 8-11.2 8-25 8z" fill="#111111" />
            </svg>
          </div>
          <button className="menu-button">
            <FiMenu size={26} strokeWidth={2.5} />
          </button>
        </div>

        {/* 2. O'RTA TARAFI */}
        <div className="header-middle">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.name.toLowerCase().replace(' ', '-')}`}
              className={`nav-item ${item.isSale ? 'sale' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* 3. O'NG TARAFI */}
        <div className="header-right">
          <button className="icon-button">
            <FiHeart size={22} strokeWidth={2} />
          </button>
          <button className="icon-button">
            <FiSearch size={22} strokeWidth={2} />
          </button>
          <button className="icon-button">
            <FiUser size={22} strokeWidth={2} />
          </button>
          <button className="icon-button">
            <FiShoppingBag size={22} strokeWidth={2} />
          </button>
        </div>

      </header>
    </>
  );
};

export default Header;