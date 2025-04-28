import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports for React Router v6
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import DoctorPage from './components/DoctorPage';
import OurSpecial from './components/OurSpecial';
import HealthCareJourney from './pages/HealthCareJourney';
import CallNumber from './pages/CallNumber';
import Events from './components/Events';
import ContactDetails from './components/ContactDetails';
import { ContactPage } from '@mui/icons-material';
import MorePage from './pages/MorePage';
import About from './pages/About';
import AboutSection from './components/AboutSection';
import Health from './components/Health';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-doctor" element={ <DoctorPage />} />
          <Route path="/our-specialists" element={<OurSpecial />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactDetails />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/health-information" element={<Health />} />
        <Route path="/morepage" element={<MorePage />} />  {/* More Page */}
        <Route path="/ourspecial" element={<OurSpecial />} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
