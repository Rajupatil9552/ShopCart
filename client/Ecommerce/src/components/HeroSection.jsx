import React from "react";
import HeroImage from "../assets/heroImage1.png";

const HeroSection = () => {
  return (
    <section className="w-full py-24 bg-bg">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Text */}
        <div className="space-y-8 animate-fadeIn">
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-text">
            Upgrade Your Lifestyle
            <span className="block text-primary">Premium Products.</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg">
            Smart choices. Next-gen style. Premium quality — all in one place.
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-4 py-3 focus:outline-none text-lg"
            />
            <button className="bg-white h-full px-4 hover:bg-gray-100 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-gray-600">
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="bg-cta hover:bg-[#e00062] text-white text-lg font-medium px-8 py-4 rounded-lg transition">
              Shop Now
            </button>
            <button className="text-primary text-lg font-medium hover:underline">
              View Categories
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end animate-slideUp">
          <img
            src={HeroImage}
            alt="Shopping"
            className="w-[550px] max-w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Floating blurred background decoration */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default HeroSection;
