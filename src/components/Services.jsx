import React from "react";
import { servicesData } from "../utils/services";
import LinkIcon from "../assets/link-icon.png";

const Services = () => {
  return (
    <section
      className="py-24 pt-16 bg-white
    "
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <h2 className="text-2xl font-bold bg-primary py-2 px-16 rounded-md">
            Services
          </h2>
          <p className="text-secondary md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est
            repellat modi magnam unde eveniet ea laborum, voluptatem eius fugit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191A23] cursor-pointer ${service.backgroundColor} ${service.textColor}`}
            >
              <div className="md:w-1/2 flex flex-col h-full justify-between">
                <button
                  className={`text-xl py-1.5 px-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foregroundColor}`}
                >
                  {service.title}
                </button>
                <a
                  href="#"
                  className={`flex items-center gap-4 rounded-md text-black hover:bg-opacity-80 hover:text-black py-2`}
                >
                  <img
                    src={LinkIcon}
                    alt="link"
                    className="size-6 rounded-full"
                  />
                  <span className="text-lg font-medium">Learn More</span>
                </a>
              </div>
              <div className="md:w-1/2 order-first md:order-last">
                <img
                  src={service.image}
                  className="w-full object-contain rounded-md pb-4"
                  alt="serImg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
