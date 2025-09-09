import HeroTrendy, { type HeroTrendyArticleProps } from '../../shared/layout/HeroTrendy';
import BenefitsSection, { type BenefitSlide } from '../home/components/BenefitsSection';
import GatewaySection from '../home/components/GatewaySection';
import PricingSection from '../home/components/PricingSection';

import pricing_banner from '/pricing/entertainment/drink.png';

import profile_museum from '/hero-category/entertainment/museum.png';
import icon_museum from '/hero-category/entertainment/icons/museum.svg';

import icon_zoo from '/hero-category/entertainment/icons/zoo.svg';
import profile_zoo from '/hero-category/entertainment/zoo.png';

import icon_golf from '/hero-category/entertainment/icons/golf.svg';
import profile_golf from '/hero-category/entertainment/golf.png';

import profile_cine from '/hero-category/entertainment/cine.png';
import icon_cine from '/hero-category/entertainment/icons/cine.svg';

import icon_park from '/hero-category/entertainment/icons/park.svg';
import profile_park from '/hero-category/entertainment/park.png';


import benefit_with_1 from '/benefits/entertainment/golf-with.png';
import benefit_without_1 from '/benefits/entertainment/golf-without.png';

import benefit_with_2 from '/benefits/entertainment/garden-with.png';
import benefit_without_2 from '/benefits/entertainment/garden-without.png';

import benefit_with_3 from '/benefits/entertainment/park-with.png';
import benefit_without_3 from '/benefits/entertainment/park-without.png';


import trendy_1 from '/trendy/entertainment/1.png';
import trendy_2 from '/trendy/entertainment/2.png';
import trendy_3 from '/trendy/entertainment/3.png';
import trendy_4 from '/trendy/entertainment/4.png';

import article_1_brand from '/trendy/entertainment/articles/disney.png';
import article_2_brand from '/trendy/entertainment/articles/universal.png';
import article_3_brand from '/trendy/entertainment/articles/zoo-sd.png';
import article_4_brand from '/trendy/entertainment/articles/zoo-mia.png';
import article_5_brand from '/trendy/entertainment/articles/space.png';
import article_6_brand from '/trendy/entertainment/articles/six.png';
import article_7_brand from '/trendy/entertainment/articles/lego.png';
import article_8_brand from '/trendy/entertainment/articles/cine.png';
import article_9_brand from '/trendy/entertainment/articles/ticket-show.png';
import article_10_brand from '/trendy/entertainment/articles/sporting.png';


import HeroCategory from '../../shared/layout/HeroCategory';


export default function Entertainment (){

  const categoryTestimonials = [
    {
      icon: icon_museum,
      img: profile_museum,
      text: '“At the New Bedford Whaling Museum, my discount membership gave me free entry.” - Karen D.',
    },
    {
      icon: icon_zoo,
      img: profile_zoo,
      text: '“I use this program for local zoo membership. My family loves it.” - Andrea E.',
    },
    {
      icon: icon_golf,
      img: profile_golf,
      text: '“My son and I enjoyed an outing to Topgolf. It was great to use the coupon to save an extra $10 so I could splurge on everything my son wanted.” - Don A.',
    },
    {
      icon: icon_cine,
      img: profile_cine,
      text: '“I love how much I save going to Cinemark with the discounts.” - Krisnet H.',
    },
    {
      icon: icon_park,
      img: profile_park,
      text: '“I saved major money on a Walt Disney World 4-day pass.” - David R.',
    },
  ]

  const trendyArticles: HeroTrendyArticleProps[] = [
    {
      discount:'',
      description:"Turn Every Visit into a Lifetime Memory!",
      brandImg: article_1_brand,
    },
    {
      discount:'',
      description:'The Happiest Place, Now with Happier Prices!',
      brandImg: article_2_brand,
    },
    {
      discount:'',
      description:'Wild Adventures, Tamed Costs!',
      brandImg: article_3_brand,
    },
    {
      discount:"",
      description:"Explore the Wild, Save in Style!",
      brandImg: article_4_brand,
    },
    {
      discount:"",
      description:"Reach for the Stars, Spend Less on the Journey!",
      brandImg: article_5_brand,
    },
    {
      discount:"",
      description:"Feel the Rush, Not the Price Tag!",
      brandImg: article_6_brand,
    },
    {
      discount:"",
      description:"Build Memories, Not Expenses!",
      brandImg: article_7_brand,
    },
    {
      discount:"",
      description:"Big Screens, Small Prices.",
      brandImg: article_8_brand,
    },
    {
      discount:"",
      description:"Show Tickets Curtains Up, Prices Down!",
      brandImg: article_9_brand,
    },
    {
      discount:"",
      description:"Sporting Events Where Every Seat Feels Like Front Row!",
      brandImg: article_10_brand,
    },
  ]

  const benefitSlides: BenefitSlide[] = [
    {
      color: '--color-pink-entertainment',
      discount: '-$18',
      with_img: benefit_with_1,
      withoout_img: benefit_without_1,
    },
    {
      color: '--color-pink-entertainment',
      discount: '-$24',
      with_img: benefit_with_2,
      withoout_img: benefit_without_2,
    },
    {
      color: '--color-pink-entertainment',
      discount: '-$420',
      with_img: benefit_with_3,
      withoout_img: benefit_without_3,
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
        color={'--color-pink-entertainment'} 
        wrapperClass={'bg-gradient-to-b from-transparent to-20% dark:to-pink-entertainment/20 to-pink-entertainment/45'} 
        title={'Smarter Entertainment,'} 
        subtitle={'Bigger Smiles!'} 
        description={'From theme parks to movie nights—exclusive savings on the fun you love.'} 
        banner={bannerCollage} 
        ctaGradientFrom='from-pink-entertainment' 
        ctaGradientTo='to-pink-entertainment'
        articles={trendyArticles} />
      <PricingSection 
        title='Cheaper Than a <br /> Concert Drink.'
        subtitle='And it helps you save even more.'
        color='--color-pink-entertainment'
        img={pricing_banner}
        ctaGradientFrom='from-black' 
        ctaGradientTo='to-pink-entertainment' 
        ctaGradientFrom2='from-pink-entertainment' ctaGradientTo2='to-black' />
      <BenefitsSection 
        slides={benefitSlides} 
        subtitle='More Entertainment, Less Expense' 
        color='--color-pink-entertainment' />
      <HeroCategory
        title='Entertainment'
        subtitle='Without Limits'
        description='Save on concerts, parks & events and make every outing unforgettable.'
        retailers={50}
        color={'--color-pink-entertainment'} 
        dotsColor={'bg-pink-entertainment'} 
        testimonials={categoryTestimonials} 
        ctaGradientFrom='from-pink-entertainment' 
        ctaGradientTo='to-pink-entertainment' />
      <GatewaySection home_btn />
    </>
  );
};