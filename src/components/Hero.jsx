import React from "react";
import bannerImg from "../assets/banner.png";
import LogoCarousel from "./LogoCarousel";

const Hero = () => {
  return (
    <section className="bg-white pt-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2">
            <div className="md:w-2/3">
              <h1 className="text-4xl text-secondary font-bold mb-4">
                Navigating the digital landscape for success
              </h1>
              <p className="text-gray-600 mb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos reiciendis adipisci debitis libero esse fuga
                pariatur maxime ab nemo ratione.
              </p>
              <button className="inline-block px-6 py-3 bg-black text-white rounded-md font-semibold hover:bg-primary hover:text-black transition-all duration-300">
                Book a consultation
              </button>
            </div>
          </div>
          <div className="md:w-1/2 order-first md:order-last">
            <img src={bannerImg} alt="Hero image" className="w-full h-auto" />
          </div>
        </div>
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Hero;
