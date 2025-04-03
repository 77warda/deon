import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import digital1 from "../assets/bl-gallery-img11.jpg";
import digital2 from "../assets/bl-gallery-img12.jpg";

import { Link } from "react-router-dom";

import InnovationBranding from "../components/LandinPageComponents/InnovationBranding";
import Expertise from "../components/LandinPageComponents/Expertise";
import Brands from "../components/LandinPageComponents/Brands";

import Slider from "react-slick";

const images = [
  "https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];
const PrevArrow = ({ onClick }) => (
  <button
    className="flex items-center uppercase absolute bottom-5 right-20 z-10 text-white p-3 hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm tracking-[3px] transition"
    onClick={onClick}
  >
    PREV <p className="ml-2 h-[1px] w-36 bg-white"></p>
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="uppercase absolute bottom-5 right-5 z-10 text-white p-3 hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm tracking-[3px] transition"
    onClick={onClick}
  >
    Next
  </button>
);
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    fade: true,
    cssEase: "linear",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <>
      <Header />
      <div className="relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative h-[100vh] overflow-hidden">
              {/* Zoom-In on Odd Slides, Zoom-Out on Even Slides */}
              <div
                className={`absolute inset-0 w-full h-full transition-transform duration-[4000ms] ease-in-out ${
                  currentSlide % 2 === 0 ? "scale-100" : "scale-110"
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center container mx-auto px-6">
                <div className="w-full md:w-full lg:w-[30%] text-white max-w-md">
                  <h2 className="text-5xl md:text-7xl lg:text-7xl font-normal leading-snug uppercase">
                    Digital Agency for Creators
                  </h2>
                  <button className="relative text-sm uppercase tracking-[3px] mt-6 border border-white text-white px-12 py-4 bg-transparent hover:bg-white hover:border-transparent transition-all duration-300">
                    <span className="relative z-10 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-500 hover:to-sky-400 hover:bg-clip-text">
                      View More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* innovation and digital branding */}
      <section className="mt-28 mb-5 container mx-auto px-4 py-12">
        <InnovationBranding />
      </section>
      <div
        className="mt-28 mb-5 relative bg-cover bg-center h-[90vh] flex items-center bg-fixed"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div className="container mx-auto px-6">
          <div className="w-full md:w-full lg:w-[20%] text-white max-w-md">
            <h2 className="text-6xl font-normal leading-[5rem] uppercase">
              For all Your Web Solutions
            </h2>
            <p className="mt-4 text-base leading-[20px]">
              Lorem ipsum dolor sit amet, elit consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor futur
            </p>
            <button className="relative text-sm uppercase tracking-[3px] mt-6 border border-white text-white px-12 py-4 bg-transparent group hover:bg-white hover:border-transparent transition-all duration-300">
              <span className="relative z-10 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-500 group-hover:to-sky-400 group-hover:bg-clip-text">
                View More
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Digital Strategy */}
      <section className="mt-28 mb-5 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Blog Card */}
          <div className="space-y-4">
            <img
              src={digital1} // Replace with actual image URL
              alt="Digital Strategy"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-gray-400 uppercase text-sm tracking-widest">
              November 23, 2021 / Design
            </p>
            <h2 className="text-2xl font-bold">
              Digital Strategy Design and Solutions for Great Success
            </h2>
            <Link
              to="#"
              className="text-black flex items-center gap-2 group transition-all"
            >
              <span className="w-20 h-[0.5px] bg-blue-500 block transition-all duration-300 group-hover:w-0 group-hover:opacity-0"></span>
              <span className="transition-all duration-200 group-hover:-translate-x-2">
                READ MORE
              </span>
            </Link>
          </div>

          {/* Second Blog Card */}
          <div className="space-y-4">
            <img
              src={digital2} // Replace with actual image URL
              alt="Digital Design"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-gray-400 uppercase text-sm tracking-widest">
              November 23, 2021 / Design
            </p>
            <h2 className="text-2xl font-bold">
              Digital Design That Will Help You Start Your Business
            </h2>
            <Link
              to="#"
              className="text-black flex items-center gap-2 group transition-all"
            >
              <span className="w-20 h-[0.5px] bg-blue-500 block transition-all duration-300 group-hover:w-0 group-hover:opacity-0"></span>
              <span className="transition-all duration-200 group-hover:-translate-x-2">
                READ MORE
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* Expertise section start here*/}
      <section className="mt-28 mb-5">
        <Expertise />
      </section>

      {/* Brands logo  */}
      <section className="mt-28 mb-40">
        <Brands />
      </section>
      <Footer />
    </>
  );
};

export default Home;
