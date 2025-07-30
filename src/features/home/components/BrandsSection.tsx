import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

// Placeholder brand logos
const topBrands = [
  'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5', 'Brand 6', 'Brand 7', 'Brand 8'
];

const bottomBrands = [
  'Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E', 'Brand F', 'Brand G', 'Brand H'
];

export const BrandsSection: React.FC = () => {
  // Top slider - moves right
  const [topSliderRef] = useKeenSlider({
    loop: true,
    mode: 'free',
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 6,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(0, true);
      setInterval(() => {
        s.next();
      }, 2000);
    },
  });

  // Bottom slider - moves left
  const [bottomSliderRef] = useKeenSlider({
    loop: true,
    mode: 'free',
    rtl: true, // Right to left
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 6,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(0, true);
      setInterval(() => {
        s.next();
      }, 2000);
    },
  });

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        {/* Top Slider - Moving Right */}
        <div className="mb-8">
          <div ref={topSliderRef} className="keen-slider">
            {topBrands.map((brand, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm flex items-center justify-center h-16 transition-colors duration-300">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Slider - Moving Left */}
        <div>
          <div ref={bottomSliderRef} className="keen-slider">
            {bottomBrands.map((brand, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm flex items-center justify-center h-16 transition-colors duration-300">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};