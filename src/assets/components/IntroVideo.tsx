import { motion } from 'framer-motion';

// Fonts
import '@fontsource/tajawal/300.css';
import '@fontsource/tajawal/700.css';

let AAGVideo = 'src/assets/videos/medina_intro_video.mp4';

export default function IntroVideo() {
  return (
    <>
      <video className='object-cover w-full h-screen bg-black [font-family:"Tajawal"]' autoPlay loop muted>
        <source src={AAGVideo} type='video/mp4' />
      </video>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='absolute left-0 flex flex-col items-center justify-center w-full h-full top-20'
      >
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className='mb-4 text-5xl font-bold text-white [font-family:"Tajawal"] sm:text-5xl'
        >
          Welcome to Dr. Legion's Site
        </motion.h1>
        <motion.p
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className='mb-8 text-lg text-white [font-family:"Tajawal"] sm:text-2xl'
        >
          Here we exchange knowledge and refute falsehood.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ backgroundColor: '#ee7d00' }}
          className='w-[30%] px-3 py-3 text-3xl  text-white [font-family:"Tajawal"] rounded-[3px] sm:w-[25rem]'
        >
          Begin
        </motion.button>
      </motion.div>
    </>
  );
}
