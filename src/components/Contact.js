import React, { useState } from "react";
import "../CSS/Contact.css";

const Contact = () => {
  // State to track form data and errors
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    date: "",
    phoneNumber: "",
    address: "",
    doctor: "",
    uhid: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`;
      }
    });
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      setErrors({}); // Reset errors if form is valid
      // Submit the form data (e.g., send it to the server)
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="contact container">
      <h1 className="title">Make Your Appointment</h1>

      <form className="form" onSubmit={handleSubmit}>
        {/* Second Row: Left & Right Columns */}
        <div className="form-row">
          <div className="form-column1">
            <label htmlFor="patientName" className="input-label">
              {/* Patient's Full Name */}
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              placeholder="Enter full name"
              className="input-field"
              value={formData.patientName}
              onChange={handleChange}
            />
            {errors.patientName && <span className="error">{errors.patientName}</span>}

            {/* <label htmlFor="email" className="input-label">
              Email
            </label> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
{/* 
            <label htmlFor="date" className="input-label">
              Date
            </label> */}
            <input
              type="date"
              id="date"
              name="date"
              className="input-field"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </div>
          <div className="form-column2">
            {/* <label htmlFor="phoneNumber" className="input-label">
              Phone Number
            </label> */}
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter phone number"
              className="input-field"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
{/* 
            <label htmlFor="address" className="input-label">
              Address
            </label> */}
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter address"
              className="input-field"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}

            {/* <label htmlFor="doctor" className="input-label">
              Doctor
            </label> */}
            <input
              type="text"
              id="doctor"
              name="doctor"
              placeholder="Enter doctor name"
              className="input-field"
              value={formData.doctor}
              onChange={handleChange}
            />
            {errors.doctor && <span className="error">{errors.doctor}</span>}
          </div>
        </div>

        {/* UHID Row */}
        <div className="uhid-row">
          {/* <label htmlFor="uhid" className="input-label">
            UHID (if any)
          </label> */}
         <input
  type="text"
  id="uhid"
  name="uhid"
  placeholder="Enter UHID"
  className="input-field uhid-field"
  value={formData.uhid}
  onChange={handleChange}
/>
{errors.uhid && <span className="error">{errors.uhid}</span>}

        </div>

        {/* Submit Button Row */}
        <div className="button-container">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
