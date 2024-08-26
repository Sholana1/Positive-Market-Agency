import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState();

  const toggle = () => {
    console.log("Menu");

    setIsOpen(!isOpen);
  };

  const handleClickMenu = (name) => {
    setActiveItem(name);
    setIsOpen(false);
  };
  const menuItems = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
  ];
  return (
    <nav>
      {/* con */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* logo */}

          <a href="/">
            <img src="/logo.png" alt="" className="h-8" />
          </a>

          {/* nav item */}
          <div className="space-x-8 items-center hidden md:flex">
            {menuItems.map((item, index) => (
              <a
                onClick={() => handleClickMenu(item.name)}
                key={index}
                className={`text-black hover:bg-primary p-2 rounded-md hover:underline underline-offset-4 transition-all duration-300
                    ${
                      activeItem === item.name
                        ? "bg-primary text-black underline underline-offset-4"
                        : ""
                    }
                `}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="text-black border px-4 py-2 hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Request a qoute
            </a>
          </div>
          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggle}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <MdClose className="size-6" />
              ) : (
                <HiOutlineMenuAlt3 className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                onClick={() => handleClickMenu(item.name)}
                key={index}
                className={`block text-black hover:bg-primary p-2 rounded-md hover:underline underline-offset-4 transition-all duration-300
                    ${activeItem === item.name ? "text-primary" : ""}
                `}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-black border px-4 py-2 hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Request a qoute
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
