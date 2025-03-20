import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  // Projects data (can also be fetched from an API or defined elsewhere)
  const projects = [
    {
      id: "1",
      title: "E-commerce Project",
      description: "An e-commerce website with full product management.",
      link: "https://ankit-gangrade-kirana.vercel.app/",
      image: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/pecsfg8apbzp8dsbdpgp", // Add image URL
      technologies: ["React", "Node.js", "MongoDB", "CSS", "Express"],
      features: [
        "Product Management",
        "User Authentication",
        "Order Tracking",
        "Payment Gateway Integration",
      ],
      additionalInfo: "This project was built using MERN stack and integrates with various payment gateways.",
    },
    {
      id: "2",
      title: "4lamaat Project",
      description: "A creative website project showcasing various art forms.",
      link: "https://ankit3028k.github.io/4lamaat/",
      image: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/i7uvskt10buyko1teyzt", // Add image URL
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Interactive Gallery", "Responsive Design", "Artworks Showcase"],
      additionalInfo: "This project highlights different forms of digital art and showcases the beauty of creativity.",
    },
    {
      id: "3",
      title: "Portfolio",
      description: "My personal portfolio to showcase my skills and projects.",
      link: "https://ankit3028k.netlify.app",
      image: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/fe9znc7qzxq90ozbt0mm", // Add image URL
      technologies: ["React", "Tailwind CSS"],
      features: ["Project Gallery", "Skillset Showcase", "Contact Form"],
      additionalInfo: "This is a personal project where I display my skills and showcase my professional journey.",
    },
    {
      id: "4",
      title: "News Channel Website",
      description: "A news channel website displaying the latest headlines.",
      link: "https://icj24.vercel.app/",
      image: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/yyupgycvmojqb329ck3u", // Add image URL
      technologies: [
        "Vite", 
        "React", 
        "Tailwind CSS", 
        "Node.js", 
        "Express", 
        "MongoDB"
      ],
      features: [
        "Live News Feed",
        "Real-Time Updates",
        "Responsive Layout",
        "Article Search",
        "User Authentication"
      ],
      additionalInfo: "Built using Vite for fast development, React for frontend, Node.js and Express for backend, and MongoDB for data storage. Fetches live news from APIs and provides a modern layout for users.",
    },
    {
      id: "5",
      title: "Real time chat app",
      description: "A real-time chat application for users to communicate instantly.",
      link: "https://chating-with-anyone.vercel.app/",
      image: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/qxnk52jnmhv7avqd08aq", // Add image URL
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      features: ["Real-Time Messaging", "Group Chat", "User Profiles"],
      additionalInfo: "This project enables users to chat in real time using WebSocket technology.",
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-detail container mx-auto p-4">
      {/* Project Image */}
      {project.image && <img src={project.image} alt={project.title} className="w-full h-auto mb-4" />}
      
      <h2 className="text-3xl text-center text-white mb-6">{project.title}</h2>
      
      <p className="text-white mb-4">{project.description}</p>
      
      {/* Technologies List */}
      <div className="technologies mb-4">
        <h3 className="text-xl text-white">Technologies Used:</h3>
        <ul className="list-disc pl-6 text-white">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      
      {/* Features List */}
      <div className="features mb-4">
        <h3 className="text-xl text-white">Key Features:</h3>
        <ul className="list-disc pl-6 text-white">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      {/* Additional Info */}
      {project.additionalInfo && (
        <div className="additional-info mb-4">
          <h3 className="text-xl text-white">Additional Information:</h3>
          <p className="text-white">{project.additionalInfo}</p>
        </div>
      )}

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Visit Project
      </a>
    </div>
  );
};

export default ProjectDetail;
