import { useWindowSize } from '../../hooks/useWindowSize';
import BenefitsSection, { type BenefitSlide } from './components/BenefitsSection';
import { BrandsSection } from './components/BrandsSection';
import CategorySection from './components/CategorySection';
import { GatewaySection } from './components/GatewaySection';
import HeroVideoSection from './components/HeroVideoSection';
import PricingSection from './components/PricingSection';

import pricing_family from "/pricing/home/family.png"

import videoHeroMobile from "/hero-video-mobile.mp4"
import videoHeroPreviewMobile from "/hero-video-mobile-preview.png"

import videoHeroDesk from "/hero-video-desk.mp4"
import videoHeroPreviewDesk from "/preview-hero-video-desk.png"

import shop_with from '/benefits/home/shop-with.png'
import shop_without from '/benefits/home/shop-without.png'

import dining_with from '/benefits/home/dining-with.png'
import dining_without from '/benefits/home/dining-without.png'

import travel_with from '/benefits/home/travel-with.png'
import travel_without from '/benefits/home/travel-without.png'

import entertainment_with from '/benefits/home/entertainment-with.png'
import entertainment_without from '/benefits/home/entertainment-without.png'


export default function Home (){

  const { width } = useWindowSize()

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
      <HeroVideoSection videoHero={width > 980 ? videoHeroDesk : videoHeroMobile} videoHeroPreview={width > 980 ? videoHeroPreviewDesk : videoHeroPreviewMobile} />
      <BrandsSection />
      <CategorySection />
      <BenefitsSection slides={slides} />
      <PricingSection img={pricing_family} />
      <GatewaySection />
    </>
  );
};