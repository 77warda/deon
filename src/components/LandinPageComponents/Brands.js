import React from "react";
import img1 from "../../assets/brand-logos/Client-img-1.png";
import img2 from "../../assets/brand-logos/Client-img-2.png";
import img3 from "../../assets/brand-logos/Client-img-3.png";
import img4 from "../../assets/brand-logos/Client-img-4.png";
import img5 from "../../assets/brand-logos/Client-img-5.png";
import img6 from "../../assets/brand-logos/Client-img-6.png";
function Brands() {
  const images = [
    { src: img1, text: "Video Labs" },
    { src: img2, text: "C MINOR" },
    { src: img3, text: "V A Team" },
    { src: img4, text: "Rooster Sound" },
    { src: img5, text: "Unfold" },
    { src: img6, text: "Generation" },
  ];
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="w-full md:w-[50%] lg:w-[50%]">
            <p className="text-gray-500 uppercase tracking-[5px] text-sm">
              Brands
            </p>
            <h2 className="text-5xl font-normal mt-2 leading-[50px] pr-20">
              Partners and Long-Term Clients
            </h2>
            <p className="text-base my-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do
              eiusmod
            </p>
            <button className="relative group uppercase tracking-widest text-xs px-14 py-5 text-black bg-transparent">
              {/* Gradient border container */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 p-[0.8px]">
                {/* Inner transparent button content */}
                <span className="flex h-full w-full items-center justify-center bg-white transition-all duration-300 group-hover:bg-transparent">
                  View More
                </span>
              </span>
              {/* Hover overlay for gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Text Layer (Ensures Text is Always Visible) */}
              <span className="relative group-hover:text-white transition-colors duration-300">
                View More
              </span>
            </button>
          </div>

          {/* Right Image */}
          <div className="justify-center grid grid-cols-1 lg:grid-cols-3">
            {images.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center"
              >
                {/* Show button only if text exists */}
                {item.text && (
                  <button className="w-auto md:w-auto lg:w-full absolute top-0 text-gray-500 bg-gray-50 px-7 py-4 uppercase tracking-[5px] text-sm opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    {item.text}
                  </button>
                )}

                {/* Image */}
                <img
                  src={item.src}
                  alt="Partners"
                  className="mt-16 mx-auto max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
