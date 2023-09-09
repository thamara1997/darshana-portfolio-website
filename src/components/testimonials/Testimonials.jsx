import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className="client__name">Brianwacker</h5>
          <small className="client__review">
            Very patient and professional! Clean work,He did it in quick time
            and without a ton of guidance on what we wanted. Overall good
            experience. I love it!Amazing Job!!! Thank you for everything.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Rangana Wijewickrama</h5>
          <small className="client__review">
            Darshana's exceptional web design skills and creativity, coupled
            with his excellent communication and technical expertise, made the
            project a seamless and user-friendly platform, highly recommended
            for their dedication to client satisfaction.-LiberBin
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className="client__name">Chamith Viduranga</h5>
          <small className="client__review">
            I've worked with him for a few years and he's as thorough and
            professional as they come. And he has helped me to build our
            professional website for MUSICOLA Music Production Company. I Would
            recommend using him to do your job perfect as you wish.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className="client__name">Aleesha Meth</h5>
          <small className="client__review">
            Fantastic designer. He was happy to keep going until I was
            completely satisfied. Have just booked him for more! Brilliant.Has
            great communication, high quality, responds fast so I would
            recommend using him like I will again in the future.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
