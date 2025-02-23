import React, { useState } from "react";
import logo from "../Assets/logo.png"; // Importing logo directly

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#F9F8F4] px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-gray-700 text-lg">
        <a href="#" className="hover:text-black transition">Home</a>
        <a href="#" className="hover:text-black transition">About Us</a>

        {/* Dropdown Menu */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="hover:text-black transition focus:outline-none">
            Features
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Personalized Learning Paths</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Adaptive Mock Tests</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Real-Time Feedback</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Progress Tracking</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Career Guidance</a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-black transition">AI Buddy 🧠</a>
      </div>

      {/* Button */}
      <div>
        <button className="px-4 py-2 border border-gray-600 text-gray-700 rounded-full hover:bg-gray-100 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
