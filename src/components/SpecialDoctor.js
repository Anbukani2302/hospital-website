import React from "react";
import "../CSS/SpecialDoctor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck} from "@fortawesome/free-solid-svg-icons";

const SpecialDoctor = () => {
  const specialists = [
    "Cardiac Sciences",
    "Nephrology",
    "Neurology",
    "Dental Science",
    "Organ Transplant",
    "Paediatrics",
    "Cardiac Sciences",
    "Nephrology",
    "Neurology",
    "Dental Science",
    "Organ Transplant",
    "Paediatrics",
    "Cardiac Sciences",
    "Nephrology",
    "Nephrology",
    "Neurology",
    "Dental Science",
    "Dental Science",
  ];

  return (
    <div className="specialists-container">
      <h2 className="specialists-heading">Our Specialists</h2>
      <p className="specialists-description">
        We are a truly collaborative centre for personalized medical care.
        Renowned medical experts assisted by smart technologies work in tandem
        to progressively improve healthcare outcomes.
      </p>
      <div className="specialists-grid">
        {/* Displaying 3 columns in a row */}
        <div className="specialists-row">
          {specialists.map((specialist, index) => (
            <p key={index} className="specialist-item">
              <FontAwesomeIcon icon={faCheck} className="icon2" />
              {specialist}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialDoctor;
