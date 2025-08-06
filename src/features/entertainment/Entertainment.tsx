import React from 'react';
import HeroTrendy from '../../shared/layout/HeroTrendy';
import entertainment_icon from '/icon-entertainment.svg';
import { BenefitsSection } from '../home/components/BenefitsSection';
import { PricingSection } from '../home/components/PricingSection';
import { GatewaySection } from '../home/components/GatewaySection';
import { Footer } from '../home/components/Footer';
import { BrandsSection } from '../home/components/BrandsSection';

export const Entertainment: React.FC = () => {
  return (
    <>
      <HeroTrendy logo={entertainment_icon} color={'--color-pink-entertainment'} />
      <BrandsSection />
      <BenefitsSection />
      <PricingSection />
      <GatewaySection />
      <Footer />
    </>
  );
};