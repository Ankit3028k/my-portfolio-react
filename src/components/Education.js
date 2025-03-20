function Education() {
  // Reusable Timeline Item Component
  const TimelineItem = ({ year, title, subtitle, description }) => (
    <div className="timeline-item bg-gray-900 border-l-4 border-yellow-500 rounded-lg overflow-hidden transition-all hover:shadow-lg">
      <div className="timeline-date bg-gray-600 text-white p-4 flex justify-center items-center text-lg font-bold h-auto w-full">
        {year}
      </div>
      <div className="timeline-content p-6">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
        <h4 className="text-gray-300 text-lg italic mb-4">{subtitle}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );

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
          {/* Timeline Items */}
          <TimelineItem
            key="1"
            year="2022-2025"
            title="Prestige Institute of Management & Research, Bhopal"
            subtitle="B.Tech in Computer Science Engineering"
            description="Gaining hands-on experience in full-stack development and enhancing technical skills in various aspects of Computer Science."
          />
          <TimelineItem
            key="2"
            year="2019-2022"
            title="R.G.P.V University, Bhopal"
            subtitle="Diploma in Mechanical Engineering"
            description="Focused on core engineering principles, mechanical systems, and design fundamentals while building problem-solving skills."
          />
          <TimelineItem
            key="3"
            year="2020-2021"
            title="Suman Sourabh H.Sec School, Bhopal"
            subtitle="Senior Secondary"
            description="Completed high school with an emphasis on science subjects, excelling in mathematics and physics."
          />
          <TimelineItem
            key="4"
            year="2018-2019"
            title="Suman Sourabh H.Sec School, Bhopal"
            subtitle="Secondary"
            description="Developed a strong foundation in core subjects, with a focus on mathematics and science, leading to a passion for engineering."
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
