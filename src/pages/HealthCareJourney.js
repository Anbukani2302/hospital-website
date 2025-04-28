import React, { useState } from "react";
import "../CSS/HealthCareJourney.css"; // Assuming you have an external CSS file for styling
import healthImage from "../images/health.png"; // Your image path
import { Link } from 'react-router-dom';


const HealthCareJourney = () => {
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  // Toggle the visibility of the full text
  const toggleFullText = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  return (
    <div className="journey-container">
      <div className="journey-header">
        <h1>Our Healthcaring Journey</h1>
      </div>

      <div className="journey-content">
        {/* Left side content */}
        <div className="left-content">
          <p>
            At <strong>Our Hospital</strong>, we prioritize the well-being of our patients above all else. Whether it's for emergency care, routine check-ups, or complex procedures, our expert team is here to provide you with compassionate and skilled medical care.
          </p>
          <p>
            Since our founding in <strong>Year</strong>, we have been committed to offering the highest quality healthcare. Our state-of-the-art facilities and advanced medical technology ensure that our patients receive the best care available.
          </p>
          <p>
            We believe in treating the whole person, not just the symptoms. Our multidisciplinary approach involves working closely with patients and their families to create personalized care plans that align with each individual’s needs.
          </p>
          <p>
            From preventive health services to emergency care, we are here for you at every stage of your healthcare journey. We understand the importance of accessible and affordable healthcare for everyone in the community.
          </p>
          {/* Display full content or show more */}
          {isFullTextVisible && (
            <p>
              Our mission is to provide exceptional healthcare services that enhance the quality of life for our patients. Our dedicated team of healthcare professionals is committed to maintaining the highest standards of care, ensuring that you always feel safe and supported during your visit.
            </p>
          )}
            <button className="more-button12">
        <Link to="/morepage">More</Link>  {/* Clicking this will navigate to the MorePage */}
      </button>
        </div>

        {/* Right side content */}
        <div className="right-content">
          <div className="right-text">
            <p>We are committed to excellence in healthcare services.</p>
            <p>Our hospital's vision is to provide accessible, affordable, and compassionate care.</p>
            <p>Join us in our journey to better health for everyone.</p>
          </div>

          <div className="image-container1">
            <img src={healthImage} alt="Health Journey" />
          </div>
        </div>
      </div>

      {/* Bottom row with images */}
      <div className="bottom-images">
        {/* Optionally add more hospital-related images here */}
      </div>
    </div>
  );
};

export default HealthCareJourney;
