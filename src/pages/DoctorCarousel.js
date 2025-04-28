import React, { useState } from "react";
import "../CSS/DoctorCarousel.css"; // Import custom CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const DoctorCarousel = () => {
  // Declare the doctors array
  const doctors = [
    { name: "Dr. Jane Cooper", role: "MBBS, DA, FCPS (Anesthesiology)", image: "/images/doctor1.png" },
    { name: "Dr. John Doe", role: "MD (Cardiology)", image: "/images/doctor2.png" },
    { name: "Dr. Sarah Wilson", role: "MD (Pediatrics)", image: "/images/doctor3.png" },
    { name: "Dr. Mike Smith", role: "MS (Orthopedics)", image: "/images/doctor45.png" },
    { name: "Dr. Emily Davis", role: "MBBS, MD (Dermatology)", image: "/images/doctor41.png" },
    { name: "Dr. Robert Brown", role: "MD (Neurology)", image: "/images/doctor42.png" },
    { name: "Dr. Laura White", role: "MBBS, MD (Gynecology)", image: "/images/doctor43.png" },
    { name: "Dr. William Taylor", role: "MD (Oncology)", image: "/images/doctor44.png" },
  ];

  const doctorsPerPage = 4; // Number of doctors to display per page
  const totalPages = Math.ceil(doctors.length / doctorsPerPage); // Total number of pages

  // State for managing current index of doctors
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next button click
  const goNext = () => {
    if (currentIndex + 1 < totalPages) {
      setCurrentIndex(currentIndex + 1); // Move to the next page of doctors
    }
  };

  // Handle previous button click
  const goPrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1); // Move to the previous page of doctors
    }
  };

  // Get the doctors to display based on the current index
  const displayedDoctors = doctors.slice(currentIndex * doctorsPerPage, (currentIndex + 1) * doctorsPerPage);

  return (
    <div className="doctors-container">
      <h2 className="heading">OUR DOCTORS</h2>
      <div className="carousel">
        {/* Left Arrow */}
        <span
          onClick={goPrev}
          className={`arrow left ${currentIndex === 0 ? "disabled" : ""}`}
        >
          &lt; {/* Left Arrow symbol */}
        </span>

        {/* Carousel Cards Container with transform */}
        <div
          className="carousel-cards"
          style={{
            transform: `translateX(-${(currentIndex * 100)}%)`, // Shift the carousel to the left based on the current index
            transition: "transform 0.5s ease", // Smooth scrolling transition
          }}
        >
          {doctors.map((doctor, index) => (
            <div key={index} className="card1">
              <div className="card-content">
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-role">{doctor.role}</p>
                <button className="appointment-btns">
                  <FontAwesomeIcon icon={faHeartbeat} className="icon" />
                  Book an Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <span
          onClick={goNext}
          className={`arrow right ${currentIndex + 1 === totalPages ? "disabled" : ""}`}
        >
          &gt; {/* Right Arrow symbol */}
        </span>
      </div>
    </div>
  );
};

export default DoctorCarousel;
