import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: 'Shop',
    path: '/shop',
    color: '--color-purple-shop',
    image: '/trendy/shop/1.png',
    logo: '/icons/category/shop.png',
    number: '175',
    description: 'Technology, Cars, Home, Health, Fitness, and more.'
  },
  {
    name: 'Travel',
    path: '/travel',
    color: '--color-blue-travel',
    image: '/trendy/travel/3.png',
    logo: '/icons/category/travel.png',
    number: '850',
    description: 'Hotel, Car rentals, Resorts, Cruises, Tours, and more.'
  },
  {
    name: 'Dining',
    path: '/dining',
    color: '--color-yellow-dining',
    image: '/trendy/dining/3.png',
    logo: '/icons/category/dining.png',
    number: '50',
    description: 'Casual and Fine Dining, Fast food, Catering, and more.'
  },
  {
    name: 'Entertainment',
    path: '/entertainment',
    color: '--color-pink-entertainment',
    image: '/trendy/entertainment/2.png',
    logo: '/icons/category/entertainment.png',
    number: '50',
    description: 'Theme parks, Adventure, Movies, Golf, and more.'
  }
];

export default function CategoriesSection() {
  return (
    <div className="relative w-full py-10 flex flex-col items-center  ">
        <div className="text-center mb-2 px-4">
          <h3 className="heading-1 mb-2">
            Discover amazing savings
          </h3>
          <p className="subtitle text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Explore across all your favorite categories and brands
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
            {
                categories.map(( category, i )=>{
                    return <CategoryCard
                        key={i} 
                        id={i}
                        name={category.name} 
                        path={category.path} 
                        color={category.color} 
                        image={category.image} 
                        logo={category.logo} 
                        number={category.number} 
                        description={category.description}                         
                    />
                })
            }
        </div>
    </div>
  )
}
