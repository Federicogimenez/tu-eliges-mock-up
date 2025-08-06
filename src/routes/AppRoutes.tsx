import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from '../shared/layout/Main';
import { Home } from '../features/home/Home';
import { ProductPage } from '../features/product/ProductPage';
import { Shop } from '../features/shop/Shop';
import { Travel } from '../features/travel/Travel';
import { Dining } from '../features/dining/Dining';
import { Entertainment } from '../features/entertainment/Entertainment';

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/entertainment" element={<Entertainment />} />
        </Routes>
      </Main>
    </Router>
  );
};