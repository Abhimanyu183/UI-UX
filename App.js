import React from 'react';
import Header from './components/Header';
import Partners from './components/Partners';
import Solutions from './components/Solutions';
import DeliveryInterface from './components/DeliveryInterface';
import DeliverySection from './components/DeliverySection';
import FAQ from './components/FAQ';
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Partners />
      <Solutions />
      <DeliveryInterface />
      <DeliverySection />
      <FAQ />
      <WhatMakesUsDifferent />
      
      <Footer />
    </div>
  );
}

export default App;
