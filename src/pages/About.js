import React from "react";
import "../CSS/About.css";  // No need to import images here

const About = () => {
  return (
    <div className="container123">
      <div className="contents123">
        {/* About the Hospital Section */}
        <div className="about-hospital">
          <h3>About KiteCare Hospital</h3>
          <p>
            KiteCare Hospital is a leading healthcare provider dedicated to delivering top-tier medical services with a focus on patient care and well-being. Our hospital offers a comprehensive range of services, from routine check-ups to emergency treatments, with the latest medical technologies.
          </p>
          <p>
            We believe in providing personalized care, ensuring that every patient receives treatment tailored to their specific needs. Our medical team, facilities, and technology work in unison to deliver excellent outcomes, making us a trusted name in healthcare.
          </p>
          <p>
            At KiteCare, our mission is to provide compassionate, high-quality care that prioritizes patient comfort and well-being, while continuously advancing healthcare practices.
          </p>
        </div>

        {/* Doctor Information Section */}
        <div className="doctor-info">
          <h3>Meet Our Lead Doctor</h3>
          <div className="doctor-image123">
            {/* Directly referencing the image from the public folder */}
            <img src="/images/aboutdoctor.png" alt="Doctor" />
          </div>
          <p>
            Dr. John Doe is the lead physician at KiteCare Hospital and is renowned for his expertise in internal medicine. With over 20 years of experience in the medical field, Dr. Doe has treated a wide variety of conditions and is deeply committed to improving patient outcomes through personalized care.
          </p>
          <p>
            He has worked in several prestigious hospitals, building a reputation for his advanced diagnostic skills and compassionate approach. Dr. Doe specializes in the treatment of complex medical conditions, utilizing cutting-edge treatments to help his patients achieve optimal health.
          </p>
          <p>
            His unwavering commitment to the well-being of his patients and his continuous pursuit of medical knowledge have earned him respect from colleagues and patients alike.
          </p>
        </div>

      </div>

      {/* Hospital Image */}
      <div className="image">
        {/* Directly referencing the hospital image from the public folder */}
        <img src="/images/hospitalimage.png" alt="Kite Care Hospital" />
      </div>
    </div>
  );
};

export default About;
