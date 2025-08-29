// import HeroTrendy from '../../shared/layout/HeroTrendy';
import HeroCategory from '../../shared/layout/HeroCategory';
import HeroTrendy, { type HeroTrendyArticleProps } from '../../shared/layout/HeroTrendy';
import BenefitsSection, { type BenefitSlide } from '../home/components/BenefitsSection';
import { GatewaySection } from '../home/components/GatewaySection';
import PricingSection from '../home/components/PricingSection';

import pricing_banner from '/pricing/shop/netflix.png';

import profile_car from '/hero-category/shop/car.png';
import icon_car from '/hero-category/shop/icons/car.svg';

import icon_pc from '/hero-category/shop/icons/pc.svg';
import profile_pc from '/hero-category/shop/pc.png';

import icon_pet from '/hero-category/shop/icons/pet.svg';
import profile_pet from '/hero-category/shop/pet.png';

import profile_clothes from '/hero-category/shop/clothes.png';
import icon_clothes from '/hero-category/shop/icons/clothes.svg';

import icon_tv from '/hero-category/shop/icons/tv.svg';
import profile_tv from '/hero-category/shop/tv.png';


import shop_with_1 from '/benefits/shop/flowers-with.png';
import shop_without_1 from '/benefits/shop/flowers-without.png';

import shop_with_2 from '/benefits/shop/paint-with.png';
import shop_without_2 from '/benefits/shop/paint-without.png';

import shop_with_3 from '/benefits/shop/refrigerator-with.png';
import shop_without_3 from '/benefits/shop/refrigerator-without.png';

import trendy_1 from '/trendy/shop/1.png';
import trendy_2 from '/trendy/shop/2.png';
import trendy_3 from '/trendy/shop/3.png';
import trendy_4 from '/trendy/shop/4.png';


import article_1_article from '/trendy/shop/articles/1/article.png';
import article_1_brand from '/trendy/shop/articles/1/brand.png';

import article_2_article from '/trendy/shop/articles/2/article.png';
import article_2_brand from '/trendy/shop/articles/2/brand.png';

import article_3_article from '/trendy/shop/articles/3/article.png';
import article_3_brand from '/trendy/shop/articles/3/brand.png';

import article_4_article from '/trendy/shop/articles/4/article.png';
import article_4_brand from '/trendy/shop/articles/4/brand.png';

import article_5_article from '/trendy/shop/articles/5/article.png';
import article_5_brand from '/trendy/shop/articles/5/brand.png';

import article_6_article from '/trendy/shop/articles/6/article.png';
import article_6_brand from '/trendy/shop/articles/6/brand.png';

import article_7_article from '/trendy/shop/articles/7/article.png';
import article_7_brand from '/trendy/shop/articles/7/brand.png';

import article_8_article from '/trendy/shop/articles/8/article.png';
import article_8_brand from '/trendy/shop/articles/8/brand.png';

import article_9_article from '/trendy/shop/articles/9/article.png';
import article_9_brand from '/trendy/shop/articles/9/brand.png';

import article_10_article from '/trendy/shop/articles/10/article.png';
import article_10_brand from '/trendy/shop/articles/10/brand.png';


export default function Shop (){

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
      discount:'30%',
      description:"30% off select Men's and Women's SKECHERS styles.",
      articleImg: article_1_article,
      brandImg: article_1_brand,
    },
    {
      discount:'15%',
      description:'15% off purchase of $100 or more.',
      articleImg: article_2_article,
      brandImg: article_2_brand,
    },
    {
      discount:"15%",
      description:"Extra 15% off Select Apparel, Shoes, Accessories, Fine Jewelry, and Home. ",
      articleImg: article_3_article,
      brandImg: article_3_brand,
    },
    {
      discount:"$20",
      description:"$20 off Your $100 Order.",
      articleImg: article_4_article,
      brandImg: article_4_brand,
    },
    {
      discount:"15%",
      description:"15% off your first pair of base frames.",
      articleImg: article_5_article,
      brandImg: article_5_brand,
    },
    {
      discount:"55%",
      description:"Up to 55% off when you shop in-store or online.",
      articleImg: article_6_article,
      brandImg: article_6_brand,
    },
    {
      discount:"40%",
      description:"Up to 40% off performance tech.",
      articleImg: article_7_article,
      brandImg: article_7_brand,
    },
    {
      discount:"$10",
      description:"Save $10 off any Order of $50 or More Plus Get Free Shipping on Orders $99+ ",
      articleImg: article_8_article,
      brandImg: article_8_brand,
    },
    {
      discount:"90%",
      description:"Save up to 90% on Microsoft Office Home & Business.",
      articleImg: article_9_article,
      brandImg: article_9_brand,
    },
    {
      discount:"$45",
      description:"New members save $45! $15 for a one-year.",
      articleImg: article_10_article,
      brandImg: article_10_brand,
    },
  ]

  const benefitSlides: BenefitSlide[] = [
    {
      color: '--color-purple-shop',
      discount: '-$20',
      with_img: shop_with_1,
      withoout_img: shop_without_1,
    },
    {
      color: '--color-purple-shop',
      discount: '-$10',
      with_img: shop_with_2,
      withoout_img: shop_without_2,
    },
    {
      color: '--color-purple-shop',
      discount: '-$250',
      with_img: shop_with_3,
      withoout_img: shop_without_3,
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
        color={'--color-purple-shop'} 
        wrapperClass={'bg-gradient-to-b from-transparent to-20% dark:to-purple-shop/20 to-purple-shop/45'} 
        title={'Smarter Shopping,'} 
        subtitle={'Bigger Finds!'} 
        description={'From fashion to tech, member-only deals on the things you love.'} 
        banner={bannerCollage} 
        ctaGradientFrom='from-purple-shop' 
        ctaGradientTo='to-purple-shop'
        expiration='08/31/2025'
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
      <BenefitsSection 
        slides={benefitSlides} 
        subtitle='Fashion, Tech & More for Less' 
        color='--color-purple-shop' />
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
      <GatewaySection />
    </>
  );
};