// import { useWindowSize } from '../../hooks/useWindowSize';
import BenefitsSection, { type BenefitSlide } from './components/BenefitsSection';
import { BrandsSection } from './components/BrandsSection';
import GatewaySection from '../../shared/layout/GatewaySection';
// import HeroVideoSection from './components/HeroVideoSection';
import PricingSection from '../../shared/layout/PricingSection';
import CalculatorTableSection from '../../shared/layout/CalculatorTableSection';
import CategoriesSection from './components/CategoriesSection';
import { useAllyContext } from '../../hooks/useAllyContext';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useJsonLd } from '../../hooks/useJsonLd';

import pricing_family from "/pricing/home/family.png"

// import videoHeroMobile from "/hero-video-mobile.mp4"
// import videoHeroPreviewMobile from "/hero-video-mobile-preview.png"

// import videoHeroDesk from "/hero-video-desk.mp4"
// import videoHeroPreviewDesk from "/preview-hero-video-desk.png"

import shop_with from '/benefits/home/shop-with.png'
import shop_without from '/benefits/home/shop-without.png'

import dining_with from '/benefits/home/dining-with.png'
import dining_without from '/benefits/home/dining-without.png'

import travel_with from '/benefits/home/travel-with.png'
import travel_without from '/benefits/home/travel-without.png'

import entertainment_with from '/benefits/home/entertainment-with.png'
import entertainment_without from '/benefits/home/entertainment-without.png'
import LearnHow from './components/LearnHow';


export default function Home (){

  usePageMeta({
    title: 'UChooseIt.us — Save Up to 50% on Dining, Travel, Shopping & Entertainment',
    description: 'One VIP membership, 1 million+ deals across the US. Save $2,000+/year on restaurants, hotels, retail & theme parks for less than $4/month.',
    canonical: 'https://uchooseit.us/',
  });

  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'UChooseIt VIP Membership',
    description: 'Annual VIP discount membership with access to 1 million+ deals on dining, travel, shopping and entertainment across the United States.',
    brand: { '@id': 'https://uchooseit.us/#organization' },
    url: 'https://uchooseit.us/product',
    image: 'https://uchooseit.us/site_preview.png',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '47.99',
      availability: 'https://schema.org/InStock',
      url: 'https://uchooseit.us/product',
      seller: { '@id': 'https://uchooseit.us/#organization' },
    },
  });

  const { allyData } = useAllyContext();
  

  // const { width } = useWindowSize()

  const slides: BenefitSlide[] = [
    {
      color: '--color-purple-shop',
      discount: '-$410',
      with_img: shop_with,
      withoout_img: shop_without,
    },
    {
      color: '--color-yellow-dining',
      discount: '-$30',
      with_img: dining_with,
      withoout_img: dining_without,
    },
    {
      color: '--color-blue-travel',
      discount: '-$110',
      with_img: travel_with,
      withoout_img: travel_without,
    },
    {
      color: '--color-pink-entertainment',
      discount: '-$173',
      with_img: entertainment_with,
      withoout_img: entertainment_without,
    },
  ];


  return (
    <>
      {/* <HeroSection /> */}
      {/* <HeroVideoSection videoHero={width > 980 ? videoHeroDesk : videoHeroMobile} videoHeroPreview={width > 980 ? videoHeroPreviewDesk : videoHeroPreviewMobile} /> */}
      {/* <CategorySection /> */}
      <LearnHow />
      <CategoriesSection />
      <BrandsSection />
      <BenefitsSection slides={slides} />
      <CalculatorTableSection membershipCost={allyData.new_price_after_discount} />
      <PricingSection img={pricing_family} />
      <GatewaySection />
    </>
  );
};