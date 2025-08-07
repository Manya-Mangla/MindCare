import React from 'react';
import { Brain, Users, Shield, Lightbulb, Heart, Star } from 'lucide-react';

const MentalHealthInfo: React.FC = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Cognitive Function',
      description: 'Better decision-making, improved memory, and enhanced problem-solving abilities.'
    },
    {
      icon: Users,
      title: 'Social Connections',
      description: 'Stronger relationships, better communication, and increased empathy towards others.'
    },
    {
      icon: Shield,
      title: 'Emotional Resilience',
      description: 'Better stress management, emotional regulation, and ability to bounce back from challenges.'
    },
    {
      icon: Lightbulb,
      title: 'Personal Growth',
      description: 'Increased self-awareness, personal development, and a clearer sense of purpose.'
    }
  ];

  const signs = [
    'Persistent sadness or low mood',
    'Loss of interest in activities',
    'Changes in sleep patterns',
    'Difficulty concentrating',
    'Social withdrawal',
    'Changes in appetite or weight',
    'Feeling overwhelmed or hopeless',
    'Physical symptoms without clear cause'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full mb-4">
            <Heart className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <span className="text-orange-600 dark:text-orange-400 font-medium">Mental Health Awareness</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Why Mental Health
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"> Matters</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mental health is just as important as physical health. It affects how we think, feel, 
            and interact with the world around us.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 dark:border-gray-700"
            >
              <div className="bg-gradient-to-br from-orange-400 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Warning Signs Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100 dark:border-gray-700">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              <span className="text-pink-600 dark:text-pink-400 font-medium">Early Recognition</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Warning Signs to Watch For
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recognizing these signs early can help you or someone you care about get the support needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {signs.map((sign, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-orange-100 dark:border-gray-600"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {sign}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you're experiencing several of these signs, consider reaching out for support.
            </p>
            <a
              href="#chatbot"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Talk to Our Support Bot</span>
              <Heart className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthInfo;