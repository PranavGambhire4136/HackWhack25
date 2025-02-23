import React from 'react';
import heroig from "../Assets/herologo.png";

function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 mb-8">
      {/* Hero Section */}
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
                hover:text-blue-500 transition">
              Get Started
            </button>
          </a>
        </div>

        {/* Right Content (Image) */}
        <div className="pt-40 md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img 
            src={heroig} 
            alt="AI Buddy" 
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Downward Arrow Icon */}
      {/* <div className="pt-30 bottom-6 left-1/2 transform -translate-x-1/2 ">
        <a href="#next-section">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="#1B5465" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div> */}

      {/* New Features Section */}
      <section id="next-section" className="mt-40 pb-0 mb-0 w-full bg-gray-100 py-16 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#1B5465]">Why Choose prepMate.ai?</h2>
          <p className="mt-4 text-gray-600">
            Our AI-powered platform offers personalized learning, smart analytics, and expert guidance to help you 
            succeed in your exams with confidence.
          </p>

          {/* Feature Cards */}
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1B5465]">Personalized Learning Paths</h3>
              <p className="text-gray-600 mt-2">Get a study plan designed specifically for you, based on your strengths and weaknesses.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1B5465]">Adaptive Mock Tests</h3>
              <p className="text-gray-600 mt-2">Experience AI-driven mock tests that adjust difficulty based on your progress.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1B5465]">Real-Time Feedback</h3>
              <p className="text-gray-600 mt-2">Instant insights on your performance to help you improve quickly.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1B5465]">Progress Tracking</h3>
              <p className="text-gray-600 mt-2">Monitor your learning journey with detailed analytics and performance reports.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1B5465]">Career Guidance</h3>
              <p className="text-gray-600 mt-2">Get expert advice on career opportunities and skill development.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1B5465]">AI Chatbot for Doubt Solving</h3>
              <p className="text-gray-600 mt-2">Get instant answers to your questions with our AI-powered chatbot, available 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="slider-section" className="w-full bg-gray-100 py-1 mt-20 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#1B5465]">Unlock Your Potential with Our Exam Solutions</h2>
          <p className="mt-4 text-gray-600">Inspirational and aspirational, focusing on the transformative impact of your platform</p>

          <div className="mt-8 relative w-full overflow-hidden">
            <div className="flex space-x-6 animate-slide">
              {/* Slider Cards */}
              {[
                "GATE (Graduate Aptitude Test in Engineering)",
                " IIT/JEE (Indian Institutes of Technology/Joint Entrance Examination)",
                "NEET (National Eligibility cum Entrance Test)",
                "CAT (Common Admission Test)",
                "UPSC (Union Public Service Commission)",
                "Career guidance helped me choose the right path.",
                "CA (Chartered Accountancy)"
              ].map((testimonial, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md w-72 flex-shrink-0">
                  <p className="text-gray-600">{testimonial}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styling */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          display: flex;
          width: max-content;
          animation: slide 10s linear infinite;
        }
      `}</style>


<footer className=" pt-30" id='about Us'>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="text-black">Home</a></li>
            <li><a href="#" className="text-black">About Us</a></li>
            <li><a href="#" className="text-black">Features</a></li>
            <li><a href="#" className="text-black">Solutions</a></li>
            <li><a href="#" className="text-black">Testimonials</a></li>
            <li><a href="#" className="text-black">Blog</a></li>
            <li><a href="#" className="text-black">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 2: Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="text-black">FAQs</a></li>
            <li><a href="#" className="text-black">Privacy Policy</a></li>
            <li><a href="#" className="text-black">Terms of Service</a></li>
            <li><a href="#" className="text-black">Download App</a></li>
            <li><a href="#" className="text-black">Career Opportunities</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="">Email: support@prepMate.ai.com</p>
          <p className=""> Phone: +91 8624015466</p>
          <p className=""> Address: YCCE, Nagpur,India</p>
        </div>

        {/* Column 4: Social Media & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:text-blue-400">@aniket_ramteke<i className="fab fa-facebook text-2xl"></i></a>
            <a href="#" className="hover:text-blue-400">@aniket_wasnik<i className="fab fa-twitter text-2xl"></i></a>
       
          </div>

          {/* Newsletter */}
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <p className="">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="border-1 px-3 py-2 w-full text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-red-500 px-4  border-1 py-2 text-black rounded-r-md hover:text-blue-500">Subscribe</button>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} prepMate.ai | Design By Aniket Ramteke.
      </div>
    </footer>
      
    </div>
  );
}

export default Home;
