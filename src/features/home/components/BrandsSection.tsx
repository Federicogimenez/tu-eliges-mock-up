import React from 'react';
import { useKeenSlider } from 'keen-slider/react';

// Placeholder brand logos
const topBrands = [
  '/brands/1/1.png',
  '/brands/1/2.png',
  '/brands/1/3.png',
  '/brands/1/4.png',
  '/brands/1/5.png',
  '/brands/1/6.png',
  '/brands/1/7.png',
  '/brands/1/8.png',
  '/brands/1/9.png',
  '/brands/1/10.png',

  '/brands/2/1.png',
  '/brands/2/2.png',
  '/brands/2/3.png',
  '/brands/2/4.png',
  '/brands/2/5.png',
  '/brands/2/6.png',
  '/brands/2/7.png',
  '/brands/2/8.png',
  '/brands/2/9.png',
  '/brands/2/10.png',
];


export const BrandsSection: React.FC = () => {
  // Top slider - moves right
  const [topSliderRef] = useKeenSlider({
    loop: true,
    mode: 'free',
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 450px)': {
        slides: {
          perView: 4,
          spacing: 20,
        },
      },
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
      }, 1500);
    },
  });


  return (
    <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
      {/* <h2 className="w-[90%] mx-auto text-center text-2xl sm:text-3xl xl:text-4xl  text-gray-900 dark:text-white mb-10">
        Enjoy savings at your favorite national and local brands
      </h2> */}
      <div className="container mx-auto">
        {/* Top Slider - Moving Right */}
        <div className="mb-8">
          <div ref={topSliderRef} className="keen-slider">
            {topBrands.map((brand, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="group bg-white/90 rounded-2xl p-2 dark:shadow-sm flex items-center justify-center h-16 transition-colors duration-300">
                  <img src={brand} alt={`brand ${index}`} className='w-full h-full object-contain object-center' />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Slider - Moving Left */}
        {/* <div>
          <div ref={bottomSliderRef} className="keen-slider">
            {bottomBrands.map((brand, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="bg-white/90 rounded-2xl p-2 dark:shadow-sm flex items-center justify-center h-16 transition-colors duration-300">
                  <img src={brand} alt={`brand ${index}`} className='w-full h-full object-contain object-center' />
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};