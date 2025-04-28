import React from "react";
import "../CSS/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer container with one row and five columns */}
      <div className="footer-row">
        {/* Column 1 */}
        <div className="footer-column">
        <img src="/images/logo1.png" alt="Logo" className="logo-image" />
        <p className="footer-text">
            This free App provides a solution to your health needs by offering
            you a one-stop access to complete information about various medical
            checkups. This App carries simple tips and advice to help you
            maintain a healthy lifestyle.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h2 className="footer-heading">Overview</h2>
          <ul className="footer-links">
            <li>Checking Health</li>
            <li>Find Doctor</li>
            <li>Make a Schedule</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h2 className="footer-heading">Company</h2>
          <ul className="footer-links">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h2 className="footer-heading">Explore</h2>
          <ul className="footer-links">
            <li>Terms & Conds</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="footer-column">
          <h2 className="footer-heading">Social Media</h2>
          <div className="footer-icons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
