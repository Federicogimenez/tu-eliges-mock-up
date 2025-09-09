import HeroTrendy, { type HeroTrendyArticleProps } from '../../shared/layout/HeroTrendy';
import BenefitsSection, { type BenefitSlide } from '../home/components/BenefitsSection';
import GatewaySection from '../home/components/GatewaySection';
import PricingSection from '../home/components/PricingSection';

import pricing_banner from '/pricing/dining/cafe.png';

import icon_pizza from '/hero-category/dining/icons/pizza.svg';
import profile_pizza from '/hero-category/dining/pizza.png';

import icon_dumpling from '/hero-category/dining/icons/dumpling.svg';
import profile_dumpling from '/hero-category/dining/dumpling.png';

import icon_wine from '/hero-category/dining/icons/wine.svg';
import profile_wine from '/hero-category/dining/wine.png';

import profile_buffet from '/hero-category/dining/buffet.png';
import icon_buffet from '/hero-category/dining/icons/buffet.svg';

import icon_meat from '/hero-category/dining/icons/meat.svg';
import profile_meat from '/hero-category/dining/meat.png';


import benefits_with_1 from '/benefits/dining/food-with.png';
import benefits_without_1 from '/benefits/dining/food-without.png';

import benefits_with_2 from '/benefits/dining/locald-with.png';
import benefits_without_2 from '/benefits/dining/locald-without.png';

import benefits_with_3 from '/benefits/dining/sand-with.png';
import benefits_without_3 from '/benefits/dining/sand-without.png';

import trendy_1 from '/trendy/dining/1.png';
import trendy_2 from '/trendy/dining/2.png';
import trendy_3 from '/trendy/dining/3.png';
import trendy_4 from '/trendy/dining/4.png';


import article_1_brand from '/trendy/dining/articles/subway.png';
import article_2_brand from '/trendy/dining/articles/burgerk.png';
import article_3_brand from '/trendy/dining/articles/dominos.png';
import article_4_brand from '/trendy/dining/articles/la-ventana.png';
import article_5_brand from '/trendy/dining/articles/dq.png';
import article_6_brand from '/trendy/dining/articles/papaj.png';

import HeroCategory from '../../shared/layout/HeroCategory';

export default function Dining () {

  const categoryTestimonials = [
    {
      icon: icon_pizza,
      img: profile_pizza,
      text: '“I used a Papa John`s deal! It was a great experience!” - Brittany S',
    },
    {
      icon: icon_dumpling,
      img: profile_dumpling,
      text: '“I used a discount on Panda Express. It worked well, was easy to use and now I look for deals every time I go out!” - Darek H.',
    },
    {
      icon: icon_wine,
      img: profile_wine,
      text: '“I tried a new restaurant thanks to the deal — a great way to branch out!” - Josh T.',
    },
    {
      icon: icon_buffet,
      img: profile_buffet,
      text: '“This discount program is my go-to for deals on dinners!” - Kelly K.',
    },
    {
      icon: icon_meat,
      img: profile_meat,
      text: '“I was so excited to see a Texas De Brazil coupon for $10 off an entree. My fiance and I used it for our anniversary dinner!” - Nicole P.',
    },
  ]

  const trendyArticles: HeroTrendyArticleProps[] = [
    {
      discount:'',
      description:"Fresh picks, sweeter member price.",
      brandImg: article_1_brand,
    },
    {
      discount:'',
      description:'Crave-worthy deals for members.',
      brandImg: article_2_brand,
    },
    {
      discount:"",
      description:"Pizza night, member-only savings.",
      brandImg: article_3_brand,
    },
    {
      discount:"",
      description:"Authentic flavors with exclusive member perks.",
      brandImg: article_4_brand,
    },
    {
      discount:"",
      description:"Treats & eats with member perks.",
      brandImg: article_5_brand,
    },
    {
      discount:"",
      description:"Better ingredients, better member price.",
      brandImg: article_6_brand,
    },
  ]

  const benefitSlides: BenefitSlide[] = [
    {
      color: '--color-yellow-dining',
      discount: '-$20',
      with_img: benefits_with_1,
      withoout_img: benefits_without_1,
    },
    {
      color: '--color-yellow-dining',
      discount: '-$10',
      with_img: benefits_with_2,
      withoout_img: benefits_without_2,
    },
    {
      color: '--color-yellow-dining',
      discount: '-$8',
      with_img: benefits_with_3,
      withoout_img: benefits_without_3,
    },
  ];

  const bannerCollage : string[] =[
    trendy_1,
    trendy_2,
    trendy_3,
    trendy_4,
  ]
    
  return (
    <>
      <HeroTrendy 
        color={'--color-yellow-dining'} 
        wrapperClass={'bg-gradient-to-b from-transparent to-20% dark:to-yellow-dining/20 to-yellow-dining/45'} 
        title={'Smarter Dining,'} 
        subtitle={'Bigger Flavors!'} 
        description={'From family pizza nights to local diners, exclusive savings you’ll love.'} 
        banner={bannerCollage} 
        ctaGradientFrom='from-yellow-dining' 
        ctaGradientTo='to-yellow-dining'
        articles={trendyArticles} />
      <PricingSection 
        title='Cheaper than a <br /> New York coffee.'
        subtitle='And it helps you save even more.'
        color='--color-yellow-dining'
        img={pricing_banner}
        ctaGradientFrom='from-black' 
        ctaGradientTo='to-yellow-dining' 
        ctaGradientFrom2='from-yellow-dining' 
        ctaGradientTo2='to-black' />
      <BenefitsSection 
        slides={benefitSlides} 
        subtitle='Bite Into Bigger Savings' 
        color='--color-yellow-dining' />
      <HeroCategory
        title={'Taste More,'} 
        subtitle={'Pay Less.'} 
        description={'Big flavors, small bills — that’s the Uchooseit.us way.'}
        retailers={50} 
        color={'--color-yellow-dining'} 
        dotsColor={'bg-yellow-dining'} 
        testimonials={categoryTestimonials} 
        ctaGradientFrom='from-yellow-dining' 
        ctaGradientTo='to-yellow-dining' />
      <GatewaySection home_btn />
    </>
  );
};