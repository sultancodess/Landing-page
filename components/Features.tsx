import React from 'react';
import { Clock, Users, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Real-Time Updates',
    description: 'Stay in sync with your team with instant updates and notifications on project progress.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team members, share files, and communicate effectively.'
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Automate repetitive tasks and workflows to boost productivity and save time.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and advanced access controls.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything you need to manage projects effectively
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Powerful features to help your team succeed
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-500 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}