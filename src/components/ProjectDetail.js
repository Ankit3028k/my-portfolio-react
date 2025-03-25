import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  // Updated Projects data based on your resume
  const projects = [
    {
      id: "1",
      title: "Wholesale & Retail E-Commerce Platform",
      description: "This project is a fully dynamic e-commerce website designed to serve both wholesale and retail customers. It was developed using the MERN stack, allowing users to shop either in bulk (wholesale) or in smaller quantities (retail). The site provides real-time updates, instant discounts for bulk purchases, and a simplified checkout process.The platform does not require users to sign up or log in to make a purchase, enabling a frictionless shopping experience. Customers can add products to the cart, proceed to checkout, and complete their purchases by providing minimal details such as name, address, and phone number",
      link: "https://ankit-gangrade-kirana.vercel.app/", // Replace with actual link
      image: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/pecsfg8apbzp8dsbdpgp", // Replace with actual image link
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Bulk and Retail Purchases: Allows users to purchase in both bulk and smaller quantities, with instant discounts applied to bulk orders.",
        "Instant Discounts for Wholesale Customers: Special pricing and discounts are automatically applied when bulk purchases are made.",
        "Simple Checkout Process: Only essential information (name, address, and phone number) is required for checkout.",
        "No Login/Signup Required: Users can shop and place orders without needing to register or log in."
      ],
      additionalInfo: "This e-commerce platform was built to cater to both wholesale and retail customers, making it suitable for various business models. It helps businesses reach both small and large customers by offering an easy-to-use interface and a smooth buying experience.",
    },
    {
      id: "2",
      title: "4lamaat Cleaning Services Website",
      description: "4lamaat is a cleaning services company in Saudi Arabia that needed a simple, user-friendly website to allow customers to book cleaning services online. I developed a website with a custom slot booking system that enabled users to choose their preferred date and time for cleaning services.The website is fully responsive and provides an intuitive interface for customers to browse the available services, book a slot, and make inquiries about specific cleaning packages. The platform also handles domain and hosting setup, ensuring smooth performance.",
      link: "https://ankit3028k.github.io/4lamaat/", // Replace with actual link
      image: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/i7uvskt10buyko1teyzt", // Replace with actual image link
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Slot Booking System: Customers can select their preferred date and time for cleaning services.",
        "Responsive Design: Optimized for both desktop and mobile devices.",
        "Online Service Booking: Easy and quick booking process with minimal user input.",
        "Domain and Hosting Setup: Managed the domain and hosting, ensuring a smooth online presence"],
      additionalInfo: "This project allowed me to explore the service industry and develop a website that directly meets customer needs. The client was very satisfied with the results and the ongoing support for updates.",
    },
    {
      id: "4",
      title: "ICJ24 News Website",
      description: "ICJ24 is a dynamic news website built using the MERN stack (MongoDB, Express.js, React, Node.js). The website is designed to deliver live news updates in real-time, offering users an up-to-date and responsive interface. The news is fetched from APIs, and the website's layout adjusts dynamically based on the device used.The website features a simple and clean UI/UX design, focusing on a seamless user experience, ensuring that visitors can easily browse and read the latest news. The real-time news feed is updated automatically without the need to refresh the page, thanks to WebSocket technology.",
      link: "https://icj24.vercel.app/",
      image: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/yyupgycvmojqb329ck3u",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      features: [
        "Live News Feed: Displays the latest headlines and news stories.",
        "Real-Time Updates: News articles are updated automatically without needing to refresh the page.",
        "Responsive Layout: Optimized for both mobile and desktop users.",
        "Article Search: Allows users to search for specific news articles.",
        "User Authentication: Users can create accounts and save their preferences for news categories."
      ],
      additionalInfo: "This project was developed to provide a modern, responsive news platform using cutting-edge technologies like React and Vite, which provides faster build times and better performance. It also utilizes Node.js and Express.js for backend services, ensuring smooth API integrations.",
    },
    {
      id: "3",
      title: "Personal Portfolio",
      description: "This is my personal portfolio where I showcase my web development skills and highlight the projects I have worked on. It is a static site built using React and styled with Tailwind CSS for a modern, responsive layout. The portfolio includes a gallery of my projects, a showcase of my skills, and a contact form to get in touch with me.",
      link: "https://ankit3028k.netlify.app",
      image: "https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/projects/fe9znc7qzxq90ozbt0mm",
      technologies: ["React", "Tailwind CSS"],
      features: ["Project Gallery: A display of my projects with detailed descriptions and links to view them.",
         "Skillset Showcase: A section where I list my technical skills.",
          "Contact Form: A form that allows visitors to get in touch with me for freelance work or collaboration opportunities."],
      additionalInfo: "This portfolio serves as my professional online presence, showcasing my expertise in full-stack web development. It provides a clear view of my technical abilities, project experiences, and personal style.",
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
