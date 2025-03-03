import React, { useState } from 'react';

interface FlooringSolution {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  imageUrl: string;
}

const Services: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<FlooringSolution | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const services: FlooringSolution[] = [
    {
      id: "resurfacing",
      title: "COMMERCIAL FLOOR RESURFACING",
      shortDescription: "Restore worn commercial flooring with minimal downtime.",
      fullDescription: "Our commercial floor resurfacing service provides complete restoration of worn surfaces while minimizing disruption to your business operations. We use advanced techniques and high-quality materials to transform damaged floors into durable, attractive surfaces.",
      benefits: [
        "Extends floor lifespan by up to 10 years",
        "Cost-effective alternative to full replacement",
        "Customizable finishes and textures",
        "Environmentally friendly options available"
      ],
      imageUrl: "/api/placeholder/500/300"
    },
    {
      id: "inspections",
      title: "COMMERCIAL FLOORING INSPECTIONS",
      shortDescription: "Identify issues before they become costly problems.",
      fullDescription: "Our comprehensive commercial flooring inspection service helps identify potential issues before they develop into expensive problems. We provide detailed assessments of your flooring's condition, structural integrity, and compliance with industry standards.",
      benefits: [
        "Detailed written reports with recommendations",
        "Moisture testing and subfloor evaluation",
        "Compliance verification with industry standards",
        "Preventative maintenance planning"
      ],
      imageUrl: "/api/placeholder/500/300"
    },
    {
      id: "rejuvenation",
      title: "COMMERCIAL FLOOR REJUVENATION",
      shortDescription: "Revitalize floor appearance without complete resurfacing.",
      fullDescription: "Our floor rejuvenation service brings new life to your commercial flooring without the need for extensive resurfacing. This cost-effective solution addresses surface-level wear and restores the visual appeal of your floors through deep cleaning, polishing, and protective treatments.",
      benefits: [
        "Deep cleaning and stain removal",
        "Surface polishing and buffing",
        "Color restoration and sealing",
        "Same-day completion for most spaces"
      ],
      imageUrl: "/api/placeholder/500/300"
    },
    {
      id: "repairs",
      title: "COMMERCIAL FLOOR REPAIRS",
      shortDescription: "Targeted fixes for damaged flooring of all types.",
      fullDescription: "Our commercial floor repair service addresses specific damage to all types of commercial flooring. We offer precise solutions for cracks, holes, loose tiles, damaged joints, and other common flooring issues to restore both functionality and appearance.",
      benefits: [
        "Crack and hole remediation",
        "Tile and plank replacement",
        "Joint sealing and reinforcement",
        "Subfloor issue correction"
      ],
      imageUrl: "/api/placeholder/500/300"
    },
    {
      id: "maintenance",
      title: "COMMERCIAL FLOOR MAINTENANCE",
      shortDescription: "Keep floors in optimal condition year-round.",
      fullDescription: "Our comprehensive floor maintenance programs ensure your commercial floors remain in optimal condition throughout the year. We develop customized care schedules based on your specific flooring type, traffic patterns, and business requirements.",
      benefits: [
        "Customized maintenance schedules",
        "Specialized cleaning for different floor types",
        "Traffic pattern management solutions",
        "Slip resistance treatment options"
      ],
      imageUrl: "/api/placeholder/500/300"
    }
  ];

  const openModal = (solution: FlooringSolution) => {
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