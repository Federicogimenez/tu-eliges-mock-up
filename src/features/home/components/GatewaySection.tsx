import React from 'react';
import { Link } from 'react-router-dom';

export const GatewaySection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            See how members save every day
          </h2>

          {/* Image */}
          <div className="mb-8">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto max-w-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-500 dark:text-gray-400">Member Savings Showcase</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Link 
              to="/product"
              className="inline-block btn-gradient text-lg px-8 py-4"
            >
              Learn More About Benefits
            </Link>
          </div>

          {/* Description Paragraphs */}
          <div className="max-w-2xl mx-auto space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              Join thousands of families who are already saving big on their everyday purchases. 
              From groceries to entertainment, our members enjoy exclusive discounts that add up 
              to real savings throughout the year.
            </p>
            <p>
              With over 1,000 participating brands and new partners joining every month, 
              your membership pays for itself in just a few purchases. Start your savings 
              journey today and see the difference it makes for your family budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};