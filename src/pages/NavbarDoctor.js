import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/NavbarDoctor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faPhone,
  faInfoCircle,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";

const NavbarDoctor = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Optionally, you can define closeMenu to close the menu when a link is clicked.
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-doctor">
      <div className="navbar-top">
      <div className="logo11">
  <img src="/images/logo1.png" alt="KiteCare Logo" className="logo-image" />
</div>

        {/* Mobile menu toggle button */}
        <button onClick={toggleMenu} className="menu-toggle">
          {isMenuOpen ? (
            <i className="fas fa-times"></i> // Close icon when menu is open
          ) : (
            <i className="fas fa-bars"></i> // Hamburger icon when menu is closed
          )}
        </button>

        {/* Navbar links */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
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

      {/* Third Row */}
      <div className="meet-doctors">
        <h1>Meet Our Doctors</h1>
      </div>

      {/* Fourth Row */}
      <div className="doctors-info">
        <p>
          Our highly experienced team of doctors, surgeons, transplant surgeons,
          physicians, critical care and emergency medicine specialists, nursing
          and support staff across all specialties provide personalized care
          and comprehensive treatment.
        </p>
      </div>

      {/* Bottom Icons */}
      <div className="bottom-icons125">
        <Link to="/events" className="info-item125">
          <div className="icon-circle125">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <span>Events</span>
        </Link>
        <Link to="/contact-us" className="info-item125">
          <div className="icon-circle125">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <span>Contact Us</span>
        </Link>
        <Link to="/about" className="info-item125">
          <div className="icon-circle125">
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <span>About</span>
        </Link>
        <Link to="/health-information" className="info-item125">
          <div className="icon-circle125">
            <FontAwesomeIcon icon={faHeartbeat} />
          </div>
          <span>Health Information</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarDoctor;
