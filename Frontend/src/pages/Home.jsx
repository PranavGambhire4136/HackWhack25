import React from 'react';
import heroig from "../Assets/herologo.png";

function Home() {
  return (
    <div className="w-full flex items-center justify-center px-4 mb-8">
      <section className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="pt-16 md:w-1/2 text-center md:text-left pb-2">
          <div className="flex flex-row pb-6">
            <p className="text-black font-semibold text-5xl">Welcome to</p>
            <p className="text-[#191C2D] font-semibold text-5xl">&nbsp;prepMate</p>
            <p className="text-red-800 font-semibold text-5xl">.</p>
            <p className="text-[#1B5465] font-semibold text-5xl">ai</p>
          </div>

          <h1 className="text-gray-600 indent-8 text-lg leading-tight">
            Revolutionize Your Exam Preparation with AI-Powered Personalized Learning. 
            Get tailored study plans, real-time feedback, and expert guidance to ace your competitive exams.
          </h1>

          {/* Button */}
          <a href="#">
            <button className="border mt-6 px-6 py-3 text-[#1B5465] font-semibold text-lg rounded-full shadow-md 
              hover:bg-[#011fc5] hover:text-white transition">
              Get Started
            </button>
          </a>
        </div>

        {/* Right Content (Image) */}
        <div className="pt-30 md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img 
            src={heroig} 
            alt="AI Buddy" 
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
