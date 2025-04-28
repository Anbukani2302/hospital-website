import React, { useState } from "react";
import "../CSS/ContactInformation.css"; // External CSS file
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactInformation = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phoneNumber: "",
    address: "",
    uhid: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <div className="contact-info">
        {/* Left Side - Contact Details */}
        <div className="contact-left">
          <div className="contact-details">
            <h2 className="information">Contact Information</h2>
            <p>Say something to start a live chat!</p>
            <p><i className="fas fa-phone-alt"></i> +1012 3456 789</p>
            <p><i className="fas fa-envelope"></i> demo@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 132 Dartmouth Street, Boston, MA 02156, USA</p>
          </div>
          
          {/* Social Media Icons at the Bottom */}
          <div className="social-media1">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Right Side - Appointment Form */}
        <div className="contact-right">
          <br />
          <h2>Make Your Appointment</h2>
          <br />
          <br />

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-column">
                <input
                  type="text"
                  name="patientName"
                  placeholder="Enter full name"
                  value={formData.patientName}
                  onChange={handleChange}
                />
                {errors.patientName && <span className="error">{errors.patientName}</span>}

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-column">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

                <input
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <span className="error">{errors.address}</span>}
              </div>
            </div>

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

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
