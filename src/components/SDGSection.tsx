import React from 'react';
import { Target, Users, Heart, Shield, Zap, Globe } from 'lucide-react';

const SDGSection: React.FC = () => {
  const sdgGoals = [
    {
      number: 3,
      title: 'Good Health and Well-being',
      description: 'Ensure healthy lives and promote well-being for all at all ages',
      icon: Heart,
      connection: 'Mental health is integral to overall health and well-being'
    },
    {
      number: 4,
      title: 'Quality Education',
      description: 'Ensure inclusive and equitable quality education',
      icon: Users,
      connection: 'Mental health affects learning capacity and educational outcomes'
    },
    {
      number: 8,
      title: 'Decent Work and Economic Growth',
      description: 'Promote sustained, inclusive economic growth',
      icon: Zap,
      connection: 'Mental health impacts workplace productivity and economic participation'
    },
    {
      number: 10,
      title: 'Reduced Inequalities',
      description: 'Reduce inequality within and among countries',
      icon: Shield,
      connection: 'Mental health stigma creates barriers and perpetuates inequality'
    }
  ];

  const targets = [
    '3.4: Reduce premature mortality from non-communicable diseases and promote mental health',
    '3.5: Strengthen prevention and treatment of substance abuse',
    '3.8: Achieve universal health coverage, including access to mental health services',
    '4.7: Ensure learners acquire knowledge and skills for sustainable development'
  ];

  return (
    <section id="sdg" className="py-20 bg-gradient-to-br from-blue-50 via-green-50/30 to-teal-50/30 dark:from-gray-900 dark:via-teal-900/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-4">
            <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400 font-medium">UN Sustainable Development Goals</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Mental Health &
            <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent"> SDGs</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mental health is directly connected to achieving the UN Sustainable Development Goals. 
            Investing in mental health is investing in a sustainable future for all.
          </p>
        </div>

        {/* SDG Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sdgGoals.map((goal, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-teal-100 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-green-400 to-teal-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <goal.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      SDG {goal.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {goal.description}
                  </p>
                  <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-4 rounded-lg border-l-4 border-teal-400">
                    <p className="text-teal-700 dark:text-teal-300 font-medium text-sm">
                      <strong>Connection:</strong> {goal.connection}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specific Targets */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-green-100 dark:border-gray-700">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-teal-100 dark:bg-teal-900/30 px-4 py-2 rounded-full mb-4">
              <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <span className="text-teal-600 dark:text-teal-400 font-medium">Specific Targets</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Key SDG Targets Related to Mental Health
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targets.map((target, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl border border-green-100 dark:border-green-800"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {target}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl">
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">
              Why Mental Health Matters for Sustainable Development:
            </h4>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                • <strong>Economic Impact:</strong> Depression and anxiety disorders cost the global economy US$ 1 trillion per year
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                • <strong>Education:</strong> Mental health issues can significantly impact learning and academic achievement
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                • <strong>Social Equity:</strong> Mental health stigma disproportionately affects marginalized communities
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                • <strong>Innovation:</strong> Good mental health enables creativity and innovation essential for sustainable solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;