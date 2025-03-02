import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/LoadingSpinner';

const Contact = lazy(() => import('./components/Contact/Contact'));
const Solutions = lazy(() => import('./components/Solution/Solution'));

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <Router>
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/Solutions" 
          element={
            <Suspense fallback={<LoadingSpinner size="md" />}>
                <Solutions />
            </Suspense>
          } 
        />
        <Route 
          path="/Contact" 
          element={
            <Suspense fallback={<LoadingSpinner size="md" />}>
                <Contact />
            </Suspense>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;