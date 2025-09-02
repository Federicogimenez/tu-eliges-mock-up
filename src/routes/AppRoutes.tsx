
import 'keen-slider/keen-slider.min.css';
import { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from '../shared/layout/Main';
// import Home from '../features/home/Home';
import LoaderSimple from '../shared/components/LoaderSimple';

const Home = lazy( () => import('../features/home/Home') )
const ProductPage = lazy( () => import('../features/product/ProductPage') )
const Shop = lazy( () => import('../features/shop/Shop') )
const Travel = lazy( () => import('../features/travel/Travel') )
const Dining = lazy( () => import('../features/dining/Dining') )
const Entertainment = lazy( () => import('../features/entertainment/Entertainment') )
const ThankYou = lazy( () => import('../features/thankyou/ThankYou') )
const Activate = lazy( () => import('../features/activate/Activate') )

export const AppRoutes: React.FC = () => {

  return (
    <Router>
      <Main>
        <Suspense fallback={<div className='w-full h-dvh flex justify-center items-center'>
            <LoaderSimple />
          </div>} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/activate" element={<Activate />} />
          </Routes>
        </Suspense>
      </Main>
    </Router>
  );
};