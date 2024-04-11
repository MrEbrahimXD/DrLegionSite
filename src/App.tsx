// import { useState } from 'react'

import './App.css'
import Header from './assets/components/Header'
// import IntroVideo from './assets/components/IntroVideo'
// import Carousel from './assets/components/Carousel'

// React Router DOM:
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Framer Motion:
import { AnimatePresence } from 'framer-motion';

// Pages:
import HomePage from './assets/Pages/HomePage'
import ContactUs from './assets/Pages/ContactUs';
import Downloads from './assets/Pages/Downloads';
// import LoadingIndicator from './assets/components/LoadingIndicator';



function App() {
  

  return (
    <BrowserRouter>
    {/* <LoadingIndicator  /> */}
      <Header />
      <AnimatePresence mode="wait" initial={false} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/downloads" element={<Downloads />} />
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
      </AnimatePresence>
      
    </BrowserRouter>
  );
}


export default App
