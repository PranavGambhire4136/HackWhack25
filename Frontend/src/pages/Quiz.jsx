import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';

// Quiz data
const questionsByCategory = {
  NEET: [
    {
      question: "What is the chemical formula of water?",
      options: ["CO2", "H2O", "O2", "NaCl"],
      answer: "H2O"
    },
    {
      question: "Which cell organelle is known as the 'powerhouse of the cell'?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
      answer: "Mitochondria"
    },
    {
      question: "What is the atomic number of Carbon?",
      options: ["6", "7", "8", "9"],
      answer: "6"
    },
    {
      question: "Which blood group is known as the universal donor?",
      options: ["A", "B", "AB", "O"],
      answer: "O"
    },
    {
      question: "Which enzyme is responsible for the digestion of proteins in the stomach?",
      options: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
      answer: "Pepsin"
    },
    {
      question: "What is the chemical formula of glucose?",
      options: ["C6H12O6", "C12H22O11", "C2H5OH", "CH4"],
      answer: "C6H12O6"
    },
    {
      question: "Which part of the plant is responsible for photosynthesis?",
      options: ["Root", "Stem", "Leaf", "Flower"],
      answer: "Leaf"
    },
    {
      question: "What is the chemical formula of table salt?",
      options: ["NaCl", "H2O", "CO2", "HCl"],
      answer: "NaCl"
    },
    {
      question: "Which gas is essential for respiration?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Oxygen"
    },
    {
      question: "What is the chemical formula of sulfuric acid?",
      options: ["H2SO4", "CO2", "H2O", "NaCl"],
      answer: "H2SO4"
    },
    {
      question: "Which part of the human eye is responsible for vision?",
      options: ["Cornea", "Retina", "Lens", "Iris"],
      answer: "Retina"
    },
    {
      question: "What is the chemical formula of ammonia?",
      options: ["NH3", "CO2", "H2O", "NaCl"],
      answer: "NH3"
    },
    {
      question: "Which part of the human body produces insulin?",
      options: ["Liver", "Pancreas", "Kidney", "Stomach"],
      answer: "Pancreas"
    },
    {
      question: "What is the chemical formula of carbon dioxide?",
      options: ["CO2", "H2O", "O2", "NaCl"],
      answer: "CO2"
    },
    {
      question: "Which part of the human body is affected by malaria?",
      options: ["Liver", "Lungs", "Kidney", "Heart"],
      answer: "Liver"
    }
  ],
  JEE: [
    {
      question: "What is the SI unit of force?",
      options: ["Joule", "Newton", "Pascal", "Watt"],
      answer: "Newton"
    },
    {
      question: "What is the value of sin(90°)?",
      options: ["0", "1", "-1", "0.5"],
      answer: "1"
    },
    {
      question: "What is the derivative of x²?",
      options: ["x", "2x", "x³", "2x²"],
      answer: "2x"
    },
    {
      question: "What is the formula for kinetic energy?",
      options: ["mv", "½mv²", "mgh", "F·d"],
      answer: "½mv²"
    },
    {
      question: "What is the speed of light in vacuum?",
      options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3×10² m/s"],
      answer: "3×10⁸ m/s"
    },
    {
      question: "What is the value of log₁₀(100)?",
      options: ["1", "2", "10", "100"],
      answer: "2"
    },
    {
      question: "What is the unit of electric charge?",
      options: ["Volt", "Ampere", "Coulomb", "Ohm"],
      answer: "Coulomb"
    },
    {
      question: "What is the value of cos(60°)?",
      options: ["0", "0.5", "1", "√3/2"],
      answer: "0.5"
    },
    {
      question: "What is the unit of power?",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      answer: "Watt"
    },
    {
      question: "What is the derivative of sin(x)?",
      options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
      answer: "cos(x)"
    },
    {
      question: "What is the formula for gravitational force?",
      options: ["F = ma", "F = G(m₁m₂)/r²", "F = ½mv²", "F = kx"],
      answer: "F = G(m₁m₂)/r²"
    },
    {
      question: "What is the unit of frequency?",
      options: ["Joule", "Hertz", "Watt", "Pascal"],
      answer: "Hertz"
    },
    {
      question: "What is the value of π (approximately)?",
      options: ["3.14", "3.41", "3.12", "3.44"],
      answer: "3.14"
    },
    {
      question: "What is the unit of pressure?",
      options: ["Joule", "Newton", "Pascal", "Watt"],
      answer: "Pascal"
    },
    {
      question: "What is the formula for work done?",
      options: ["W = F·d", "W = ½mv²", "W = mgh", "W = P·t"],
      answer: "W = F·d"
    }
  ],
  GATE: [
    {
      question: "What is the time complexity of bubble sort?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(n³)"],
      answer: "O(n²)"
    },
    {
      question: "Which data structure follows LIFO principle?",
      options: ["Queue", "Stack", "Linked List", "Tree"],
      answer: "Stack"
    },
    {
      question: "What is the default port for HTTP?",
      options: ["80", "443", "8080", "3000"],
      answer: "80"
    },
    {
      question: "Which sorting algorithm has the best average case performance?",
      options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
      answer: "Quick Sort"
    },
    {
      question: "What is the purpose of Virtual Memory?",
      options: [
        "To increase RAM",
        "To extend physical memory using disk space",
        "To cache processor instructions",
        "To store temporary files"
      ],
      answer: "To extend physical memory using disk space"
    },
    {
      question: "Which protocol is used for secure web browsing?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      answer: "HTTPS"
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
      answer: "O(log n)"
    },
    {
      question: "Which layer of the OSI model handles routing?",
      options: ["Network Layer", "Transport Layer", "Data Link Layer", "Physical Layer"],
      answer: "Network Layer"
    },
    {
      question: "What is normalization in databases?",
      options: [
        "Data encryption",
        "Data compression",
        "Organizing data to reduce redundancy",
        "Data backup"
      ],
      answer: "Organizing data to reduce redundancy"
    },
    {
      question: "Which is not a type of process scheduling algorithm?",
      options: ["Round Robin", "FCFS", "Quick Sort", "Priority Scheduling"],
      answer: "Quick Sort"
    },
    {
      question: "What is the purpose of a Primary Key in a database?",
      options: [
        "To encrypt data",
        "To uniquely identify records",
        "To sort data",
        "To compress data"
      ],
      answer: "To uniquely identify records"
    },
    {
      question: "Which is not a type of network topology?",
      options: ["Star", "Ring", "Binary Tree", "Bus"],
      answer: "Binary Tree"
    },
    {
      question: "What is the purpose of DNS?",
      options: [
        "Domain name to IP address resolution",
        "Data encryption",
        "File transfer",
        "Email service"
      ],
      answer: "Domain name to IP address resolution"
    },
    {
      question: "Which is not a type of software testing?",
      options: ["Unit Testing", "Integration Testing", "Quick Testing", "System Testing"],
      answer: "Quick Testing"
    },
    {
      question: "What is the purpose of an IP address?",
      options: [
        "To identify devices on a network",
        "To encrypt data",
        "To compress data",
        "To store data"
      ],
      answer: "To identify devices on a network"
    }
  ]
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (category) {
      setLoading(true);
      const loadQuestions = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        setQuestions(questionsByCategory[category]);
        setLoading(false);
      };
      loadQuestions();
    }
  }, [category]);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleAnswerClick = (answer) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < 14) { // 15 questions total (0-14)
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCategory(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="animate-spin text-blue-600">
          <Loader2 size={48} />
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Choose Your Assessment Category
          </h1>
          <div className="space-y-6">
            {(['NEET', 'JEE', 'GATE']).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className="w-full py-6 px-8 text-xl font-bold rounded-xl transition-all
                         bg-white border-2 border-blue-500 text-blue-600
                         hover:bg-blue-500 
                         focus:ring-4 focus:ring-blue-200
                         shadow-md hover:shadow-xl transform hover:-translate-y-1
                         flex items-center justify-between"
              >
                <span>{cat}</span>
                <svg 
                  className="w-6 h-6 transition-transform transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showScore) {
    const percentage = (score / 15) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <Trophy className="mx-auto text-yellow-500 mb-4" size={64} />
          <h2 className="text-2xl font-bold mb-4">Assessment Complete!</h2>
          <p className="text-4xl font-bold text-blue-600 mb-4">{percentage}%</p>
          <p className="text-lg mb-6">
            You scored {score} out of 15 questions correctly
          </p>
          <button
            onClick={restartQuiz}
            className="flex items-center justify-center gap-2 mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-colors"
          >
            <RotateCcw size={20} />
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / 15) * 100}%` }}
          ></div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-medium text-gray-500">
            Question {currentQuestion + 1} of 15
          </span>
          <span className="text-sm font-medium text-gray-500">
            Score: {score}
          </span>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {questions[currentQuestion]?.question || "Loading question..."}
          </h2>
          
          <div className="space-y-3">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={isAnswered}
                className={`w-full p-4 text-left rounded-lg transition-all
                          ${
                            isAnswered
                              ? option === questions[currentQuestion].answer
                                ? 'bg-green-100 border-green-500'
                                : option === selectedAnswer
                                ? 'bg-red-100 border-red-500'
                                : 'bg-gray-100 border-gray-300'
                              : 'bg-gray-100 hover:bg-gray-200 border-gray-300'
                          }
                          border-2`}
              >
                <div className="flex items-center">
                  {isAnswered && option === questions[currentQuestion].answer && (
                    <CheckCircle2 className="text-green-500 mr-2" size={20} />
                  )}
                  {isAnswered && option === selectedAnswer && option !== questions[currentQuestion].answer && (
                    <XCircle className="text-red-500 mr-2" size={20} />
                  )}
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;