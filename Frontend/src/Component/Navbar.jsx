import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { ChevronDown } from "lucide-react"; // Import dropdown icon
import { Link} from "react-router-dom";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="z-10 bg-[#F9F8F4] px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to={"/"} className="hover:text-black transition">
        <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <a href="f" className="hover:text-black transition">About Us</a>
    

        {/* Dropdown Menu */}
        <div className="relative">
          <button
            className="flex items-center gap-1 hover:text-black transition focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Features <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2">
              <Link to={"/1230"}  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Personalized Learning Paths</Link>
              <Link to={"/1230"}  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Adaptive Mock Tests</Link>
              <Link to={"/1230"}  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Real-Time Feedback</Link>
              <Link to={"/1230"}  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Progress Tracking</Link>
              <Link to={"/1230"}  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Career Guidance</Link>
            </div>
          )}
        </div>

        <Link to={"/1230"}  className="hover:text-black transition">AI Buddy 🧠</Link>
      </div>

      {/* Button */}
      <div>
        <Link to={"/auth"} className="px-4 py-2 border border-gray-600 text-gray-700 rounded-full transition hover:bg-black hover:text-black hover:border-black">
          Sign Up
      </Link>
    </div>

    </nav>
  );
}
