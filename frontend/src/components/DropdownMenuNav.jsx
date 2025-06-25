"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineDown,
} from "react-icons/ai";
import { FaBlog, FaExchangeAlt, FaQuestionCircle } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown Trigger */}
      <button className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-50">
        <AiOutlineMenu className="mr-2" />
        <span className="font-medium">Menu</span>
        <AiOutlineDown
          className={`ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-200 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="py-2">
          <Link
            to="/about"
            className="flex items-center px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
          >
            <AiOutlineHome className="mr-3 text-lg" />
            <span className="font-medium">Our Story</span>
          </Link>
          <Link
            to="/support"
            className="flex items-center px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
          >
            <FcSupport className="mr-3 text-lg" />
            <span className="font-medium">Customer Support</span>
          </Link>

          <Link
            to="/blog"
            className="flex items-center px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
          >
            <FaBlog className="mr-3 text-lg" />
            <span className="font-medium">Blog</span>
          </Link>
          <Link
            to="/faq"
            className="flex items-center px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
          >
            <FaQuestionCircle className="mr-3 text-lg" />
            <span className="font-medium">FAQ</span>
          </Link>
          <Link
            to="/returns-exchanges"
            className="flex items-center px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
          >
            <FaExchangeAlt className="mr-3 text-lg" />
            <span className="font-medium">Returns & Exchanges</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
