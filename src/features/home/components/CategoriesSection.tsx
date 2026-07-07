import { useEffect, useRef, useState } from "react";
import CategoryCard from "./CategoryCard";
import { useTranslation } from '../../../hooks/useTranslation';
import { useIsTouchDevice } from '../../../hooks/useIsTouchDevice';
import useIsInView from '../../../hooks/useIsInView';

const VIEW_OPTIONS: IntersectionObserverInit = { threshold: 0.5 };
const STEP_INTERVAL_MS = 1000;

const categoryMeta = [
  {
    key: 'shop' as const,
    path: '/shop',
    color: '--color-purple-shop',
    image: '/trendy/shop/1.png',
    logo: '/icons/category/shop.png',
    number: '175',
  },
  {
    key: 'travel' as const,
    path: '/travel',
    color: '--color-blue-travel',
    image: '/trendy/travel/3.png',
    logo: '/icons/category/travel.png',
    number: '850',
  },
  {
    key: 'dining' as const,
    path: '/dining',
    color: '--color-yellow-dining',
    image: '/trendy/dining/3.png',
    logo: '/icons/category/dining.png',
    number: '50',
  },
  {
    key: 'entertainment' as const,
    path: '/entertainment',
    color: '--color-pink-entertainment',
    image: '/trendy/entertainment/2.png',
    logo: '/icons/category/entertainment.png',
    number: '50',
  }
];

export default function CategoriesSection() {
  const { t } = useTranslation();

  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(gridRef, VIEW_OPTIONS);
  const isTouchDevice = useIsTouchDevice();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const hasPlayedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isTouchDevice || !isInView || hasPlayedRef.current) return;

    hasPlayedRef.current = true;
    let step = 0;
    setActiveIndex(step);

    timerRef.current = setInterval(() => {
      step += 1;
      if (step >= categoryMeta.length) {
        setActiveIndex(null);
        if (timerRef.current) clearInterval(timerRef.current);
        return;
      }
      setActiveIndex(step);
    }, STEP_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTouchDevice, isInView]);

  const handleMouseEnter = () => {
    hasPlayedRef.current = true;
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setActiveIndex(null);
  };

  return (
    <div className="relative bg-white dark:bg-black w-full py-10 flex flex-col items-center  ">
        <div className="text-center mb-2 px-4">
          <h3 className="heading-1 mb-2">
            {t('home.categories.title')}
          </h3>
          <p className="subtitle text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            {t('home.categories.subtitle')}
          </p>
        </div>
        <div
          ref={gridRef}
          onMouseEnter={handleMouseEnter}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center"
        >
            {
                categoryMeta.map(( category, i )=>{
                    return <CategoryCard
                        key={i}
                        active={activeIndex === i}
                        name={t(`home.categories.items.${category.key}.name`)}
                        path={category.path}
                        color={category.color}
                        image={category.image}
                        logo={category.logo}
                        number={category.number}
                        description={t(`home.categories.items.${category.key}.description`)}
                    />
                })
            }
        </div>
    </div>
  )
}
