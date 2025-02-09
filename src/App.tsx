import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Solutions from './components/Solution/Solution';
import Contact from './components/Contact/Contact';
import { LoadScript, Libraries } from '@react-google-maps/api';
import Footer from './components/Footer/Footer';
import { useCredentials } from './hooks/useCredentials';

const GOOGLE_MAPS_LIBRARIES: Libraries = ['places', 'drawing', 'geometry', 'visualization'];

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const { credentials, isLoading, error } = useCredentials();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-4 border-t-transparent border-gray-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !credentials) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-red-500">Failed to load application credentials</div>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={credentials.googleMapsApiKey} libraries={GOOGLE_MAPS_LIBRARIES}>
      <Router>
        <div id='root' className="min-h-screen bg-black text-white">
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <div className="w-full min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/contact" element={<Contact credentials={credentials} />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    // </LoadScript>
  );
};

export default App;