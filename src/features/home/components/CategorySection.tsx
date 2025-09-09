import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import { DiamondCarousel } from './DiamondCarousel';

const categories = [
  {
    name: 'Shop',
    path: '/shop',
    color: '--color-purple-shop',
    frontImage: '/bg-shop.jpg',
    logo: '/icons/category/shop.png',
    number: '175',
    description: 'Technology, Cars, Home, Health, Fitness, and more.'
  },
  {
    name: 'Dining',
    path: '/dining',
    color: '--color-yellow-dining',
    frontImage: '/bg-dining.jpg',
    logo: '/icons/category/dining.png',
    number: '50',
    description: 'Casual and Fine Dining, Fast food, Catering, and more.'
  },
  {
    name: 'Travel',
    path: '/travel',
    color: '--color-blue-travel',
    frontImage: '/bg-travel.jpg',
    logo: '/icons/category/travel.png',
    number: '850',
    description: 'Hotel, Car rentals, Resorts, Cruises, Tours, and more.'
  },
  {
    name: 'Entertainment',
    path: '/entertainment',
    color: '--color-pink-entertainment',
    frontImage: '/bg-entertainment.jpg',
    logo: '/icons/category/entertainment.png',
    number: '50',
    description: 'Theme parks, Adventure, Movies, Golf, and more.'
  }
];

interface CategoryCardProps {
  category: typeof categories[0];
  index: number;
  isActive: boolean;
  onCardClick: (index: number) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index, isActive, onCardClick }) => {
  
  // Determinar el ángulo de rotación
  const rotationAngle = isActive ? 180 : 0;

  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: rotationAngle }}
      transition={{
        duration: 0.4,
        delay: 0, // Solo delay para la primera card
        ease: "easeInOut"
      }}
      className="relative mx-auto w-full h-72 max-w-[400px] perspective-1000 cursor-pointer perspective-1000 transition-all duration-200 ease-out active:scale-95 "
      style={{ transformStyle: 'preserve-3d', scale: isActive ? '1.05' : '1' }}
      onClick={() => onCardClick(index)}
    >
      {/* Front Face */}
      <div className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl shadow-lg overflow-hidden`}
          style={{border: `2px solid var(${category.color})` }}
      >
        {/* <div className={`w-full h-full ${category.color} bg-opacity-20 flex flex-col items-center justify-center p-6`}> */}
          <div className='w-full h-full relative flex items-end justify-center  '>
            <img src={category.frontImage} alt="bg" className='absolute w-full h-[60%] left-0 top-0 object-cover  object-top' />
            <picture className="absolute left-2 top-2 w-14 h-14 rounded-full flex items-center justify-center">
              <img src={category.logo} alt="logo" className='w-full h-full object-contain object-center' />
            </picture>
            <div className='relative h-[40%] w-full p-2 text-center text-balance text-black dark:text-white text-xl lg:text-xl flex justify-center items-center '>
              <p className='text-center text-balance text-black dark:text-white text-[16px] h-auto'>
                {category.description}
              </p>
            </div>

          {/* <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {category.name}
            </h3> */}
          
          </div>
        {/* </div> */}
      </div>

      {/* Back Face */}
      <div 
        className={`absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden border-2 border-amber-500 `}
        style={{ transform: 'rotateY(180deg)', border: `2px solid var(${category.color})`,  filter: `drop-shadow(0px 0px 5px var(${category.color}))`, }}
      >
        <div className={`w-full h-full flex flex-col items-center justify-around p-6 `}>
          {/* <div className="text-4xl mb-2">{category.logo}</div> */}
          <div className={`text-5xl font-bold mb-2 `}
              style={{color: `var(${category.color})`}}
          >
            {category.number}k+
          </div>
          {/* <p className="text-center text-sm mb-4">{category.description}</p> */}
          <Link 
            to={category.path}
            className={`bg-transparent px-4 py-2 rounded-full font-semibold w-full text-center transition-all duration-300 hover:bg-${category.color} hover:-translate-y-1 hover:scale-105 `}
            style={{color: `var(${category.color})`, border: `2px solid var(${category.color})` }}
          >
            Explore {category.name}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function CategorySection () {
  // Estado para controlar qué card está mostrando su backside
  const ref = useRef(null);
  const isInView = useInView(ref,{ once: true});
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  
  // Solo la primera card rota automáticamente cuando está inView

  useEffect(() => {
      setTimeout(() => {
        if(isInView){
          setActiveCardIndex(0) 
        }
      }, 1500);
  }, [isInView])
  

  // Función para manejar el click en las cards
  const handleCardClick = (clickedIndex: number) => {
    if (activeCardIndex === clickedIndex) {
      // Si la card clickeada ya está activa, la desactivamos
      setActiveCardIndex(null);
    } else {
      // Si es una card diferente, la activamos (esto automáticamente desactiva la anterior)
      setActiveCardIndex(clickedIndex);
    }
  };

  return (
    <section className="pt-[8dvh] pb-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-20 lg:mb-6">
          <h3 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl text-black dark:text-white mb-2">
            Discover amazing savings
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Explore across all your favorite categories and brands
          </p>
        </div>

        {/* <DiamondCarousel /> */}

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.name}
              category={category}
              index={index}
              isActive={activeCardIndex === index}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};