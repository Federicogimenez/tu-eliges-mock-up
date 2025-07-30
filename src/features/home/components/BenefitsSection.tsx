import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const slides = [
  '/home/home-slide-1.svg',
  '/home/home-slide-2.svg',
  '/home/home-slide-3.svg',
  '/home/home-slide-4.svg'
];

const benefits = [
  {
    icon: '💰',
    title: 'Save $2,000+ per year',
    description: 'Up to 50% off on everyday purchases'
  },
  {
    icon: '🏪',
    title: 'Thousands of stores',
    description: 'Access to major brands and local businesses'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Whole family benefits',
    description: 'One membership covers everyone'
  },
  {
    icon: '📱',
    title: 'Easy mobile access',
    description: 'Use anywhere, anytime with our app'
  }
];

export const BenefitsSection: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
    },
    created(s) {
      setInterval(() => {
        s.next();
      }, 3000);
    },
  });

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            One membership
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real benefits for whole family
          </p>
        </div>

        {/* Image Slider */}
        <div className="mb-12">
          <div ref={sliderRef} className="keen-slider">
            {slides.map((slide, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🖼️</div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Slide {index + 1}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {slide}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};