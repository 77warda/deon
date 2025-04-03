import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true, // Enables autoplay
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // Screens smaller than 1024px
      settings: {
        slidesToShow: 2,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 768, // Screens smaller than 768px (tablets)
      settings: {
        slidesToShow: 1,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 480, // Screens smaller than 480px (mobile)
      settings: {
        slidesToShow: 1,
        dots: false, // Hide dots on small screens if needed
        arrows: false,
      },
    },
  ],
};

const sections = [
  {
    id: 1,
    title: "Digital Design",
    imageUrl: "https://picsum.photos/id/1018/1000/600/",
  },
  {
    id: 2,
    title: "Web Development",
    imageUrl: "https://picsum.photos/id/1020/1000/600/",
  },
  {
    id: 3,
    title: "UI/UX Design",
    imageUrl: "https://picsum.photos/id/1025/1000/600/",
  },
];
function InnovationBranding() {
  return (
    <>
      <section className="">
        <h6 className="text-gray-500 uppercase tracking-widest text-sm">
          Portfolio
        </h6>
        <h2 className="w-full md:w-[50%] lg:w-[30%] f-family text-5xl md:text-5xl lg:text-5xl font-normal mt-2">
          Innovation and Digital Branding
        </h2>

        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"> */}
        <div className="mt-8 w-full">
          <div className="w-full py-10">
            <Slider {...settings} className="w-full">
              {sections.map((review, id) => (
                <div key={id} className="px-3 py-3">
                  <div className="col-span-12">
                    <div className="relative group">
                      <div className="relative group">
                        <div className="overflow-hidden">
                          <div className="opacity-1 transition-all duration-500 ease-in-out">
                            <img
                              src="https://picsum.photos/id/1018/1000/600/"
                              alt="titleImage"
                              className="w-full object-cover object-center transform scale-105 group-hover:scale-100 transition-all duration-1000 ease-in-out"
                            />
                          </div>
                        </div>
                        <div className="absolute inset-0 group-hover:bg-white opacity-50"></div>
                      </div>

                      <p className="text-4xl font-normal mt-3">
                        Digital Design
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default InnovationBranding;
