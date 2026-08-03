import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok
} from 'react-icons/fa';
import {
  FiX,
  FiHelpCircle,
  FiMessageCircle,
  FiBox,
  FiTruck,
  FiMapPin,
  FiShield
} from 'react-icons/fi';
import './footer.css'; // CSS fayling nomini to'g'rilab olasan

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="oakley-main-footer">

      {/* ─── TEPADAGI EMAIL VA IJTIMOIY TARMOQLAR ─── */}
      <div className="footer-top-bar">
        <div className="footer-newsletter-box">
          <label htmlFor="footer-email">Join our community and stay up to date:</label>
          <form onSubmit={handleSubmit} className="footer-email-form">
            <input
              type="email"
              id="footer-email"
              placeholder="*Email Address"
              required
            />
            <button type="submit" className="btn-signup">SIGN UP</button>
          </form>
        </div>

        <div className="footer-socials-box">
          <span className="socials-title">Follow Us</span>
          <div className="social-icons-list">
            <a href="#" className="social-icon-link" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="social-icon-link" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="social-icon-link" aria-label="X"><FiX /></a>
            <a href="#" className="social-icon-link" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" className="social-icon-link" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* ─── O'RTADAGI ASOSIY MENYULAR VA HELP CARD ─── */}
      <div className="footer-main-content">

        {/* We're Here To Help oq qutisi */}
        <div className="footer-help-card">
          <h3>We're Here To Help:</h3>
          <ul className="help-links-list">
            <li><FiHelpCircle className="help-icon" /> <a href="#">Help Center</a></li>
            <li><FiMessageCircle className="help-icon" /> <a href="#">FAQ's</a></li>
            <li><FiBox className="help-icon" /> <a href="#">Order status</a></li>
            <li><FiTruck className="help-icon" /> <a href="#">Shipping & returns policy</a></li>
          </ul>
        </div>

        {/* 3 Ustunli menyular gridi */}
        <div className="footer-menus-grid">
          <div className="footer-menu-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Product Care</a></li>
              <li><a href="#">Shopping Support</a></li>
              <li><a href="#">Shipping & Returns Policy</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Size Chart</a></li>
              <li><a href="#">Insurance and Benefits</a></li>
              <li><a href="#">Purchase Care</a></li>
              <li><a href="#">HIPAA Notice</a></li>
              <li><a href="#">AI Glasses FAQ</a></li>
            </ul>
          </div>

          <div className="footer-menu-column">
            <h4>Company Info</h4>
            <ul>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Bulk Orders and Gifting</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
            <h4 className="menu-sub-heading">Shop by</h4>
            <ul>
              <li><a href="#">Sunglasses</a></li>
              <li><a href="#">Sport Sunglasses</a></li>
              <li><a href="#">Prescription Eyeglasses</a></li>
              <li><a href="#">Prescription Sunglasses</a></li>
              <li><a href="#">Snow Goggles</a></li>
              <li><a href="#">Custom</a></li>
              <li><a href="#">Oakley Meta</a></li>
              <li><a href="#">Special Offers</a></li>
            </ul>
          </div>

          <div className="footer-menu-column">
            <h4>Premium Services</h4>
            <ul>
              <li><a href="#">View All Services</a></li>
              <li><a href="#">Oakley Store Finder and Store Map</a></li>
              <li><a href="#">Book an Appointment</a></li>
              <li><a href="#">Book an Eye Exam</a></li>
              <li><a href="#">Find Your Perfect Frames</a></li>
              <li><a href="#">Refer a Friend and get a benefit</a></li>
            </ul>
            <h4 className="menu-sub-heading">Gift Card</h4>
            <ul>
              <li><a href="#">Buy a Gift Card</a></li>
              <li><a href="#">Check Balance</a></li>
            </ul>
          </div>
        </div>

      </div>

      <hr className="footer-divider spacing-top" />

      {/* ─── PASSDAGI SUB-FOOTER (LOKATSIYA VA BADGE'LAR) ─── */}
      <div className="footer-sub-bottom-bar">

        <div className="sub-footer-left">
          <div className="location-selector-box">
            <FiMapPin className="pin-icon" />
            <span>United States</span>
          </div>
        </div>

        <div className="sub-footer-right">
          <div className="perk-badge unidays-badge">
            <span className="unidays-bold">UNiDAYS</span>
            <span className="perk-subtext">Student Perks</span>
          </div>
          <div className="perk-badge oakley-issue-badge">
            <span className="oakley-issue-title"><FiShield size={10} /> OAKLEY STANDARD ISSUE</span>
            <span className="perk-subtext">Oakley For Military and First Responders</span>
          </div>
        </div>

      </div>

      {/* ─── ENG PASSDAGI LEGAL LINKLAR VA COPYRIGHT ─── */}
      <div className="footer-legal-links-row">
        <div className="legal-links-wrap">
          <a href="#">Terms & Conditions</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy & Security</a>
          <a href="#">California Collection Notice</a>
          <a href="#">Consumer Health Data Privacy Policy</a>
          <a href="#">Report Counterfeits</a>
          <a href="#">Intellectual Property</a>
          <a href="#">User Generated Content</a>
          <a href="#">Do not sell my personal information</a>
          <a href="#">AdChoices</a>
          <a href="#">Cookie Policy</a>
          <a href="#" className="underline-link">Financial Incentives Notice</a>
        </div>

        <div className="copyright-info-text">
          <span>Copyright ©2024 Oakley, Inc. All Rights Reserved.</span>
          <span className="web-id">WebID: 283 169 316</span>
          <span className="group-site-select">Other Group Sites ▾</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;