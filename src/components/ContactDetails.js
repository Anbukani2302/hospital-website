import React from 'react'
import ContactInformation from '../pages/ContactInformation';
import Footer from './Footer';
import ContactNavbar from './ContactNavbar';

const ContactDetails = () => {
  return (
    <div>
      <ContactNavbar />
      <ContactInformation />
      <Footer />
    </div>
  )
}

export default ContactDetails;
