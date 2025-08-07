import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Floating Icons */}
          <div className="relative">
            <div className="absolute -top-4 left-1/4 animate-bounce">
              <Heart className="w-8 h-8 text-pink-400 opacity-60" />
            </div>
            <div className="absolute -top-8 right-1/4 animate-pulse">
              <Sparkles className="w-6 h-6 text-purple-400 opacity-60" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Your Mental
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">
                Health Matters
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A safe space for mental wellness, support, and healing. 
              Connect with resources, understand the importance of mental health, 
              and take the first step towards a healthier mind.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#chatbot"
              className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Conversation
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
                💬
              </span>
            </a>
            
            <a
              href="#about"
              className="px-8 py-4 rounded-full font-semibold text-lg text-orange-600 dark:text-orange-400 border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { number: '1 in 4', label: 'People affected by mental health' },
              { number: '970M', label: 'People worldwide with mental disorders' },
              { number: '24/7', label: 'Support available here' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-100 dark:border-gray-700">
                <div className="text-3xl font-bold text-orange-500 dark:text-orange-400">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;