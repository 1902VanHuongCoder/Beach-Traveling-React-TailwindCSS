import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [showNavbar, setShowNav] = useState(false);
  const handleShowNavbar = () => {
    setShowNav(!showNavbar);
    if (!showNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="absolute w-full h-[70px] bg-transparent flex justify-between items-center px-4 z-10">
      <div
        className={`text-white ${
          showNavbar ? "absolute z-10 text-2xl font-bold" : "text-2xl font-bold"
        }`}
      >
        Experiences
      </div>
      <ul
        className={`text-white flex flex-col md:flex-row items-center justify-center gap-y-3 bg-black/80 md:bg-transparent h-screen md:h-fit w-full md:w-fit fixed md:relative top-0 duration-500 ${
          showNavbar ? "left-0" : "left-[-100%] md:left-0"
        }`}
      >
        <li className="text-sm hover:opacity-80 md:px-4 md:font-semibold uppercase ">
          Home
        </li>
        <li className="text-sm hover:opacity-80 md:px-4 md:font-semibold uppercase ">
          About
        </li>
        <li className="text-sm hover:opacity-80 md:px-4 md:font-semibold uppercase ">
          Destination
        </li>
        <li className="text-sm hover:opacity-80 md:px-4 md:font-semibold uppercase ">
          Contact
        </li>
        <li className="text-sm hover:opacity-80 md:px-4 md:font-semibold uppercase ">
          Restaurants
        </li>
      </ul>
      <div
        onClick={handleShowNavbar}
        className={`block md:hidden text-white ${
          showNavbar ? "absolute right-4 z-10" : ""
        }`}
      >
        <FaBars className="text-lg " />
      </div>
    </div>
  );
};

export default Navbar;
