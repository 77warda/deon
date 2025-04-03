import React, { useState } from "react";
import img from "../../assets/Home-6-img-1.jpg";

function Expertise() {
  const [activeTab, setActiveTab] = useState("Design");
  return (
    <>
      <div class="py-16 grid grid-cols-12 items-center">
        <div class="col-span-12 md:col-span-12 lg:col-span-7 w-full">
          <img
            src={img}
            alt="Team"
            class="w-full h-[30vh] md:h-[75vh] lg:h-[75vh] object-cover"
          />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-5 p-7 mt-4 md:mt-10 lg:mt-10 lg:mt-0 w-full md:w-[65%] lg:w-[65%] px-5 md:px-10 lg:px-10">
          <h1 className="text-gray-500 uppercase tracking-[5px] text-sm">
            Expertise
          </h1>
          <h2 className="text-5xl font-normal mt-2 leading-[50px] pr-5 md:pr-20 lg:pr-20">
            Achieve Success With Our Team
          </h2>

          <div className="w-full md:max-w-full px-5 lg:max-w-lg mx-auto">
            {/* Tabs */}
            <div className="flex justify-between mt-6 border-b border-[#6EC1D0]">
              {["Design", "Marketing", "Devs"].map((tab) => (
                <button
                  key={tab}
                  className="relative tracking-wide pb-2 text-2xl font-normal transition-all duration-300 text-black"
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {/* Animated Border */}
                  <span
                    className={`absolute left-0 -bottom-[1px] h-[1.5px] bg-black transition-all duration-500 ${
                      activeTab === tab ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4 text-lg text-gray-700">
              {activeTab === "Design" && (
                <div>
                  <p className="text-base mt-4 text-gray-900">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    nisi ut aliquip ex ea commodo. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse.
                  </p>

                  <ul className="text-base mt-4 text-gray-900 space-y-2 list-disc pl-5">
                    <li>Lorem ipsum dolor est.</li>
                    <li>Aliquam lorem ante.</li>
                    <li>Phasellus viverra nulla.</li>
                    <li>Curabitur ullamcorper.</li>
                  </ul>
                </div>
              )}
              {activeTab === "Marketing" && (
                <div>
                  <p className="text-base mt-4 text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod reus tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam.
                  </p>

                  <ul className="text-base mt-4 text-gray-900 space-y-2 list-disc pl-5">
                    <li>Maecenas nec odio ante.</li>
                    <li>Etiam amet orci eget.</li>
                    <li>Phasellus nec tincidunt.</li>
                    <li>Commodo ligula dolor.</li>
                  </ul>
                </div>
              )}
              {activeTab === "Devs" && (
                <div>
                  <p className="text-base mt-4 text-gray-900">
                    Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi.
                  </p>

                  <ul className="text-base mt-4 text-gray-600 space-y-2 list-disc pl-5">
                    <li>Donec pede justo, fringilla.</li>
                    <li>Viverra quis, feugiat tellus.</li>
                    <li>Aenean commodo eget dolor.</li>
                    <li>Etiam orci eget eros.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertise;
