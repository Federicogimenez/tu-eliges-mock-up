import React from 'react';
import { Link } from 'react-router-dom';
import gateway from '/gateway.png'

export const GatewaySection: React.FC = () => {
  return (
    <section className="py-[8vh] px-4 w-full h-full bg-black/5 dark:bg-white/5 transition-colors duration-300">
        <div className=" mx-auto text-center flex flex-col justify-center items-center gap-y-4">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl  text-gray-900 dark:text-white">
            How to save every day
          </h2>

          <div className='w-full flex flex-col justify-center items-center mb-2'>
            <img src={gateway} alt="gateway" className='relative min-h-40 h-[60dvh] max-h-78 w-auto object-contain object-bottom ' />

            {/* CTA Button */}
            <Link 
              to="/product"
              className="uppercase w-[90%] max-w-[500px] inline-block mb-8 text-lg px-8 py-4 rounded-full border-2 border-black dark:border-white transition-all hover:font-semibold hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black hover:-translate-y-1"
            >
              Discover More
            </Link>
          </div>
          <p className=' text-blue-gradient-end dark:text-blue-gradient-start font-semibold flex justify-center items-baseline gap-x-4'>
            <span>
              ✓Testimonials  
            </span>
            <span>
              ✓How it works
            </span>
            <span>
              ✓Savings calculator
            </span>
          </p>
          <p>
            It only takes 60 seconds to read
          </p>
          {/* Image */}

          {/* Description Paragraphs */}
          {/* <div className="max-w-2xl mx-auto space-y-4 text-gray-600 dark:text-gray-400">
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
          </div> */}
        </div>
    </section>
  );
};