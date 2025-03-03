import React, { useState } from 'react';
import { FlooringSolution } from '../../types/types';
import { flooringSolutions, getBenefits } from './solutionsInfo';

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
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 pt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Comprehensive Flooring Solutions</h1>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Engineered flooring systems designed for specific industry requirements and operational challenges.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flooringSolutions.map((flooringSolution) => (
          <div key={flooringSolution.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full">
            <div className="relative h-48">
              <img 
                src={flooringSolution.imageUrl} 
                alt={flooringSolution.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div 
                className="absolute bottom-0 left-0 w-full h-1" 
                style={{ backgroundColor: flooringSolution.primaryColor }}
              ></div>
            </div>
            
            <div className="p-5 flex-grow flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 mb-1">{flooringSolution.title}</h2>
              <p 
                className="text-sm font-medium mb-4" 
                style={{ color: flooringSolution.primaryColor }}
              >
                {flooringSolution.tagline}
              </p>
              
              <p className="text-gray-600 mb-4 line-clamp-3">{flooringSolution.description}</p>
              
              <div className="mt-auto">
                <button 
                  onClick={() => openModal(flooringSolution)}
                  className="w-full py-2 px-4 rounded font-medium text-white transition-colors duration-300 flex items-center justify-center"
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
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            className="fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedSolution.imageUrl} 
                  alt={selectedSolution.title} 
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: selectedSolution.primaryColor }}></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h2 className="text-2xl font-bold text-white">{selectedSolution.title}</h2>
                  <p className="text-white text-opacity-90">{selectedSolution.tagline}</p>
                </div>
              </div>
              
              <div className="p-6">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-6">
                  <button 
                    className={`pb-2 px-4 text-sm font-medium transition-colors duration-200 ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button 
                    className={`pb-2 px-4 text-sm font-medium transition-colors duration-200 ${activeTab === 'applications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                    onClick={() => setActiveTab('applications')}
                  >
                    Ideal Applications
                  </button>
                </div>
                
                {/* Tab Content */}
                <div className="mb-6">
                  {activeTab === 'overview' && (
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-6">{selectedSolution.description}</p>
                      
                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                        <h3 className="text-lg font-medium text-gray-800 mb-3">Why Choose This Solution?</h3>
                        <div className="space-y-3">
                          {/* Generate dynamic benefits based on the solution type */}
                          {getBenefits(selectedSolution).map((benefit, index) => (
                            <div key={index} className="flex items-start">
                              <div 
                                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3"
                                style={{ backgroundColor: `${selectedSolution.primaryColor}20` }}
                              >
                                <svg 
                                  className="w-4 h-4" 
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
                                <h4 className="font-medium text-gray-800">{benefit.title}</h4>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
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
                        <div key={index} className="rounded-lg p-5" style={{ backgroundColor: `${selectedSolution.primaryColor}10` }}>
                          <h3 className="text-lg font-medium mb-2" style={{ color: selectedSolution.primaryColor }}>{industry.name}</h3>
                          <p className="text-gray-700">{industry.description}</p>
                        </div>
                      ))}
                      
                      <div className="mt-6 p-5 bg-gray-50 rounded-lg border border-gray-100">
                        <h3 className="text-lg font-medium text-gray-800 mb-3">Not sure if this is right for your facility?</h3>
                        <p className="text-gray-600 mb-4">Our flooring experts can assess your specific requirements and recommend the optimal solution for your operational needs and budget.</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
                  <button 
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-300 mr-3"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button 
                    className="text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    style={{ backgroundColor: selectedSolution.primaryColor }}
                  >
                    Request Consultation
                  </button>
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