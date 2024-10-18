import React, { useState, useEffect, useRef } from 'react';
import mainimg from '../Assets/oo204.png';
import { motion } from 'framer-motion';
import LoveStoryPage from '../Pages/OurStory';
import EventsPage from '../Pages/Events';
import RegistryPage from '../Pages/Registry';
import UploadPage from '../Pages/Upload';
import Footer from '../Components/footer';
import Gallery from '../Pages/Gallery';

const HomePage = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current; // Capture the current ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgLoaded(true); // Trigger background image load when visible
          observer.disconnect(); // Stop observing once loaded
        }
      },
      { threshold: 0.1 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement); // Use the captured element for cleanup
      }
    };
  }, []); // Empty dependency array means it only runs once

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        ref={sectionRef}
      >
        <div
          className="relative h-screen w-full bg-center-4 bg-cover lg:bg-size shadow-main text-white"
          style={{
            backgroundImage: bgLoaded ? `url(${require('../Assets/IFX_3582.jpg')})` : 'none',
          }}
        >
          <div className="absolute flex inset-0 bg-green opacity-30 "></div>
          <div className='flex justify-center items-center p-3 '>
            <p className='relative font-cardo m-3 text-center text-md'>24 . 10 . 24</p>
          </div>

          <div className="relative flex flex-col items-center top-2/3 lg:top-72 ">
            <div className='flex font-bold gap-3 font-cardo text-center text-md lg:text-4xl'>
              <p className='text-center lg:text-4xl'>
                OLUWAFIAYOBUNMI <br />
              </p>
              <p>&</p>
              <p className='text-center'>
                OMOGBOLAHAN <br />
              </p>
            </div>
            <p className='font-cardo font-bold text-center text-lg'>#YoursInfinitly</p>
            <img className='relative mt-5 h-20' src={mainimg} alt="Main" />
          </div>
        </div>
      </motion.div>

      <LoveStoryPage />
      <EventsPage />
      <Gallery />

      <div className='lg:mx-52'>
        <RegistryPage />
        <UploadPage />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
