// import HeroTrendy from '../../shared/layout/HeroTrendy';
import HeroTrendy, { type HeroTrendyArticleProps } from '../../shared/layout/HeroTrendy';
// import BenefitsSection, { type BenefitSlide } from '../home/components/BenefitsSection';
import GatewaySection from '../../shared/layout/GatewaySection';
import PricingSection from '../../shared/layout/PricingSection';

import pricing_banner from '/pricing/shop/netflix.png';

import profile_car from '/category-testimonials/shop/car.png';
import icon_car from '/category-testimonials/shop/icons/car.svg';

import icon_pc from '/category-testimonials/shop/icons/pc.svg';
import profile_pc from '/category-testimonials/shop/pc.png';

import icon_pet from '/category-testimonials/shop/icons/pet.svg';
import profile_pet from '/category-testimonials/shop/pet.png';

import profile_clothes from '/category-testimonials/shop/clothes.png';
import icon_clothes from '/category-testimonials/shop/icons/clothes.svg';

import icon_tv from '/category-testimonials/shop/icons/tv.svg';
import profile_tv from '/category-testimonials/shop/tv.png';


// import shop_with_1 from '/benefits/shop/flowers-with.png';
// import shop_without_1 from '/benefits/shop/flowers-without.png';

// import shop_with_2 from '/benefits/shop/paint-with.png';
// import shop_without_2 from '/benefits/shop/paint-without.png';

// import shop_with_3 from '/benefits/shop/refrigerator-with.png';
// import shop_without_3 from '/benefits/shop/refrigerator-without.png';


import article_1_brand from '/trendy/shop/articles/1/brand.png';

import article_2_brand from '/trendy/shop/articles/2/brand.png';

import article_3_brand from '/trendy/shop/articles/3/brand.png';

import article_4_brand from '/trendy/shop/articles/4/brand.png';

import article_5_brand from '/trendy/shop/articles/5/brand.png';

import article_6_brand from '/trendy/shop/articles/6/brand.png';

import article_7_brand from '/trendy/shop/articles/7/brand.png';

import article_8_brand from '/trendy/shop/articles/8/brand.png';

import article_9_brand from '/trendy/shop/articles/9/brand.png';

import article_10_brand from '/trendy/shop/articles/10/brand.png';


// import icon_travel from '/icons/category/travel.png'
// import icon_dining from '/icons/category/dining.png'
// import icon_entertainment from '/icons/category/entertainment.png'
// import { Link } from 'react-router-dom';
import Benefits from '../../shared/layout/Benefits';
import TestimonialSection from '../../shared/layout/TestimonialSection';
import { useTranslation } from '../../hooks/useTranslation';


