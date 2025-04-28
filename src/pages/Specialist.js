import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


import "../CSS/Specialist.css"; // Import your CSS file
import leftImage from "../images/doctor.png"; // Replace with your actual image path

const Specialist = () => {
  // States for static checkboxes
  const [cardiacSciences] = React.useState(true);
  const [neprology] = React.useState(true);
  const [neurology] = React.useState(true);
  const [dentalScience] = React.useState(true);
  const [organTransplant] = React.useState(true);
  const [paediatrics] = React.useState(true);

  return (
    <div className="specialist-container">
      <div className="specialist-content">
        {/* Left side content (Only Image) */}
        <div className="left-specialist">
          <div className="image-container">
            <img src={leftImage} alt="Health Journey" />
          </div>
        </div>

        {/* Right side content (Heading + Specialties + View More) */}
        <div className="right-specialist">
          <h1 className="specialist">OUR SPECIALISTS</h1>
          <div className="checkbox-group">
            {/* Left Column */}
            <div className="left-column">
              <label>
                {dentalScience && <FontAwesomeIcon icon={faCheck} />}
                Dental Science
              </label>
              <label>
                {organTransplant && <FontAwesomeIcon icon={faCheck} />}
                Organ Transplant
              </label>
              <label>
                {paediatrics && <FontAwesomeIcon icon={faCheck} />}
                Paediatrics
              </label>
            </div>

            {/* Right Column */}
            <div className="right-column">
              <label>
                {cardiacSciences && <FontAwesomeIcon icon={faCheck} />}
                Cardiac Sciences
              </label>
              <label>
                {neprology && <FontAwesomeIcon icon={faCheck} />}
                Neprology
              </label>
              <label>
                {neurology && <FontAwesomeIcon icon={faCheck} />}
                Neurology
              </label>
            </div>
          </div>

          {/* View More Link */}
          <Link to="/ourspecial" className="view-more-link">
  View More
  <FontAwesomeIcon icon={faArrowRight} />
</Link>

        </div>
      </div>
    </div>
  );
};

export default Specialist;
