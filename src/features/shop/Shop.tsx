import React from 'react';
import HeroTrendy from '../../shared/layout/HeroTrendy';
import shop_icon from '/icon-shop.svg';
import { BenefitsSection } from '../home/components/BenefitsSection';
import { PricingSection } from '../home/components/PricingSection';
import { GatewaySection } from '../home/components/GatewaySection';
import { Footer } from '../home/components/Footer';
import { BrandsSection } from '../home/components/BrandsSection';

export const Shop: React.FC = () => {
  return (
    <>
      <HeroTrendy logo={shop_icon} color={'--color-purple-shop'} />
      <BrandsSection />
      <BenefitsSection />
      <PricingSection />
      <GatewaySection />
      <Footer />
    </>
  );
};