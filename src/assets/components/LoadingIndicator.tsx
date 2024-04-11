
import { motion } from 'framer-motion';

import '@fontsource-variable/orbitron';


const LoadingIndicator = () => {

  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className='flex flex-col items-center justify-center h-screen bg-black'
>
  {/* Your GIF component */}
  <motion.img src="src/assets/videos/prophet.gif" alt="Loading" className='h-80'/>
  <motion.p className='text-white [font-family:"Orbitron Variable"] text-4xl m-10 font-bold'>Loading ...</motion.p>
</motion.div>

  );
};

export default LoadingIndicator;
