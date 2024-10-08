import React from 'react';
import Navbar from '../Components/Navbar';
import I1 from '../Assets/I1.jpg';
import mainimg from '../Assets/oo204.png'
import { motion } from 'framer-motion';
import EventsPage from './Events';
import LoveStoryPage from './OurStory';
import RegistryPage from './Registry';
import UploadPage from './Upload';
import Footer from '../Components/footer';


const HomePage = () => {
  return (
    <div>
            <Navbar />

         <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeIn' }}
    >
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${I1})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col items-center justify-end h-full text-rose-gold">
          {/* <InfinityAnimation/> */}
          <img className='h-40' src={mainimg} alt="" />
          <div className='flex font-bold gap-5 text-lg m-10'>
          <p className='text-center'>Oluwafiayobunmi <br /> Fiponmile</p>
          <p className='mt-4'>&</p>
          <p className='text-center'>Omogbolahan <br /> Dayo</p>
          </div>
          
        </div>
      </div>
    </motion.div>

    <LoveStoryPage/>

    <EventsPage/>

    <RegistryPage/>
    <UploadPage/>
    <Footer/>

    </div>
   
  );
};

export default HomePage;
