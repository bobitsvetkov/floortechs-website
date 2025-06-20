import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ContactPage from './components/Contact/Contact';

// const Contact = lazy(() => import('./components/Contact/Contact'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Solutions = lazy(() => import('./components/Solutions/Solutions'));
const Services = lazy(() => import('./components/Services/Services'));
const AboutUS = lazy(() => import('./components/About/AboutUs'));

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <Router>
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/Projects" 
          element={
            <Suspense fallback={<LoadingSpinner size="md" />}>
                <Projects />
            </Suspense>
          } 
        />
        <Route 
          path="/Solutions" 
          element={
            <Suspense fallback={<LoadingSpinner size="md" />}>
                <Solutions />
            </Suspense>
          } 
        />
        <Route 
          path="/Services" 
          element={
            <Suspense fallback={<LoadingSpinner size="md" />}>
                <Services />
            </Suspense>
          } 
        />
        <Route 
          path="/Contact" 
          element={
            <Suspense fallback={<LoadingSpinner size="md" />}>
                <ContactPage />
            </Suspense>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Suspense fallback={<LoadingSpinner size="md" />}>
                <AboutUS />
            </Suspense>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;