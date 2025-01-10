import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Solutions from './components/Solution/Solution';
import Work from './components/Work/Work';
import Installation from './components/Installation/Installation';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  return (
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
  );
};


export default App;