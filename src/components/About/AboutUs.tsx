import React from "react";

const AboutUs: React.FC = () => {
  const teamHighlights = [
    {
      title: "Expert Craftsmanship",
      description:
        "Our team consists of seasoned professionals with a passion for quality and detail who take genuine pride in every installation.",
    },
    {
      title: "Innovative Solutions",
      description:
        "We stay ahead of industry trends, combining proven methods with cutting-edge techniques to solve complex flooring challenges.",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We believe in building relationships, not just flooring solutions. Your vision becomes our mission, and your success is our priority.",
    },
  ];
  const stats = [
    { number: "2024", label: "Year Founded" },
    { number: "10+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 pt-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About FloorTechs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A fresh approach to commercial flooring, combining industry expertise
          with innovative solutions
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, we launched with a clear mission: to transform
              the commercial flooring industry through exceptional
              craftsmanship, innovative solutions, and unparalleled customer
              service. While we're a new company, our team brings together
              decades of combined experience from industry leaders.
            </p>
            <p className="text-gray-600 mb-4">
              We specialize in polished concrete, protective coatings, urethane
              systems, and comprehensive floor maintenance solutions. Our modern
              approach combines time-tested techniques with cutting-edge
              technology to deliver results that exceed expectations.
            </p>
            <p className="text-gray-600">
              Every project is an opportunity to build lasting relationships and
              showcase our commitment to quality, safety, and innovation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 mb-4">
              To become the preferred commercial flooring partner by
              consistently delivering innovative solutions that enhance the
              functionality and aesthetics of every space we touch.
            </p>
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
              <p className="text-gray-700 font-medium italic">
                "Quality craftsmanship meets modern innovation"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamHighlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