export default function Shop (){

  const { t } = useTranslation();

  const categoryTestimonials = [
    {
      icon: icon_car,
      img: profile_car,
      text: t('shop.testimonials.items.0.text'),
    },
    {
      icon: icon_pc,
      img: profile_pc,
      text: t('shop.testimonials.items.1.text'),
    },
    {
      icon: icon_pet,
      img: profile_pet,
      text: t('shop.testimonials.items.2.text'),
    },
    {
      icon: icon_clothes,
      img: profile_clothes,
      text: t('shop.testimonials.items.3.text'),
    },
    {
      icon: icon_tv,
      img: profile_tv,
      text: t('shop.testimonials.items.4.text'),
    },
  ]

  const trendyArticles: HeroTrendyArticleProps[] = [
    {
      description: t('shop.articles.0.description'),
      brandImg: article_1_brand,
    },
    {
      description: t('shop.articles.1.description'),
      brandImg: article_2_brand,
    },
    {
      description: t('shop.articles.2.description'),
      brandImg: article_3_brand,
    },
    {
      description: t('shop.articles.3.description'),
      brandImg: article_4_brand,
    },
    {
      description: t('shop.articles.4.description'),
      brandImg: article_5_brand,
    },
    {
      description: t('shop.articles.5.description'),
      brandImg: article_6_brand,
    },
    {
      description: t('shop.articles.6.description'),
      brandImg: article_7_brand,
    },
    {
      description: t('shop.articles.7.description'),
      brandImg: article_8_brand,
    },
    {
      description: t('shop.articles.8.description'),
      brandImg: article_9_brand,
    },
    {
      description: t('shop.articles.9.description'),
      brandImg: article_10_brand,
    },
  ]

  // const benefitSlides: BenefitSlide[] = [
  //   {
  //     color: '--color-purple-shop',
  //     discount: '-$20',
  //     with_img: shop_with_1,
  //     withoout_img: shop_without_1,
  //   },
  //   {
  //     color: '--color-purple-shop',
  //     discount: '-$10',
  //     with_img: shop_with_2,
  //     withoout_img: shop_without_2,
  //   },
  //   {
  //     color: '--color-purple-shop',
  //     discount: '-$250',
  //     with_img: shop_with_3,
  //     withoout_img: shop_without_3,
  //   },
  // ];

  // const portraitCarouselImagesMobile = [
  //   {id: 1 , img: trendy_mobile_1},
  //   {id: 2 , img: trendy_mobile_2},
  //   {id: 3 , img: trendy_mobile_3},
  //   {id: 4 , img: trendy_mobile_4},
  // ]
  // const portraitCarouselImagesDesktop = [
  //   {id: 1 , img: trendy_desktop_1},
  //   {id: 2 , img: trendy_desktop_2},
  //   {id: 3 , img: trendy_desktop_3},
  //   {id: 4 , img: trendy_desktop_4},
  // ]

  // const categoryLinks = [
  //   {
  //     icon: icon_travel,
  //     path: "/travel",
  //   },
  //   {
  //     icon: icon_dining,
  //     path: "/dining",
  //   },
  //   {
  //     icon: icon_entertainment,
  //     path: "/entertainment"
  //   }
  // ]

    
  return (
    <>
      {/* <div className='animate-fade fixed z-10 right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-black rounded-l-2xl flex flex-col justify-center items-center gap-y-2 h-fit px-2 py-3'>
        {
          categoryLinks.map(( { icon, path } )=>{
            return <Link to={path} className='block w-8 transition-all hover:scale-120' >
              <img src={icon} alt="travel" className='w-full' />
            </Link>
          })
        }
      </div> */}
      {/* <Hero2 
        categoryName='Shop'
        ctaGradientFrom='from-purple-shop' 
        ctaGradientTo='to-purple-shop' 
        border='border-purple-shop'
        shiny_color='shiny-purple-text' 
        hero_slides={width > 600 ? bannerCollageDesktop : bannerCollageMobile}
        /> */}
      <HeroTrendy
        color={'--color-purple-shop'}
        // wrapperClass={'bg-gradient-to-b from-transparent to-20% dark:to-purple-shop/20 to-purple-shop/45'}
        wrapperClass={'bg-gradient-to-b from-transparent via-purple-shop/50 to-purple-shop/80 '}
        title={t('shop.hero.title1')}
        subtitle={t('shop.hero.title2')}
        description={t('shop.hero.description')}
        ctaGradientFrom='from-purple-shop'
        ctaGradientTo='to-purple-shop'
        articles={trendyArticles} />
      <Benefits />
      <PricingSection
        title={t('shop.pricing.title')}
        subtitle={t('shop.pricing.subtitle')}
        color='--color-purple-shop'
        img={pricing_banner}
        ctaGradientFrom='from-black' 
        ctaGradientTo='to-purple-shop' 
        ctaGradientFrom2='from-purple-shop' 
        ctaGradientTo2='to-black' />
      {/* <BenefitsSection 
        slides={benefitSlides} 
        subtitle='Fashion, Tech & More for Less' 
        color='--color-purple-shop' /> */}
      <TestimonialSection
        title={t('shop.testimonials.title')}
        subtitle={t('shop.testimonials.subtitle')}
        color={'--color-purple-shop'}
        retailers={175}
        description={t('shop.testimonials.description')}
        dotsColor={'bg-purple-shop'} 
        testimonials={categoryTestimonials} 
        ctaGradientFrom='from-purple-shop' 
        ctaGradientTo='to-purple-shop' />
      <GatewaySection home_btn/>
    </>
  );
};