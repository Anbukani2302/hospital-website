import React from 'react';
import Navbar from './Navbar'; // Correct path to Navbar
import Contact from './Contact'; // Correct path to Contact
import CallNumber from '../pages/CallNumber'; // Correct path to CallNumber
import HealthCareJourney from '../pages/HealthCareJourney'; // Correct path to HealthCareJourney
import Specialist from '../pages/Specialist'; // Correct path to Specialist
import Footer from './Footer'; // Correct path to Footer
import DoctorCarousel from '../pages/DoctorCarousel'; // Correct path to DoctorCarousel

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CallNumber />
      <HealthCareJourney />
      <Specialist />
      <DoctorCarousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
