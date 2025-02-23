import React, { useState } from "react";
import { FaPaperPlane, FaRobot } from "react-icons/fa";

function Gemini() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm AI Buddy. How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Function to send messages
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    // Simulating a bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm still learning! Stay tuned for AI-powered responses. 😊", sender: "bot" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chatbot Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaRobot size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <h2 className="text-lg font-semibold">AI Buddy</h2>
            <button onClick={() => setIsOpen(false)} className="text-white text-xl">&times;</button>
          </div>

          {/* Chat Messages */}
          <div className="h-64 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`px-4 py-2 rounded-lg max-w-[75%] text-sm ${
                  msg.sender === "user" 
                    ? "bg-blue-500 text-white" 
                    : "bg-gray-200 text-gray-900"
                }`}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex items-center border-t p-2">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type a message..." 
              className="flex-1 p-2 border rounded-md outline-none"
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button 
              onClick={sendMessage} 
              className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gemini;
