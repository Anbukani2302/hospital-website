import React, { useState } from "react";
import "../CSS/Navbar.css"; // External CSS file for styling
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import {
  faCalendarAlt,
  faPhone,
  faInfoCircle,
  faHeartbeat,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // State for managing mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="navbar">
       <div className="navbar-top">
       <div className="logo11">
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
          <button className="call-us-btns11">Call Us +91 9876543210</button>
        </nav>
      </div>


      {/* New Row for Additional Links */}
      <div className="navbar-links-row">
        <ul className="links-list">
          <li><Link to="/find-a-doctor">Find a Doctor</Link></li>
          <li><Link to="/specialists">Explore the Specialists</Link></li>
        </ul>
      </div>

      {/* Centered Content */}
      <div className="center-content">
        <h1 className="main-heading">
          Medical Care Now <br /> Simplified For Everyone!
        </h1>
        <button className="appointment-button">
          Book an Appointment
          <span className="clock-icon">
            <FontAwesomeIcon icon={faClock} />
          </span>
        </button>
      </div>

      <div className="bottom-icons1">
        <Link to="/events" className="info-item1">
          <div className="icon-circle1">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <span>Events</span>
        </Link>
        <Link to="/contact-us" className="info-item1">
          <div className="icon-circle1">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <span>Contact Us</span>
        </Link>
        <Link to="/about" className="info-item1">
          <div className="icon-circle1">
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <span>About</span>
        </Link>
        <Link to="/health-information" className="info-item1">
          <div className="icon-circle1">
            <FontAwesomeIcon icon={faHeartbeat} />
          </div>
          <span>Health Information</span>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
