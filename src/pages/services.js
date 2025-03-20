import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

// Importing React Icons for better compatibility
import { FaLaptopCode, FaPaintBrush, FaCode, FaGamepad, FaFileCode } from "react-icons/fa";
import { SiCanva } from "react-icons/si";

const servicesData = [
  {
    id: 1,
    icon: <FaLaptopCode className="service_icon text-[#007bff] text-4xl mb-4" />,
    title: "Web Development",
    description: "Building modern, responsive, and high-performance websites to enhance your online presence."
  },
  {
    id: 4,
    icon: <SiCanva className="service_icon text-[#007bff] text-4xl mb-4" />,
    title: "Web Design",
    description: "Crafting visually appealing and user-friendly website designs that captivate and engage users."
  },
  {
    id: 5,
    icon: <FaFileCode className="service_icon text-[#007bff] text-4xl mb-4" />,
    title: "API Development & Integration",
    description: "Developing custom APIs and integrating third-party services to enhance your application's functionality."
  },
  {
    id: 6,
    icon: <FaLaptopCode className="service_icon text-[#007bff] text-4xl mb-4" />,
    title: "E-commerce Solutions",
    description: "Designing and developing custom e-commerce websites with secure payment systems, product management, and user authentication."
  },
  {
    id: 7,
    icon: <FaCode className="service_icon text-[#007bff] text-4xl mb-4" />,
    title: "Backend Development",
    description: "Building scalable backend systems using Node.js, Express.js, and databases like MongoDB and PostgreSQL."
  },
  {
    id: 8,
    icon: <FaGamepad className="service_icon text-[#007bff] text-4xl mb-4" />,
    title: "Real-Time Applications",
    description: "Developing real-time applications like chat systems, notifications, and live data updates with WebSockets and Socket.IO."
  },
  {
    id: 10,
    icon: <FaCode className="service_icon text-[#007bff] text-4xl mb-4" />,
    title: "Website Maintenance & Bug Fixing",
    description: "Offering ongoing support for websites, fixing bugs, and ensuring optimal performance across devices and browsers."
  }
];

const Services = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="text-center w-full max-w-7xl px-4 mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">My Services</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide on small screens
            },
            768: {
              slidesPerView: 2, // 2 slides on medium screens
            },
            1024: {
              slidesPerView: 3, // 3 slides on larger screens
            },
          }}
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="card_data bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                {service.icon}
                <h3 className="card_name text-white text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="card_description text-gray-400">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
