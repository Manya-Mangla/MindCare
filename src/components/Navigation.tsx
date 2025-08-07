import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Mental Health' },
    { href: '#statistics', label: 'Statistics' },
    { href: '#sdg', label: 'SDG Connection' },
    { href: '#chatbot', label: 'Chat Support' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-orange-100 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-2 rounded-full">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              MindCare
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-orange-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-gray-700 transition-all duration-200"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-orange-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 border border-orange-100 dark:border-gray-800">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800 font-medium transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;