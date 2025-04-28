import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/HealthNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPhone, faInfoCircle, faHeartbeat } from '@fortawesome/free-solid-svg-icons';


const HealthNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a nav link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="event-navbar">
      <div className="navbar-top">
      <div className="logo1">
  <img src="/images/logo1.png" alt="KiteCare Logo" className="logo-image" />
</div>

        {/* Mobile menu toggle button */}
        <button onClick={toggleMenu} className="menu-toggle">
          {isMenuOpen ? (
            <i className="fas fa-times"></i>  // Close icon when menu is open
          ) : (
            <i className="fas fa-bars"></i>  // Hamburger icon when menu is closed
          )}
        </button>

        {/* Navbar links */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/our-doctor" className="nav-link" onClick={closeMenu}>Our Doctor</Link>
          <Link to="/our-specialists" className="nav-link" onClick={closeMenu}>Our Specialists</Link>
          <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
        </div>

        <nav className="navbar-links1">
          <Link to="/emergency">
            Emergency <i className="fas fa-arrow-right"></i>
          </Link>
          <button className="call-us-btns">Call Us +91 9876543210</button>
        </nav>
      </div>

      {/* Navbar Links Row */}
      <div className="navbar-links-row">
        <ul className="links-list">
          <li><Link to="/find-a-doctor">Find a Doctor</Link></li>
          <li><Link to="/specialists">Explore the Specialists</Link></li>
        </ul>
      </div>

      {/* Help and Event Text */}
      <div className="navbar-help-text">
        <h1>Health Information</h1>
      </div>

      <div className="navbar-event-details">
        <p>Our Health information will help you stay up to date on what is happening in health care. We bring you news/information/perspectives around health care innovations, preventive medicine, early diagnosis, nutrition and diet, women’s health, men’s health, children’s health, latest technologies, treatments and surgeries, diseases and conditions, fitness and more.</p>
      </div>
       {/* Bottom Icons */}
       <div className="bottom-icons12">
        <Link to="/events" className="info-item12">
          <div className="icon-circle12">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <span>Events</span>
        </Link>
        <Link to="/contact-us" className="info-item12">
          <div className="icon-circle12">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <span>Contact Us</span>
        </Link>
        <Link to="/about" className="info-item12">
          <div className="icon-circle12">
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <span>About</span>
        </Link>
        <Link to="/health-information" className="info-item12">
          <div className="icon-circle12">
            <FontAwesomeIcon icon={faHeartbeat} />
          </div>
          <span>Health Information</span>
        </Link>
      </div>
    </div>
  );
};

export default HealthNavbar;
