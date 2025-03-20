import React from "react";
import { Link } from "react-router-dom";

const MyProjects = () => {
  const projects = [
    {
      id: "1",
      src: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/pecsfg8apbzp8dsbdpgp",
      title: "E-commerce Project",
      link: "https://ankit-gangrade-kirana.vercel.app",
    },
    {
      id: "2",
      src: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/i7uvskt10buyko1teyzt",
      title: "4lamaat Project",
      link: "https://ankit3028k.github.io/4lamaat/",
    },
    {
      id: "3",
      src: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/fe9znc7qzxq90ozbt0mm",
      title: "Portfolio",
      link: "https://ankit3028k.netlify.app",
    },
    {
      id: "4",
      src: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/yyupgycvmojqb329ck3u",
      title: "News Channel Website",
      link: "https://icj24.vercel.app/",
    },
    {
      id: "5",
      src: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/qxnk52jnmhv7avqd08aq",
      title: "Real time chat app",
      link: "https://chating-with-anyone.vercel.app/",
    },
    
  ];

  // Get number of projects
  const numOfProjects = projects.length;

  // Determine the grid class based on the number of projects
  let gridClass = "lg:grid-cols-4"; // Default to 4 columns for large screens

  if (numOfProjects % 3 === 0 ||numOfProjects % 2 !== 0) {
    gridClass = "lg:grid-cols-3"; // If odd, 3 columns
  } else if (numOfProjects < 4) {
    gridClass = "lg:grid-cols-2"; // If fewer than 4, 2 columns
  }

  return (
    <div className=" place-items-center  bg-gray-900 py-12">
      <div className="project-container  px-4">
        <h2 className="text-uppercase text-white text-3xl  text-center mb-6">
          My Projects
        </h2>
        <div className={`gallery grid gap-4 sm:gap-6 mx-auto ${gridClass}`}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-item flex flex-col pb-10 items-center mx-2 ${
                index === numOfProjects - 1 && numOfProjects % 2 !== 0
                  ? "lg:col-span-2" // Last project spans 2 columns if the number is odd
                  : ""
              }`}
            >
              <img
                src={project.src}
                className="w-full h-40 sm:h-56 lg:h-64 object-cover filter grayscale transition duration-500 hover:grayscale-0"
                alt={project.title}
              />
              <p className="text-white text-center mt-2">
                {project.title}{" "}
                <Link
                  to={`/project/${project.id}`}
                  className="text-blue-400 hover:underline"
                >
                  View Details
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
