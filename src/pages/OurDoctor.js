import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer"; // Import Footer Component
import "../CSS/OurDoctor.css"; // Import CSS

const OurDoctor = () => {
  const doctors = [
    { id: 1, name: "Dr. John Doe", role: "MBBS, DA, FCPS (Anesthesiology) Consultant", img: "/images/doctor1.png" },
    { id: 2, name: "Dr. Jane Smith", role: "MBBS, FCPS (Pediatrics) MRCPCH (UK) Senior Consultant", img: "/images/doctor2.png" },
    { id: 3, name: "Dr. Alice Brown", role: "MBBS, FCPS (ENT), MS (Otolaryngology) Coordinator & Senior Consultant", img: "/images/doctor3.png" },
    { id: 4, name: "Dr. Mark Wilson", role: "BDS, MS (OMFS) Associate Consultant", img: "/images/doctor4.png" },
    { id: 5, name: "Dr. Emily Davis", role: "MBBS, DA, FCPS (Anesthesiology) Consultant", img: "/images/doctor1.png" },
    { id: 6, name: "Dr. Sarah Lee", role: "MBBS, FCPS (Pediatrics) MRCPCH (UK)", img: "/images/doctor2.png" },
    { id: 7, name: "Dr. Peter Brown", role: "Consultant", img: "/images/doctor3.png" },
    { id: 8, name: "Dr. David Clark", role: "OMFS", img: "/images/doctor4.png" },
  ];

  return (
    <div className="doctors-container">
      <h2 className="ourdoctor">OUR DOCTORS</h2>
      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.img} alt={doctor.name} className="doctor-image1" />
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-role">{doctor.role}</p>
            <button className="doctor-btns" aria-label={`Book an appointment with ${doctor.name}`}>
  <FontAwesomeIcon icon={faHeartbeat} className="icon1" />
  Book an Appointment
</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDoctor;
