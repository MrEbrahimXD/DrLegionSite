import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import JuhyanaLogo from '../images/juyhana_logo.png'  
import QasrAinyLogo from '../images/qasr_ainy_logo.jpg'  
import SodicLogo from '../images/sodic_logo.png'  
import WeLogo from '../images/we_logo.png'  
import ZiziniaLogo from '../images/zizinia_logo.png'  


const logos = [
  { name: 'Juhayna', image: JuhyanaLogo },
  { name: 'Qasr Al Ainy', image: QasrAinyLogo },
  { name: 'We', image:  WeLogo},
  { name: 'Sodic', image:  SodicLogo},
  {name: 'Zizinia', image: ZiziniaLogo}
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? logos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === logos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative p-10 bg-[#ee7d00] [scroll-bar-width: 0] text-center">
      <div className="flex items-center justify-center ">
        <button onClick={handlePrev} className="absolute left-0 transform -translate-y-1/2 top-1/2">
          <ChevronLeftIcon className="w-6 h-6 m-4 text-gray-500" />
        </button>
        <button onClick={handleNext} className="absolute right-0 transform -translate-y-1/2 top-1/2">
          <ChevronRightIcon className="w-6 h-6 m-4 text-gray-500" />
        </button>
        <h2 className="text-2xl font-bold text-center text-gray-800">شركاؤنا</h2>
      </div>
      <div className="p-4 m-4">
        <div className="flex mb-10 space-x-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`w-40 h-40 rounded-lg flex-shrink-0 transition-all duration-300  ${
                index === activeIndex ? 'scale-110 shadow-lg' : 'opacity-50'
              }`}
            >
              <img src={logo.image} alt={logo.name} className="object-contain w-full h-full" />
              <p className="mt-2 text-center">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {logos.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-2 transition-all duration-300 ${
              index === activeIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
