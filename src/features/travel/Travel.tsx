import HeroCategory from '../../shared/layout/HeroCategory';
import HeroTrendy, { type HeroTrendyArticleProps } from '../../shared/layout/HeroTrendy';
import GatewaySection from '../home/components/GatewaySection';
import PricingSection from '../home/components/PricingSection';

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


import trendy_mobile_1 from '/hero-category/travel/mobile/1.png';
import trendy_mobile_2 from '/hero-category/travel/mobile/2.png';
import trendy_mobile_3 from '/hero-category/travel/mobile/3.png';
import trendy_mobile_4 from '/hero-category/travel/mobile/4.png';

import trendy_desktop_1 from '/hero-category/travel/desktop/1.png';
import trendy_desktop_2 from '/hero-category/travel/desktop/2.png';
import trendy_desktop_3 from '/hero-category/travel/desktop/3.png';
import trendy_desktop_4 from '/hero-category/travel/desktop/4.png';

import article_1_brand from '/trendy/travel/articles/wyndham.png';
import article_2_brand from '/trendy/travel/articles/stay-america.png';
import article_3_brand from '/trendy/travel/articles/disney.png';
import article_4_brand from '/trendy/travel/articles/carnival.png';
import article_5_brand from '/trendy/travel/articles/avis.png';
import article_6_brand from '/trendy/travel/articles/alamo.png';
import article_7_brand from '/trendy/travel/articles/flights.png';
import { useWindowSize } from '../../hooks/useWindowSize';
import Benefits from '../../shared/layout/Benefits';
import Hero2 from '../../shared/layout/Hero2';



export default function Travel (){

  const { width } = useWindowSize()

  const categoryTestimonials = [
    {
      icon: icon_bag,
      img: profile_bag,
      text: '“We used the discount program to go to SeaWorld and swim with the dolphins at Christmas time. It was amazing!” - Mariann C.',
    },
    {
      icon: icon_beach,
      img: profile_beach,
      text: '“My discount program has saved me hundreds of dollars traveling on hotels and excursions. It is a real deal saver.” - Amador S.',
    },
    {
      icon: icon_hotel,
      img: profile_hotel,
      text: '“I have been surprised by the money I saved in just one use of my discount when booking a room last minute!” - Monica P.',
    },
    {
      icon: icon_car,
      img: profile_car,
      text: '“I saved over $100 on a rental car by using my discount program.” - John C.',
    },
    {
      icon: icon_flight,
      img: profile_flight,
      text: '“The airline tickets with Delta are usually expensive, and I saved a lot through this discount program!” - Lucrecia M.',
    },
  ]

  const trendyArticles: HeroTrendyArticleProps[] = [

    {
      description:"Member-only hotel deals—nationwide.",
      brandImg: article_1_brand,
    },
    {
      description:'Long stays, low rates for members.',
      brandImg: article_2_brand,
    },
    {
      description:"Family-ready cruises with exclusive savings.",
      brandImg: article_3_brand,
    },
    {
      description:"Drive away with member savings.",
      brandImg: article_4_brand,
    },
    {
      description:"Drive away with member savings.",
      brandImg: article_5_brand,
    },
    {
      description:"Vacation-ready rentals at member value.",
      brandImg: article_6_brand,
    },
    {
      description:"Save on Flights Worldwide.",
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


  const bannerCollageDesktop : string[] =[
    trendy_desktop_1,
    trendy_desktop_2,
    trendy_desktop_3,
    trendy_desktop_4,
  ]
  const bannerCollageMobile : string[] =[
    trendy_mobile_1,
    trendy_mobile_2,
    trendy_mobile_3,
    trendy_mobile_4,
  ]

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
      <Hero2
        categoryName='Travel'
        ctaGradientFrom={'from-blue-travel'} 
        ctaGradientTo={'to-blue-travel'} 
        border='border-blue-travel'
        shiny_color={'shiny-blue-text'} 
        hero_slides={width > 600 ? bannerCollageDesktop : bannerCollageMobile} />
      <Benefits />
      <HeroTrendy 
        color={'--color-blue-travel'} 
        // wrapperClass={'bg-gradient-to-b from-transparent to-20% dark:to-blue-travel/20 to-blue-travel/45'} 
        wrapperClass={'bg-gradient-to-b from-transparent via-blue-travel/50 to-transparent'} 
        title={'Smarter Travel,'} 
        subtitle={'Bigger Adventures!'} 
        description={'Hotels, Rental Cars, Flights & Cruises—member-only savings wherever you go.'} 
        ctaGradientFrom='from-blue-travel' 
        ctaGradientTo='to-blue-travel'
        articles={trendyArticles} />
      <PricingSection
        title='Cheaper than an <br /> hour of parking.'
        subtitle='And it helps you save even more.' 
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
      <HeroCategory
        title={'Travel big,'} 
        subtitle={'Spend Small.'} 
        description={'Instant savings on Hotels, Flights & Cars so you can travel more and spend less.'} 
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