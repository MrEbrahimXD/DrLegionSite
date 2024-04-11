import { useState } from 'react'

import './App.css'
import Header from './assets/components/Header'
import IntroVideo from './assets/components/IntroVideo'
import Carousel from './assets/components/Carousel'

// React Router DOM:
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Framer Motion:
import { AnimatePresence } from 'framer-motion';

// Pages:
import OurProducts from './assets/Pages/OurProducts'
import AboutUs from './assets/Pages/AboutUs'
import HomePage from './assets/Pages/HomePage'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatePresence mode="wait" initial={false} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<OurProducts />} />
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
      </AnimatePresence>
      
    </BrowserRouter>
  );
}


export default App
