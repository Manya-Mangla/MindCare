import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, Bot, User, Loader } from 'lucide-react';
import { Message } from '../types';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m here to provide mental health support and guidance. How are you feeling today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://techveda.app.n8n.cloud/webhook/-incoming-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          timestamp: new Date().toISOString(),
          userId: 'user_' + Date.now()
        })
      });

      if (response.ok) {
        const data = await response.json();
        const botResponse = data.message || data.response;
        
        if (botResponse) {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: botResponse,
            isUser: false,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message to inform user of connection issues
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="chatbot" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-indigo-900/20 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">Mental Health Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Chat
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"> Support</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with our AI mental health support bot for guidance, resources, and a listening ear. 
            Remember, this is not a replacement for professional help.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-indigo-100 dark:border-gray-700 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">MindCare Support Bot</h3>
                <p className="text-indigo-100 text-sm">Here to listen and help 24/7</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                {!message.isUser && (
                  <div className="bg-gradient-to-br from-indigo-400 to-purple-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white ml-auto'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-2 opacity-70 ${
                    message.isUser ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>

                {message.isUser && (
                  <div className="bg-gradient-to-br from-gray-400 to-gray-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-indigo-400 to-purple-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Loader className="w-4 h-4 animate-spin text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Typing...</span>
                  </div>
                </div>
              </div>
            )}
            
          </div>

          {/* Input */}
          <div className="p-6 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 border-none"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
              This chatbot provides support but is not a substitute for professional mental health care. 
              In case of emergency, please contact your local crisis hotline.
            </p>
          </div>
        </div>

        {/* Emergency Resources */}
        <div className="mt-12 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6">
          <h4 className="font-bold text-red-800 dark:text-red-300 mb-3 text-lg">
            Crisis Resources (India)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-red-700 dark:text-red-300">
                <strong>Vandrevala Foundation:</strong> +91 96203 90405
              </p>
              <p className="text-red-700 dark:text-red-300">
                <strong>iCALL:</strong> +91 92275 02424
              </p>
            </div>
            <div>
              <p className="text-red-700 dark:text-red-300">
                <strong>Sneha Foundation:</strong> +91 44 2464 0050
              </p>
              <p className="text-red-700 dark:text-red-300">
                <strong>Sumaitri:</strong> +91 11 2338 9090
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;