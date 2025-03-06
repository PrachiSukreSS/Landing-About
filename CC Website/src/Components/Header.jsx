import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaUsers,
  FaSignInAlt,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#11061f] py-4 px-8  w-full mx-auto mt-0">
      <nav className="flex justify-between items-center">
        {/* Logo or Brand Name */}

        <div className="text-2xl font-bold">
          <a href="/">
            <img src="logo3.png" alt="Logo" className="h-10" />
          </a>
        </div>
        {/* Navigation Links */}
        <div className="flex justify-start items-center space-x-4">
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-white hover:text-violet-500 flex items-center 
               "
            >
              <FaHome className="mr-1" /> Home
            </a>
            <a
              href="/about"
              className="text-white hover:text-violet-500   flex items-center "
            >
              <FaInfoCircle className="mr-1" /> About Us
            </a>
            <a
              href="/events"
              className="text-white hover:text-violet-500  rounded-md transition duration-300 flex items-center"
            >
              <FaCalendarAlt className="mr-1" /> Events
            </a>
            <a
              href="/team"
              className="text-white hover:text-violet-500 px-2 py-1 rounded-md transition duration-300 flex items-center"
            >
              <FaUsers className="mr-1" /> Our Team
            </a>
          </div>
          <a
            href="/login"
            className="bg-violet-700 px-3 py-1 rounded-md hover:bg-gray-500 transition duration-300 flex items-center"
          >
            <FaSignInAlt className="mr-1" /> Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
