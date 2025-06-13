import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Adv from './components/Adv';
import Brand from './components/Brand';
import NewArrivals from './components/NewArrivals';
import SaleBanner from './components/salebanner';
import YoungsFavourite from './components/young';
import Promo from './components/Promo';
import Footer from './components/Footer';
import ApiCalling from './pages/ApiCalling';
import ProductDetails from './pages/ProductDetails'; 

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Adv />
            <Brand />
            <NewArrivals />
            <SaleBanner />
            <YoungsFavourite />
            <Promo />
          </>
        } />

        <Route path="/products" element={<ApiCalling />} />
      </Routes>
   
   <Route path="/product/:id" element={<ProductDetails />} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
