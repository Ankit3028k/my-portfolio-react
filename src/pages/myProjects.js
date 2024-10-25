import React from "react";

const MyProjects = () => {
  const projects = [
    {
      src: "https://ankit-gangrade-kirana.vercel.app/",
      title: "E-commerce Project",
      link: "https://ankit-gangrade-kirana.vercel.app",
    },
    {
      src: "https://ankit3028k.github.io/4lamaat/",
      title: "4lamaat Project",
      link: "https://www.4lamaat.com.sa/",
    },
    {
      src: "https://ankit3028k.netlify.app/",
      title: "Portfolio",
      link: "https://ankit3028k.netlify.app",
    },
    // {
    //   src: "https://ankit3028k.netlify.app/",
    //   title: "Iframe Example 2",
    // },
  ];

  return (
    <div className="project flex justify-center items-center bg-gray-900 min-h-screen">
      <div className="project-container">
        <h2 className="text-uppercase text-white text-3xl text-center mb-6">
          My Projects
        </h2>
        <div className="gallery grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="project-item flex flex-col items-center mx-2">
              <iframe
                src={project.src}
                className="w-full h-40 md:h-56 lg:h-64 object-cover filter grayscale transition duration-500 hover:grayscale-0"
                title={project.title}
              />
              <p className="text-white text-center mt-2">{project.title} <a href={project.link}>{project.link}</a></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
