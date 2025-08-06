import React from 'react';
import HeroTrendy from '../../shared/layout/HeroTrendy';
import dining_icon from '/icon-dining.svg'
import { BenefitsSection } from '../home/components/BenefitsSection';
import { PricingSection } from '../home/components/PricingSection';
import { GatewaySection } from '../home/components/GatewaySection';
import { Footer } from '../home/components/Footer';
import { BrandsSection } from '../home/components/BrandsSection';

export const Dining: React.FC = () => {
  return (
    <>
      <HeroTrendy logo={dining_icon} color={'--color-yellow-dining'} />
      <BrandsSection />
      <BenefitsSection />
      <PricingSection />
      <GatewaySection />
      <Footer />
    </>
  );
};