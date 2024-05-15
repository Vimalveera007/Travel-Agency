import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "../About/About.css";
import women1 from "../image/women1.jpg";
import women2 from "../image/women2.jpg";
import women3 from "../image/women3.jpg";
import women4 from "../image/women4.jpg";
import women5 from "../image/women5.jpg";
import women6 from "../image/women6.jpg";
import women7 from "../image/women7.jpg";
import women8 from "../image/women8.jpg";
import men1 from "../image/aboutimg.jpg"
import FQA from "../About/FQA";
import Plan from "./Plan";
import Footer from "../Navbar/Footer/Footer";
const About = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={women1} alt="" className="w-full h-screen object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={women2} alt="" className="w-full h-screen object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={women3} alt="" className="w-full h-screen object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={women4} alt="" className="w-full h-screen object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={women5} alt="" className="w-full h-screen object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={women6} alt="" className="w-full h-screen object-cover" />
        </SwiperSlide>
      </Swiper>

      <div className="conatiner">
        <h1 className="text-5xl text-extrabold py-5 text-center">About US</h1>
        <p className="text-3xl text-bold text-center py-5">
          Our mission is simple: to provide personalized, memorable, and
          hassle-free travel experiences. We aim to exceed our clients'
          expectations by offering tailored itineraries, expert guidance, and
          unparalleled customer service.
        </p>
        <p className="text-2xl text-bold py-5">Why Choose Us? </p>
        <FQA />
      </div>
      <div className="aboutpage">
      <div className="aboutcontent">
        <p>
          Welcome to Adventure Seekers, your gateway to unforgettable travel
          experiences. Our mission is to provide exceptional adventures, guided
          tours, and personalized travel services to adventurous souls seeking
          extraordinary journeys around the world.
        </p><br />
        <p>
          At Adventure Seekers, we understand that every traveler is unique,
          with their own interests and desires. That's why we offer a wide range
          of travel options, from thrilling outdoor expeditions to cultural
          explorations and relaxing getaways. Whether you're a solo traveler, a
          couple seeking a romantic retreat, or a family in search of fun-filled
          adventures, we have something for everyone.
        </p><br />
        <p>
          Our team consists of passionate travel experts who are dedicated to
          creating memorable experiences for our clients. We work tirelessly to
          ensure that every aspect of your journey is carefully planned and
          executed, from the moment you book your trip until you return home
          with unforgettable memories.
        </p><br />
        <p>
          With Adventure Seekers, you can explore the world with confidence,
          knowing that you're in the hands of experienced professionals who are
          committed to providing you with the ultimate travel experience. Let us
          help you turn your travel dreams into reality!
        </p><br />
        </div>
        <div className="aboutimg">
          <img src={men1} alt="" className="menimg"/>
        </div>
      </div>
      
       
     
      <h1 className="text-5xl text-extrabold py-5 text-center">Plan Details</h1>
      <Plan />
      <Footer />
    </>
  );
};

export default About;
