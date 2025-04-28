// src/components/ServicesPage.js
import React from 'react';
import ServiceNavbar from './ServiceNavbar';
 import Footer from './Footer';
import ServiceCard from '../pages/ServiceCard';

const ServicesPage = () => {
  return (
    <div>
      <ServiceNavbar />
      <ServiceCard />
      <Footer />
    </div>
  );
}

export default ServicesPage;
