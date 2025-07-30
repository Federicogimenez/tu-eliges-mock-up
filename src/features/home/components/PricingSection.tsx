import React from 'react';
import { useAllyContext } from '../../../hooks/useAllyContext';

export const PricingSection: React.FC = () => {
  const { allyData } = useAllyContext();

  const finalPrice = allyData.new_price_after_discount || 48;
  const discount = allyData.discount_percent || 0;
  const originalPrice = 48;

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Share the Savings
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Enjoy More Together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                <p className="text-gray-500 dark:text-gray-400">Family Savings Image</p>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="order-1 lg:order-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Annual Membership
                </h3>
                {discount > 0 && (
                  <div className="mb-4">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                      {discount}% OFF with code {allyData.alliedCuponCode}
                    </span>
                  </div>
                )}
              </div>

              <div className="text-center mb-6">
                {discount > 0 && (
                  <div className="text-lg text-gray-500 dark:text-gray-400 line-through mb-1">
                    ${originalPrice}
                  </div>
                )}
                <div className="text-4xl font-bold text-blue-uchooseit mb-2">
                  ${finalPrice}
                </div>
                <p className="text-gray-600 dark:text-gray-400">per year</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="text-green-500 mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Up to 50% off at thousands of stores</span>
                </div>
                <div className="flex items-center">
                  <div className="text-green-500 mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Unlimited usage for whole family</span>
                </div>
                <div className="flex items-center">
                  <div className="text-green-500 mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Mobile app access</span>
                </div>
                <div className="flex items-center">
                  <div className="text-green-500 mr-3">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">24/7 customer support</span>
                </div>
              </div>

              <button className="w-full btn-gradient text-lg py-4">
                Get My Membership Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};