import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/swiper-bundle.css"; 
import { Navigation, Pagination } from "swiper/modules";

const Services = () => {
  return (
    <div className="container2 h-screen">
      <div className="text-center w-full max-w-7xl px-4">
        <h2 className="services-head">My Services</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          navigation
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="card_data">
              <i className="fas fa-laptop-code service_icon"></i>
              <h3 className="card_name">Web Development</h3>
              <p className="card_description">
                Building modern, responsive, and high-performance websites to enhance your online presence.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card_data">
              <i className="fas fa-paint-brush service_icon"></i>
              <h3 className="card_name">Canva Design</h3>
              <p className="card_description">
                Creating stunning graphics and designs using Canva to bring your ideas to life visually.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card_data">
              <i className="fas fa-code service_icon"></i>
              <h3 className="card_name">Coding</h3>
              <p className="card_description">
                Developing efficient and robust code solutions to solve complex problems and build amazing applications.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card_data">
              <i className="fab fa-canva service_icon"></i>
              <h3 className="card_name">Web Design</h3>
              <p className="card_description">
                Crafting visually appealing and user-friendly website designs that captivate and engage users.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card_data">
              <i className="fas fa-gamepad service_icon"></i>
              <h3 className="card_name">Game Design</h3>
              <p className="card_description">
                Designing immersive and engaging game experiences that entertain and challenge players.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
