import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    features: [
      'Up to 10 team members',
      '5GB storage',
      'Basic automation',
      'Email support',
      'API access'
    ]
  },
  {
    name: 'Professional',
    price: '79',
    popular: true,
    features: [
      'Up to 50 team members',
      '50GB storage',
      'Advanced automation',
      'Priority support',
      'API access',
      'Advanced analytics',
      'Custom integrations'
    ]
  },
  {
    name: 'Enterprise',
    price: '199',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom automation',
      '24/7 phone support',
      'API access',
      'Advanced analytics',
      'Custom integrations',
      'Dedicated account manager'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that's right for your team
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-white rounded-xl ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-lg' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-blue-500 text-white text-sm rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="ml-2 text-gray-600">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`mt-8 w-full py-3 px-6 rounded-full ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                } transition-colors`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}