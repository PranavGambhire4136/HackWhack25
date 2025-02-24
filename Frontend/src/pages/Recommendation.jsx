import React, { useState } from 'react';
import { BookOpen, Video, Globe, Clock, ChevronRight, Star, Calendar } from 'lucide-react';

function Recommendation() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const recommendations = [
    {
      title: "Khan Academy Physics Course",
      type: "video",
      category: "JEE",
      duration: "40 hours",
      rating: 4.8,
      link: "https://www.khanacademy.org/science/physics",
      description: "Comprehensive physics course covering mechanics, thermodynamics, and more",
      startDate: "Available Now"
    },
    {
      title: "NCERT Biology Complete Guide",
      type: "book",
      category: "NEET",
      duration: "50 hours",
      rating: 4.9,
      link: "https://ncert.nic.in/textbook.php",
      description: "Complete biology guide with detailed explanations and practice questions",
      startDate: "Available Now"
    },
    {
      title: "Data Structures Masterclass",
      type: "video",
      category: "GATE",
      duration: "35 hours",
      rating: 4.7,
      link: "https://www.geeksforgeeks.org/data-structures/",
      description: "In-depth coverage of data structures with practical examples",
      startDate: "Starts March 1"
    },
    {
      title: "Chemistry Foundation Course",
      type: "online",
      category: "NEET",
      duration: "45 hours",
      rating: 4.6,
      link: "https://byjus.com/neet/chemistry-syllabus/",
      description: "Structured chemistry course designed for NEET preparation",
      startDate: "Available Now"
    },
    {
      title: "Advanced Mathematics Problem Solving",
      type: "book",
      category: "JEE",
      duration: "60 hours",
      rating: 4.9,
      link: "https://www.iitjee.com/math-preparation/",
      description: "Advanced problem-solving techniques for JEE mathematics",
      startDate: "Available Now"
    },
    {
      title: "Operating Systems Course",
      type: "online",
      category: "GATE",
      duration: "30 hours",
      rating: 4.8,
      link: "https://www.gateacademy.com/os-notes",
      description: "Comprehensive OS concepts with GATE-specific focus",
      startDate: "Starts March 15"
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'video':
        return <Video className="w-6 h-6" />;
      case 'book':
        return <BookOpen className="w-6 h-6" />;
      case 'online':
        return <Globe className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  const filteredRecommendations = selectedCategory === 'all'
    ? recommendations
    : recommendations.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Personalized Learning Recommendations
          </h1>
          <p className="text-lg text-gray-600">
            Curated resources to help you excel in your studies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-8">
          {['all', 'NEET', 'JEE', 'GATE'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                } shadow-sm`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecommendations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg 
                  ${item.type === 'video' ? 'bg-red-100 text-red-600' :
                    item.type === 'book' ? 'bg-purple-100 text-purple-600' :
                    'bg-green-100 text-green-600'}`}
                >
                  {getIcon(item.type)}
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.duration}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4">
                {item.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.startDate}
                </div>
                <div className="flex items-center text-sm text-yellow-500">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  {item.rating}
                </div>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Start Learning
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>

              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full
                  ${item.category === 'NEET' ? 'bg-green-100 text-green-700' :
                    item.category === 'JEE' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'}`}
                >
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendation;