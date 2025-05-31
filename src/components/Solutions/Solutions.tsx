import { useState } from 'react';
import { FlooringSolution } from '../../types/types';
import { flooringSolutions, getBenefits } from './solutionsInfo';
import { Link } from 'react-router-dom';
const Solutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<FlooringSolution | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'applications' | 'features'>('overview');

  const openModal = (solution: FlooringSolution) => {
    setSelectedSolution(solution);
    setModalOpen(true);
    setActiveTab('overview');
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setSelectedSolution(null);
    }, 300);
  };
  
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 pt-20">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Comprehensive Flooring Solutions</h1>
      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
        Engineered flooring systems designed for specific industry requirements and operational challenges.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flooringSolutions.map((flooringSolution) => (
          <div key={flooringSolution.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full">
            <div className="relative h-56">
              <img 
                src={flooringSolution.imageUrl} 
                alt={flooringSolution.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{flooringSolution.title}</h2>
              <p 
                className="text-sm font-semibold mb-4" 
                style={{ color: flooringSolution.primaryColor }}
              >
                {flooringSolution.tagline}
              </p>
              
              <p className="text-gray-600 mb-6 line-clamp-3">{flooringSolution.shortDescription}</p>
              
              <div className="mt-auto">
                <button 
                  onClick={() => openModal(flooringSolution)}
                  className="w-full py-3 px-5 rounded-md font-medium text-white transition-all duration-300 flex items-center justify-center"
                  style={{ 
                    backgroundColor: flooringSolution.primaryColor,
                    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
                  }}
                  onMouseOver={(e) => {
                    const el = e.currentTarget;
                    const originalColor = flooringSolution.primaryColor;
                    // Darken the color on hover
                    el.style.backgroundColor = originalColor + 'dd';
                  }}
                  onMouseOut={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = flooringSolution.primaryColor;
                  }}
                >
                  <span>View Solution Details</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedSolution && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-40 transition-opacity backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedSolution.imageUrl} 
                  alt={selectedSolution.title} 
                  className="w-full h-72 object-cover"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-60 text-white rounded-full p-2 hover:bg-opacity-80 transition-all"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                  <h2 className="text-3xl font-bold text-white">{selectedSolution.title}</h2>
                  <p className="text-white text-opacity-90 text-lg mt-2">{selectedSolution.tagline}</p>
                </div>
              </div>
              
              <div className="p-8">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-8 space-x-8">
                  <button 
                    className={`pb-3 text-base font-medium transition-colors duration-200 relative focus:outline-none ${activeTab === 'overview' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                    {activeTab === 'overview' && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5" style={{ backgroundColor: selectedSolution.primaryColor }}></div>
                    )}
                  </button>
                  <button 
                    className={`pb-3 text-base font-medium transition-colors duration-200 relative focus:outline-none ${activeTab === 'applications' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                    onClick={() => setActiveTab('applications')}
                  >
                    Ideal Applications
                    {activeTab === 'applications' && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5" style={{ backgroundColor: selectedSolution.primaryColor }}></div>
                    )}
                  </button>
                </div>
                <div className="mb-8">
                  {activeTab === 'overview' && (
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-8 text-lg">{selectedSolution.fullDescription}</p>
                      
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose This Solution?</h3>
                        <div className="space-y-4">
                          {/* Generate dynamic benefits based on the solution type */}
                          {getBenefits(selectedSolution).map((benefit, index) => (
                            <div key={index} className="flex items-start">
                              <div 
                                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                                style={{ backgroundColor: `${selectedSolution.primaryColor}15` }}
                              >
                                <svg 
                                  className="w-5 h-5" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  style={{ color: selectedSolution.primaryColor }}
                                  viewBox="0 0 24 24" 
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 text-lg">{benefit.title}</h4>
                                <p className="text-gray-600 mt-1">{benefit.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}   
                  {activeTab === 'applications' && (
                    <div className="space-y-6">
                      {selectedSolution.idealFor.map((industry, index) => (
                        <div key={index} className="rounded-lg p-6 shadow-sm transition-all hover:shadow-md" 
                          style={{ backgroundColor: `${selectedSolution.primaryColor}08` }}>
                          <h3 className="text-xl font-semibold mb-3" style={{ color: selectedSolution.primaryColor }}>{industry.name}</h3>
                          <p className="text-gray-700 leading-relaxed">{industry.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>               
                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
                  <button 
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-md transition duration-300 mr-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <Link to="/Contact">
                  <button 
                    className="text-white font-medium py-3 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{ 
                      backgroundColor: selectedSolution.primaryColor,
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    Request Consultation
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Solutions;