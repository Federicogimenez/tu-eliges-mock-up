import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Shop',
    path: '/shop',
    color: 'bg-purple-shop',
    frontImage: '/placeholder-shop-front.jpg',
    logo: '🛍️',
    number: '1000+',
    description: 'Stores & Brands'
  },
  {
    name: 'Dining',
    path: '/dining',
    color: 'bg-yellow-dining',
    frontImage: '/placeholder-dining-front.jpg',
    logo: '🍽️',
    number: '500+',
    description: 'Restaurants'
  },
  {
    name: 'Travel',
    path: '/travel',
    color: 'bg-blue-travel',
    frontImage: '/placeholder-travel-front.jpg',
    logo: '✈️',
    number: '200+',
    description: 'Travel Partners'
  },
  {
    name: 'Entertainment',
    path: '/entertainment',
    color: 'bg-pink-entertainment',
    frontImage: '/placeholder-entertainment-front.jpg',
    logo: '🎭',
    number: '300+',
    description: 'Entertainment Venues'
  }
];

interface CategoryCardProps {
  category: typeof categories[0];
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ rotateY: 0 }}
      animate={isInView ? { rotateY: 360 } : { rotateY: 0 }}
      transition={{ 
        duration: 1, 
        delay: index * 0.5 + 2, // 2s delay + staggered
        ease: "easeInOut"
      }}
      className="relative w-full h-64 perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Front Face */}
      <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden">
        <div className={`w-full h-full ${category.color} bg-opacity-20 flex flex-col items-center justify-center p-6`}>
          <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 shadow-md">
            <span className="text-2xl">{category.logo}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {category.name}
          </h3>
          <div className="w-full h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-sm text-gray-500">Image Placeholder</span>
          </div>
        </div>
      </div>

      {/* Back Face */}
      <div 
        className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <div className={`w-full h-full ${category.color} flex flex-col items-center justify-center p-6 text-white`}>
          <div className="text-4xl mb-2">{category.logo}</div>
          <div className="text-3xl font-bold mb-2">{category.number}</div>
          <p className="text-center text-sm mb-4">{category.description}</p>
          <Link 
            to={category.path}
            className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Explore {category.name}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const CategorySection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Categories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover amazing savings across all your favorite categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};