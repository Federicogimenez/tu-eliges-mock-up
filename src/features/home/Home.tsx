import React from 'react';
import { HeroSection } from './components/HeroSection';
import { BrandsSection } from './components/BrandsSection';
import { CategorySection } from './components/CategorySection';
import { BenefitsSection } from './components/BenefitsSection';
import { PricingSection } from './components/PricingSection';
import { GatewaySection } from './components/GatewaySection';
import { Footer } from './components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandsSection />
      <CategorySection />
      <BenefitsSection />
      <PricingSection />
      <GatewaySection />
      <Footer />
    </div>
  );
};