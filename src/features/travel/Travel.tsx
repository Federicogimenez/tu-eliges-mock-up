import HeroTrendy, { type HeroTrendyArticleProps } from '../../shared/layout/HeroTrendy';
import GatewaySection from '../../shared/layout/GatewaySection';
import PricingSection from '../../shared/layout/PricingSection';

import pricing_banner from '/pricing/travel/parking.png';

import profile_car from '/category-testimonials/travel/car.png';
import icon_car from '/category-testimonials/travel/icons/car.svg';

import icon_flight from '/category-testimonials/travel/icons/flight.svg';
import profile_flight from '/category-testimonials/travel/flight.png';

import icon_hotel from '/category-testimonials/travel/icons/hotel.svg';
import profile_hotel from '/category-testimonials/travel/hotel.png';

import profile_bag from '/category-testimonials/travel/bag.png';
import icon_bag from '/category-testimonials/travel/icons/bag.svg';

import icon_beach from '/category-testimonials/travel/icons/beach.svg';
import profile_beach from '/category-testimonials/travel/beach.png';


// import benefits_with_1 from '/benefits/travel/park-with.png';
// import benefits_without_1 from '/benefits/travel/park-without.png';

// import benefits_with_2 from '/benefits/travel/suite-with.png';
// import benefits_without_2 from '/benefits/travel/suite-without.png';

// import benefits_with_3 from '/benefits/travel/flight-with.png';
// import benefits_without_3 from '/benefits/travel/flight-without.png';


import article_1_brand from '/trendy/travel/articles/wyndham.png';
import article_2_brand from '/trendy/travel/articles/stay-america.png';
import article_3_brand from '/trendy/travel/articles/disney.png';
import article_4_brand from '/trendy/travel/articles/carnival.png';
import article_5_brand from '/trendy/travel/articles/avis.png';
import article_6_brand from '/trendy/travel/articles/alamo.png';
import article_7_brand from '/trendy/travel/articles/flights.png';
import Benefits from '../../shared/layout/Benefits';
import TestimonialSection from '../../shared/layout/TestimonialSection';
import { useTranslation } from '../../hooks/useTranslation';



export default function Travel (){

  const { t } = useTranslation();

  const categoryTestimonials = [
    {
      icon: icon_bag,
      img: profile_bag,
      text: t('travel.testimonials.items.0.text'),
    },
    {
      icon: icon_beach,
      img: profile_beach,
      text: t('travel.testimonials.items.1.text'),
    },
    {
      icon: icon_hotel,
      img: profile_hotel,
      text: t('travel.testimonials.items.2.text'),
    },
    {
      icon: icon_car,
      img: profile_car,
      text: t('travel.testimonials.items.3.text'),
    },
    {
      icon: icon_flight,
      img: profile_flight,
      text: t('travel.testimonials.items.4.text'),
    },
  ]

  const trendyArticles: HeroTrendyArticleProps[] = [

    {
      description: t('travel.articles.0.description'),
      brandImg: article_1_brand,
    },
    {
      description: t('travel.articles.1.description'),
      brandImg: article_2_brand,
    },
    {
      description: t('travel.articles.2.description'),
      brandImg: article_3_brand,
    },
    {
      description: t('travel.articles.3.description'),
      brandImg: article_4_brand,
    },
    {
      description: t('travel.articles.4.description'),
      brandImg: article_5_brand,
    },
    {
      description: t('travel.articles.5.description'),
      brandImg: article_6_brand,
    },
    {
      description: t('travel.articles.6.description'),
      brandImg: article_7_brand,
    },

  ]

  // const benefitSlides: BenefitSlide[] = [
  //   {
  //     color: '--color-blue-travel',
  //     discount: '-$720',
  //     with_img: benefits_with_1,
  //     withoout_img: benefits_without_1,
  //   },
  //   {
  //     color: '--color-blue-travel',
  //     discount: '-$400',
  //     with_img: benefits_with_2,
  //     withoout_img: benefits_without_2,
  //   },
  //   {
  //     color: '--color-blue-travel',
  //     discount: '-$600',
  //     with_img: benefits_with_3,
  //     withoout_img: benefits_without_3,
  //   },
  // ];

    //   const categoryLinks = [
    //   {
    //     icon: icon_shop,
    //     path: "/shop",
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
      {/* <Hero2
        categoryName='Travel'
        ctaGradientFrom={'from-blue-travel'} 
        ctaGradientTo={'to-blue-travel'} 
        border='border-blue-travel'
        shiny_color={'shiny-blue-text'} 
        hero_slides={width > 600 ? bannerCollageDesktop : bannerCollageMobile} /> */}
      <HeroTrendy
        color={'--color-blue-travel'}
        // wrapperClass={'bg-gradient-to-b from-transparent to-20% dark:to-blue-travel/20 to-blue-travel/45'}
        wrapperClass={'bg-gradient-to-b from-transparent via-blue-travel/50 to-blue-travel/80'}
        title={t('travel.hero.title1')}
        subtitle={t('travel.hero.title2')}
        description={t('travel.hero.description')}
        ctaGradientFrom='from-blue-travel'
        ctaGradientTo='to-blue-travel'
        articles={trendyArticles} />
      <Benefits />
      <PricingSection
        title={t('travel.pricing.title')}
        subtitle={t('travel.pricing.subtitle')} 
        color='--color-blue-travel'
        img={pricing_banner}
        ctaGradientFrom='from-black' 
        ctaGradientTo='to-blue-travel' 
        ctaGradientFrom2='from-blue-travel' 
        ctaGradientTo2='to-black' />
      {/* <BenefitsSection 
        slides={benefitSlides} 
        subtitle='More Adventures, Less Spending' 
        color='--color-blue-travel' /> */}
      <TestimonialSection
        title={t('travel.testimonials.title')}
        subtitle={t('travel.testimonials.subtitle')}
        description={t('travel.testimonials.description')} 
        retailers={850}
        color={'--color-blue-travel'} 
        dotsColor={'bg-blue-travel'}
        testimonials={categoryTestimonials}
        ctaGradientFrom='from-blue-travel'
        ctaGradientTo='to-blue-travel' 
        />
      <GatewaySection home_btn />
    </>
  );
};