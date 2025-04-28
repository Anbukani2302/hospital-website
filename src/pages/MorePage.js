import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/MorePage.css";  // Custom CSS for the MorePage

const MorePage = () => {
  return (
    <div className="morepage-container">
      <h1 className="title">Our Healthcaring Journey - More Details</h1>

      <section className="section mission">
        <h2>Our Mission</h2>
        <p>Our mission is to provide exceptional healthcare services that enhance the quality of life for our patients...</p>
      </section>

      <section className="section vision">
        <h2>Our Vision</h2>
        <p>Our hospital's vision is to provide accessible, affordable, and compassionate care to everyone...</p>
      </section>

      <section className="section services">
        <h2>Our Services</h2>
        <p>We offer a wide range of services, including preventive care, emergency care, specialized treatments, and more...</p>
      </section>

      <section className="section staff">
        <h2>Meet Our Team</h2>
        <p>Our expert team of doctors, nurses, and healthcare professionals are dedicated to providing top-quality care...</p>
      </section>

      <section className="section patient-stories">
        <h2>Patient Stories</h2>
        <p>Read inspiring patient stories and testimonials about their journey with us...</p>
      </section>

      <section className="section community">
        <h2>Community Involvement</h2>
        <p>We are committed to our community, offering free health screenings and community outreach programs...</p>
      </section>

      
    </div>
  );
};

export default MorePage;
