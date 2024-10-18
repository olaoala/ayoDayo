import React from 'react';
import I1 from '../Assets/IFX_3582.jpg';
import mainimg from '../Assets/oo204.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
<div 
  className="relative h-screen  w-full bg-center-4  bg-cover lg:bg-size shadow-main   text-white"
  style={{ backgroundImage: `url(${I1})`}}
>


          <div className="absolute flex inset-0 bg-green opacity-30 "></div>
          <div className='flex justify-center items-center p-3 '> 
          <p className='relative font-cardo  m-3 text-center text-md'>24 . 10 . 24</p>
          {/* <Link to="/gallery" className="relative font-cardo   text-center m-3 text-md ">Our Gallery</Link> */}
          </div>

          <div className="relative flex flex-col items-center top-2/3 lg:top-64 ">
            <div className='flex font-bold gap-3  font-cardo text-center text-md  lg:text-4xl'>
              <p className='text-center  lg:text-4xl'>
                 OLUWAFIAYOBUNMI <br /> 
              </p>
              <p className=''>&</p>
              <p className='text-center'>
                 OMOGBOLAHAN <br />  
              </p>
            </div>
            <p className='font-cardo font-bold   text-center  text-lg '>#YoursInfinitly</p>
            <img className=' relative mt-5 h-20 ' src={mainimg} alt="Main" />

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
