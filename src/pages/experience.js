import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: '2022-2023',
      company: 'Cummins India Limited, Pune',
      position: 'DET',
      description: 'Demonstrated proficiency in team collaboration during my tenure.'
    },
    {
      year: '2024',
      company: 'Prestige Institute of Management & Research, Bhopal',
      position: 'Coordinator',
      description: 'Served as an Event Coordinator, managing various events effectively.'
    },
    {
      year: '2024',
      company: 'CRISP',
      position: 'Full-Stack',
      description: 'Designed and developed a cleaning website during full-stack classes.'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-blue-500 min-h-screen flex justify-center items-center">
      <div className="text-center w-full max-w-5xl px-4">
        <h2 className="text-4xl text-[#ffcc00] uppercase tracking-wider mb-10 mt-24 relative inline-block">
          My Experience
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-1 bg-gray-300"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <div className="relative mb-4">
                <h3 className="text-2xl text-[#ffcc00] mb-1">{exp.position}</h3>
                <h4 className="text-lg text-[#f1f1f1]">{exp.company}</h4>
                <p className="text-gray-400 absolute top-0 right-0">{exp.year}</p>
              </div>
              <p className="text-[#f1f1f1]">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
