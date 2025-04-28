import React from 'react';
import '../CSS/ServiceCard.css';

const ServiceCard = () => {
  return (
    <div className="services-section">
      <h2>Our Healthcare Services</h2>
      <p>Explore the wide range of healthcare services provided at KiteCare, all designed to meet your medical needs with expertise and compassion.</p>

      <div className="services-cards-container">
        {/* Service 1 */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Primary Care</h3>
              <p>Routine check-ups, preventive care, and overall wellness assessments to keep you healthy.</p>
            </div>
            <div className="card-back">
              <h4>Why Choose Primary Care?</h4>
              <p>Comprehensive care for all ages, preventive services, and ongoing health management.</p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Emergency Care</h3>
              <p>Immediate care for urgent injuries, heart attacks, strokes, and more. Available 24/7.</p>
            </div>
            <div className="card-back">
              <h4>Emergency Services</h4>
              <p>Quick, expert care in urgent medical situations, available any time of day or night.</p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Diagnostics</h3>
              <p>We offer a range of diagnostic services, including X-ray scans, MRIs, CT scans, and laboratory tests.</p>
            </div>
            <div className="card-back">
              <h4>Why Diagnostics Matter</h4>
              <p>Precise diagnostic services help identify conditions early for timely and accurate treatments.</p>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Specialist Consultations</h3>
              <p>Consult with experts in cardiology, neurology, orthopedics, dermatology, and more.</p>
            </div>
            <div className="card-back">
              <h4>Expert Advice</h4>
              <p>Get specialized care from doctors who are experts in specific areas of medicine.</p>
            </div>
          </div>
        </div>

        {/* Service 5 */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Surgical Services</h3>
              <p>From minor procedures to major surgeries, we have the experience and expertise to provide the care you need.</p>
            </div>
            <div className="card-back">
              <h4>Surgical Excellence</h4>
              <p>State-of-the-art equipment and experienced surgeons for your surgical needs.</p>
            </div>
          </div>
        </div>

        {/* Service 6 */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Mental Health Services</h3>
              <p>Therapy, counseling, and psychiatric services to help you manage mental health and emotional well-being.</p>
            </div>
            <div className="card-back">
              <h4>Supporting Your Mind</h4>
              <p>Confidential mental health services for emotional support and guidance during tough times.</p>
            </div>
          </div>
        </div>

        {/* Service 7 */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Rehabilitation & Physiotherapy</h3>
              <p>Recover from injury or surgery with physical therapy and rehabilitation programs tailored to your needs.</p>
            </div>
            <div className="card-back">
              <h4>Rehabilitation Care</h4>
              <p>Personalized rehabilitation plans to restore strength and mobility after surgery or injury.</p>
            </div>
          </div>
        </div>

        {/* Service 8 */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Chronic Disease Management</h3>
              <p>Ongoing care and monitoring for chronic conditions like diabetes, hypertension, and asthma.</p>
            </div>
            <div className="card-back">
              <h4>Ongoing Care</h4>
              <p>Continuous monitoring and management of chronic conditions for a healthier lifestyle.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
