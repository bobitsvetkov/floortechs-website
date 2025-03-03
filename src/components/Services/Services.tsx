import { useState } from 'react';
import { FlooringService } from '../../types/types';
import { services } from './servicesInfo';
const Services: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<FlooringService | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (solution: FlooringService) => {
    setSelectedSolution(solution);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setSelectedSolution(null);
    }, 300);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Commercial Flooring Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.shortDescription}</p>
            </div>
            <div className="px-4 pb-4">
              <button 
                onClick={() => openModal(service)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedSolution && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedSolution.title}</h2>
                  <button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ×
                  </button>
                </div>
                
                <img 
                  src={selectedSolution.imageUrl} 
                  alt={selectedSolution.title} 
                  className="w-full h-64 object-cover my-4 rounded"
                />
                
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Overview</h3>
                  <p className="text-gray-600">{selectedSolution.fullDescription}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedSolution.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">+</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button 
                    onClick={closeModal}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                  >
                    Close
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

export default Services;