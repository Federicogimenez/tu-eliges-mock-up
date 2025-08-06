import React from 'react';
import HeroTrendy from '../../shared/layout/HeroTrendy';
import travel_icon from '/icon-travel.svg'
import { BenefitsSection } from '../home/components/BenefitsSection';
import { PricingSection } from '../home/components/PricingSection';
import { GatewaySection } from '../home/components/GatewaySection';
import { Footer } from '../home/components/Footer';
import { BrandsSection } from '../home/components/BrandsSection';

export const Travel: React.FC = () => {
  return (
    <>
      <HeroTrendy logo={travel_icon} color={'--color-blue-travel'} />
      <BrandsSection />
      <BenefitsSection />
      <PricingSection />
      <GatewaySection />
      <Footer />
    </>
  );
};