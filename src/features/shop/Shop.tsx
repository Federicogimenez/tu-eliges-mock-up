// import HeroTrendy from '../../shared/layout/HeroTrendy';
import HeroCategory from '../../shared/layout/HeroCategory';
import HeroTrendy, { type HeroTrendyArticleProps } from '../../shared/layout/HeroTrendy';
// import BenefitsSection, { type BenefitSlide } from '../home/components/BenefitsSection';
import GatewaySection from '../home/components/GatewaySection';
import PricingSection from '../home/components/PricingSection';

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

import trendy_mobile_1 from '/hero-category/shop/mobile/1.png';
import trendy_mobile_2 from '/hero-category/shop/mobile/2.png';
import trendy_mobile_3 from '/hero-category/shop/mobile/3.png';
import trendy_mobile_4 from '/hero-category/shop/mobile/4.png';

import trendy_desktop_1 from '/hero-category/shop/desktop/1.png';
import trendy_desktop_2 from '/hero-category/shop/desktop/2.png';
import trendy_desktop_3 from '/hero-category/shop/desktop/3.png';
import trendy_desktop_4 from '/hero-category/shop/desktop/4.png';


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

import { useWindowSize } from '../../hooks/useWindowSize';

// import icon_travel from '/icons/category/travel.png'
// import icon_dining from '/icons/category/dining.png'
// import icon_entertainment from '/icons/category/entertainment.png'
// import { Link } from 'react-router-dom';
import Benefits from '../../shared/layout/Benefits';
import Hero2 from '../../shared/layout/Hero2';


export default function Shop (){

  const { width } = useWindowSize()

  const categoryTestimonials = [
    {
      icon: icon_car,
      img: profile_car,
      text: '“I regularly use the Jiffy Lube discount. Makes the basic car maintenance I need done a little less expensive.” — David M.',
    },
    {
      icon: icon_pc,
      img: profile_pc,
      text: '“I saved around $800 on a new laptop with the Lenovo discount.” — Debbie R.',
    },
    {
      icon: icon_pet,
      img: profile_pet,
      text: '“I utilized the promo code for chewy.com after adopting my first dog. It was a great way to get her what she needed.” — Monica N.',
    },
    {
      icon: icon_clothes,
      img: profile_clothes,
      text: '“When buying shoes the discounts have been amazing, especially with 4 kids. I need all the discounts I can get.” — David S.',
    },
    {
      icon: icon_tv,
      img: profile_tv,
      text: 'I was able to get the Samsung TV I was looking for for $300 less than the lowest price I found in retail stores.” - Jared S.',
    },
  ]

  const trendyArticles: HeroTrendyArticleProps[] = [
    {
      description:"Step up your style & savings",
      brandImg: article_1_brand,
    },
    {
      description:'Fashion finds made smarter',
      brandImg: article_2_brand,
    },
    {
      description:"Extra chic, extra savings ",
      brandImg: article_3_brand,
    },
    {
      description:"Comfort never felt this affordable",
      brandImg: article_4_brand,
    },
    {
      description:"Frame your look for less ",
      brandImg: article_5_brand,
    },
    {
      description:"Gear up & save big",
      brandImg: article_6_brand,
    },
    {
      description:"Power your day smarter",
      brandImg: article_7_brand,
    },
    {
      description:" Back to school, back to savings.",
      brandImg: article_8_brand,
    },
    {
      description:"Work smarter, save harder",
      brandImg: article_9_brand,
    },
    {
      description:"Everyday essentials, extraordinary savings",
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

  const bannerCollageDesktop : string[] =[
    trendy_desktop_1,
    trendy_desktop_2,
    trendy_desktop_3,
    trendy_desktop_4,
  ]
  const bannerCollageMobile : string[] = [
    trendy_mobile_1,
    trendy_mobile_2,
    trendy_mobile_3,
    trendy_mobile_4,
  ]
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
      <Hero2 
        categoryName='Shop'
        ctaGradientFrom='from-purple-shop' 
        ctaGradientTo='to-purple-shop' 
        border='border-purple-shop'
        shiny_color='shiny-purple-text' 
        hero_slides={width > 600 ? bannerCollageDesktop : bannerCollageMobile}
        />
      <Benefits />
      <HeroTrendy 
        color={'--color-purple-shop'} 
        // wrapperClass={'bg-gradient-to-b from-transparent to-20% dark:to-purple-shop/20 to-purple-shop/45'} 
        wrapperClass={'bg-gradient-to-b from-transparent via-purple-shop/50 to-transparent '} 
        title={'Smarter Shopping,'} 
        subtitle={'Bigger Finds!'} 
        description={'From fashion to tech, member-only deals on the things you love.'} 
        ctaGradientFrom='from-purple-shop' 
        ctaGradientTo='to-purple-shop'
        articles={trendyArticles} />
      <PricingSection 
        title='Cheaper than your monthly streaming subscription.'
        subtitle='And it helps you save even more.'
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
      <HeroCategory 
        title='Shop savvy'
        subtitle='Bag up to 50% OFF!'
        color={'--color-purple-shop'} 
        retailers={175}
        description='Shop smarter and save with their members-only discounts.'
        dotsColor={'bg-purple-shop'} 
        testimonials={categoryTestimonials} 
        ctaGradientFrom='from-purple-shop' 
        ctaGradientTo='to-purple-shop' />
      <GatewaySection home_btn/>
    </>
  );
};