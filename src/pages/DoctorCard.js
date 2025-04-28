import React from 'react';

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p>{doctor.role}</p>
        <button className="book-appointment">Book Appointment</button>
      </div>
    </div>
  );
}

export default DoctorCard;
