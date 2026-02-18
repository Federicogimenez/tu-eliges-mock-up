import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useSavingsModal } from '../../../hooks/useSavingsModal';

import icon_dining from '/icons/category/dining.png'
import icon_travel from '/icons/category/travel.png'
import icon_shop from '/icons/category/shop.png'
import icon_entertainment from '/icons/category/entertainment.png'

type Category = 'dining' | 'shop' | 'travel' | 'entertainment'

const categories: { key: Category; label: string; color: string; icon: string }[] = [
  { key: 'shop', label: 'Shop', color: '#884cfc', icon: icon_shop },
  { key: 'travel', label: 'Travel', color: '#00b3eb', icon: icon_travel },
  { key: 'dining', label: 'Dining', color: '#f5b800', icon: icon_dining },
  { key: 'entertainment', label: 'Entertainment', color: '#e82c8d', icon: icon_entertainment },
]

const brandsByCategory: Record<Category, string[]> = {
  dining: [
    '/trendy/dining/articles/papaj.png',
    '/trendy/dining/articles/la-ventana.png',
    '/trendy/dining/articles/burgerk.png',
    '/trendy/dining/articles/dominos.png',
    '/trendy/dining/articles/dq.png',
    '/trendy/dining/articles/subway.png',
  ],
  shop: [
    '/trendy/shop/articles/1/brand.png',
    '/trendy/shop/articles/2/brand.png',
    '/trendy/shop/articles/3/brand.png',
    '/trendy/shop/articles/4/brand.png',
    '/trendy/shop/articles/5/brand.png',
    '/trendy/shop/articles/6/brand.png',
  ],
  travel: [
    '/trendy/travel/articles/alamo.png',
    '/trendy/travel/articles/avis.png',
    '/trendy/travel/articles/carnival.png',
    '/trendy/travel/articles/disney.png',
    '/trendy/travel/articles/flights.png',
    '/trendy/travel/articles/wyndham.png',
  ],
  entertainment: [
    '/trendy/entertainment/articles/disney.png',
    '/trendy/entertainment/articles/six.png',
    '/trendy/entertainment/articles/universal.png',
    '/trendy/entertainment/articles/lego.png',
    '/trendy/entertainment/articles/cine.png',
    '/trendy/entertainment/articles/zoo-mia.png',
  ],
}

export default function BrandsShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { openModal } = useSavingsModal()

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    drag: false,
    slides: { perView: 1 },
  })

  function handleMoveSlider(i: number) {
    setCurrentSlide(i)
    setTimeout(() => {
      instanceRef?.current?.moveToIdx(i)
    }, 100)
  }

  return (
    <section className="bg-white dark:bg-black py-12 px-4">
      {/* Category Pills */}
      <p className="mx-auto w-fit text-center text-lg font-bold tracking-widest uppercase">
        EVERYTHING YOUR MEMBERS WANT
      </p>

      <div className='flex flex-wrap gap-20 justify-center items-center'>
        <div>
          {/* Category Buttons */}
          <div className="flex justify-center items-center gap-4 py-4 mb-6">
            {categories.map((cat, idx) => (
              <button
                key={cat.key}
                onClick={() => handleMoveSlider(idx)}
                style={{
                  background: currentSlide === idx ? cat.color : 'transparent',
                  border: `1px solid ${cat.color}`,
                  color: currentSlide === idx ? '#fff' : cat.color,
                  fontWeight: currentSlide === idx ? 600 : 500,
                }}
                className="cursor-pointer flex justify-center items-center px-3 py-0.5 gap-0.5 rounded-full transition-transform"
              >
                <img src={cat.icon} alt={cat.label} className="size-6" />
                <span className="text-xs hidden md:inline-block">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>

          {/* Brand Logos Slider */}
          <div className="relative w-full max-w-md mx-auto px-4">
            <div ref={sliderRef} className="keen-slider">
              {categories.map((cat) => (
                <div key={cat.key} className="keen-slider__slide">
                  <div className="w-fit max-w-dvw mx-auto grid grid-cols-3 px-2 gap-4">
                    {brandsByCategory[cat.key].map((brand, i) => (
                      <div
                        key={`${cat.key}-${i}`}
                        className="bg-white rounded-xl p-4 flex items-center justify-center aspect-square shadow-lg border border-gray-100 dark:border-transparent"
                      >
                        <img
                          src={brand}
                          alt={`Partner brand ${i + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-black pt-16 pb-24 text-center">
          <div className="max-w-md mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Big Yearly Savings</h2>
            <p className="text-green-600 dark:text-green-500 text-sm font-bold uppercase tracking-widest mb-8">
              FOR YOUR AUDIENCE
            </p>

            <div className="relative py-4 mb-10">
              <div className="absolute left-0 right-0 h-[1px] bg-green-200 dark:bg-green-500/30 top-0" />
              <span className="text-5xl md:text-6xl font-black text-green-700 dark:text-green-600 tracking-tighter">
                $2,030.00
              </span>
              <div className="absolute left-0 right-0 h-[1px] bg-green-200 dark:bg-green-500/30 bottom-0" />
            </div>

            <button
              onClick={() => openModal?.({ hideMembershipCost: true })}
              className={`block w-11/12 mt-7 mx-auto font-semibold mb-6 text-center max-w-md px-4 py-3 cursor-pointer rounded-full bg-green-500  text-white text-lg transition-all duration-300 hover:-translate-y-1`}
            >
                Calculate Savings
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
