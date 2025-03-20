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
      link: "https://ankit3028k.github.io/4lamaat/",
    },
    {
      src: "https://ankit3028k.netlify.app/",
      title: "Portfolio",
      link: "https://ankit3028k.netlify.app",
    },
    {
      src: "https://icj24.vercel.app/",
      title: "News Channel Website",
      link: "https://icj24.vercel.app/",
    },
    {
      src: "https://chating-with-anyone.vercel.app/",
      title: "Real time chat app",
      link: "https://chating-with-anyone.vercel.app/",
    },
  ];

  return (
    <div className="project flex justify-center items-center bg-gray-900 py-12">
      <div className="project-container w-full max-w-screen-lg px-4">
        <h2 className="text-uppercase text-white text-3xl mt-16 text-center mb-6">
          My Projects
        </h2>
        <div className="gallery grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-item flex flex-col pb-10 items-center mx-2 ${
                index === 4 ? "col-span-2" : ""
              }`}
            >
              <iframe
                src={project.src}
                className="w-full h-40 md:h-56 lg:h-64 object-cover filter grayscale transition duration-500 hover:grayscale-0"
                title={project.title}
                aria-label={project.title}
                loading="lazy"
              />
              <p className="text-white text-center mt-2">
                {project.title}{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {project.link}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
