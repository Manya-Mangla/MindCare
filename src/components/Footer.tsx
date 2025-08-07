import React from 'react';
import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const resources = [
    { name: 'National Institute of Mental Health', url: '#' },
    { name: 'World Health Organization', url: '#' },
    { name: 'Mental Health Foundation', url: '#' },
    { name: 'Crisis Text Line', url: '#' }
  ];

  const quickLinks = [
    { name: 'About Mental Health', href: '#about' },
    { name: 'Statistics', href: '#statistics' },
    { name: 'SDG Connection', href: '#sdg' },
    { name: 'Chat Support', href: '#chatbot' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-2 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                MindCare
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A safe space dedicated to mental wellness, support, and healing. 
              Together, we can break the stigma and build a mentally healthier world.
            </p>
            <div className="flex space-x-3">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm flex items-center space-x-1"
                  >
                    <span>{resource.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency Contacts</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-red-900/30 p-3 rounded-lg border border-red-800">
                <p className="text-red-300 font-medium mb-2">Crisis Helplines (India)</p>
                <div className="space-y-1 text-red-200">
                  <p>Vandrevala: +91 96203 90405</p>
                  <p>iCALL: +91 92275 02424</p>
                  <p>Sneha: +91 44 2464 0050</p>
                </div>
              </div>
              <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-800">
                <p className="text-blue-300 font-medium mb-1">International</p>
                <p className="text-blue-200 text-xs">
                  Visit your country's mental health crisis resources
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 MindCare. Built with care for mental wellness.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Terms of Service
              </a>
              <div className="flex items-center space-x-1 text-gray-400">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made for mental health awareness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;