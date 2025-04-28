import React from "react";
import "../CSS/CallNumber.css";
import hospitalImage from "../images/hospital.png"; // Ensure this is the correct path

const CallNumber = () => {
  return (
    <div className="container">
      <div className="contents">
        <p className="description">
          At Kite, we leverage world-class technology, state-of-the-art
        </p>
        <p className="description">
          infrastructure, and an exceptional clinical team to deliver the most
        </p>
        <p className="description">
          effective and personalized care to our patients.
        </p>
        <p className="appointment">Book an Appointment:</p>
        <button className="button">(888) 617-5894</button>
      </div>
      <div className="image">
        <img src={hospitalImage} alt="Kite Care" />
      </div>
    </div>
  );
};

export default CallNumber;
