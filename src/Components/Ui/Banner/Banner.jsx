import React from "react";
import { FiPlay } from "react-icons/fi";
import bannerImg from "../../../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-purple-200 b rounded-full px-4 py-1.5 mb-8 bg-[#e1e7ff]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700 ">
                New: AI-Powered Tools Available
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-tight text-gray-900 mb-6">
              Supercharge Your{" "}
              <span className="bg-linear-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
                Digital Workflow
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-2">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            {/* Explore Products Link */}
            <a
              href="#products"
              className="text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors duration-200 inline-block mb-8"
            >
              Explore Products
            </a>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* Primary Button */}
              <a
                href="#explore"
                className="bg-linear-to-r from-purple-600 to-violet-500 text-white font-semibold text-sm px-7 py-3 rounded-full hover:shadow-lg hover:shadow-purple-300/50 hover:scale-105 transition-all duration-300"
              >
                Explore Products
              </a>

              {/* Watch Demo Button */}
              <a
                href="#demo"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold text-sm px-6 py-3 rounded-full hover:border-purple-400 hover:text-purple-600 hover:shadow-md transition-all duration-300"
              >
                <FiPlay className="w-4 h-4" />
                Watch Demo
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={bannerImg}
              alt="Digital workflow illustration"
              className="w-full max-w-lg lg:max-w-xl object-contain select-none"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
