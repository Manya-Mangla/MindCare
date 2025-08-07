import React from 'react';
import { TrendingUp, Globe, MapPin, AlertCircle } from 'lucide-react';

const Statistics: React.FC = () => {
  const globalStats = [
    {
      number: '970M',
      label: 'People worldwide living with mental health disorders',
      trend: '+25% since 2019'
    },
    {
      number: '1 in 4',
      label: 'People affected by mental health globally',
      trend: 'WHO Statistics'
    },
    {
      number: '12B',
      label: 'Working days lost annually due to depression & anxiety',
      trend: 'Economic impact'
    }
  ];

  const indiaStats = [
    {
      number: '197M',
      label: 'Indians suffering from mental health disorders',
      trend: '14.3% prevalence'
    },
    {
      number: '45.7M',
      label: 'People with depressive disorders in India',
      trend: 'Highest in South-East Asia'
    },
    {
      number: '0.75',
      label: 'Mental health professionals per 100,000 people',
      trend: 'WHO recommended: 3 per 100,000'
    }
  ];

  const ageStats = [
    { age: '15-29', percentage: '23%', description: 'Young adults most affected' },
    { age: '30-44', percentage: '19%', description: 'Working age challenges' },
    { age: '45-59', percentage: '16%', description: 'Mid-life transitions' },
    { age: '60+', percentage: '12%', description: 'Elderly mental health' }
  ];

  return (
    <section id="statistics" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-800 dark:via-purple-900/20 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 font-medium">Data & Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Mental Health
            <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent"> Statistics</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understanding the scope of mental health challenges helps us recognize 
            the importance of awareness and support.
          </p>
        </div>

        {/* Global Statistics */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <Globe className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Global Statistics</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {globalStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full inline-block">
                  {stat.trend}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* India Statistics */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <MapPin className="w-6 h-6 text-orange-500" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">India Statistics</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {indiaStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg border border-orange-100 dark:border-gray-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  {stat.label}
                </div>
                <div className="text-sm text-orange-500 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded-full inline-block">
                  {stat.trend}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Age Demographics */}
        <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 dark:border-gray-600">
          <div className="flex items-center space-x-2 mb-8">
            <AlertCircle className="w-6 h-6 text-purple-500" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Age Demographics Affected</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-600 dark:to-gray-500 rounded-2xl border border-purple-100 dark:border-gray-500"
              >
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {stat.percentage}
                </div>
                <div className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Age {stat.age}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl border-l-4 border-red-500">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                  Critical Gap in Mental Healthcare
                </h4>
                <p className="text-red-700 dark:text-red-200 text-sm">
                  India faces a severe shortage of mental health professionals, with only 0.75 per 100,000 people 
                  compared to WHO's recommended 3 per 100,000. This highlights the urgent need for accessible 
                  mental health resources and support systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;