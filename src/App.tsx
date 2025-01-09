import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Solutions from './components/Solution/Solution';
import Work from './components/Work/Work';
import Installation from './components/Installation/Installation';
import Contact from './components/Contact/Contact';
import { LoadScript, Libraries } from '@react-google-maps/api';
import Footer from './components/Footer/Footer';

console.log(import.meta.env);
console.log(import.meta.env.VITE_GOOGLE_MAPS_KEY);
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;
console.log(GOOGLE_MAPS_API_KEY)
const GOOGLE_MAPS_LIBRARIES: Libraries = ['places', 'drawing', 'geometry', 'visualization'];

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={GOOGLE_MAPS_LIBRARIES}>
    <Router>
      <div id='root' className="min-h-screen bg-black text-white">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="w-full min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/work" element={<Work />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </LoadScript>
  );
};


export default App;