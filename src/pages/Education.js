function Education() {
    return (
      <div id="education" className="w-full h-auto bg-gray-800 flex justify-center py-12">
        <div className="education-container w-full max-w-screen-lg px-4 lg:px-0">
          
          {/* Title */}
          <div className="text-center relative mb-12">
            <h2 className="text-gray-400 uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight tracking-wide mb-6">
              Education
            </h2>
            <div className="absolute w-[220px] h-[3px] bg-gray-400 left-1/2 transform -translate-x-1/2"></div>
          </div>
  
          {/* Timeline Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mt-16">
  
            {/* Timeline Item */}
            <div className="timeline-item bg-gray-900 border-l-4 border-yellow-500 rounded-lg overflow-hidden transition-all hover:shadow-lg">
              <div className="timeline-date bg-gray-600 text-white p-4 flex justify-center items-center text-lg font-bold h-auto w-full">
                2022-2025
              </div>
              <div className="timeline-content p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">Prestige Institute of Management & Research, Bhopal</h3>
                <h4 className="text-gray-300 text-lg italic mb-4">B.Tech in Computer Science Engineering</h4>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl scelerisque, luctus metus sed, dapibus nibh. In eget dictum ante. Suspendisse potenti.</p>
              </div>
            </div>
  
            {/* Timeline Item */}
            <div className="timeline-item bg-gray-900 border-l-4 border-yellow-500 rounded-lg overflow-hidden transition-all hover:shadow-lg">
              <div className="timeline-date bg-gray-600 text-white p-4 flex justify-center items-center text-lg font-bold h-auto w-full">
                2019-2022
              </div>
              <div className="timeline-content p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">R.G.P.V University, Bhopal</h3>
                <h4 className="text-gray-300 text-lg italic mb-4">Diploma in Mechanical Engineering</h4>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl scelerisque, luctus metus sed, dapibus nibh. In eget dictum ante. Suspendisse potenti.</p>
              </div>
            </div>
  
            {/* Timeline Item */}
            <div className="timeline-item bg-gray-900 border-l-4 border-yellow-500 rounded-lg overflow-hidden transition-all hover:shadow-lg">
              <div className="timeline-date bg-gray-600 text-white p-4 flex justify-center items-center text-lg font-bold h-auto w-full">
                2020-2021
              </div>
              <div className="timeline-content p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">Suman Sourabh H.Sec School, Bhopal</h3>
                <h4 className="text-gray-300 text-lg italic mb-4">Senior Secondary</h4>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl scelerisque, luctus metus sed, dapibus nibh. In eget dictum ante. Suspendisse potenti.</p>
              </div>
            </div>
  
            {/* Timeline Item */}
            <div className="timeline-item bg-gray-900 border-l-4 border-yellow-500 rounded-lg overflow-hidden transition-all hover:shadow-lg">
              <div className="timeline-date bg-gray-600 text-white p-4 flex justify-center items-center text-lg font-bold h-auto w-full">
                2018-2019
              </div>
              <div className="timeline-content p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">Suman Sourabh H.Sec School, Bhopal</h3>
                <h4 className="text-gray-300 text-lg italic mb-4">Secondary</h4>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl scelerisque, luctus metus sed, dapibus nibh. In eget dictum ante. Suspendisse potenti.</p>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  
  export default Education;
  