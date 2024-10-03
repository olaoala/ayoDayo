import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'; // Import react-swipeable
import I1 from '../Assets/I1.jpg';
import './Css/OurStory.module.css'; // Import the custom CSS

const OurLoveStory = () => {
  const images = [
    { url: I1, caption: 'When stars align, gazes meet, and when you feel a flicker down your spine like you’ve just been shot in the heart by cupids bow and you are conflicted on if you should smile or cry from the sharp pain you feel in your heart or the tiny knot of butterflies you feel in your belly, you know right there and then that that specific moment in time was just meant to be.' },
    { url: I1, caption: 'We met in bowen university, September 2015 during our orientation and I guess I saw him first when he walked in with this hideous glasses 😂, he looked really fine and dark and I noticed how tall he was and I just took my mind off anything. However, he claimed to have seen me first talking with my friends and wanted to say hi to me after the orientation which he did outside of NLS in bowen and surprisingly we had a mutual friend. He would talk to me through this mutual friend and ask her to send his regards before he eventually asked for my number.' },
    { url: I1, caption: 'We remained friends, even close friends if I may say because he tells me almost everything including how he’s going to get married to me eventually when I was ready, which he never stopped talking about until 2019 when we eventually decided to meet and I told him how I’ve always felt about him.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle dot click navigation
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Handle swipe left (go to next image)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle swipe right (go to previous image)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: handleNext, // Swipe left to go to the next image
    onSwipedRight: handlePrev, // Swipe right to go to the previous image
    preventDefaultTouchmoveEvent: true, // Prevent default behavior during swipe
    trackMouse: true, // Also track mouse swipe for desktop
  });

  return (
    <div className="w-full mx-auto p-4">
      <p className='text-center m-2'>Our Story</p>

      <div
        {...handlers} // Add swipe handlers to the container
        className=""
      >
        <div className="m-0">
          <img src={images[currentIndex].url} alt={images[currentIndex].caption} className="rounded-lg" />

        
        </div>

        <div className="mt-2">
          <div className="text-black text-left">
            {images[currentIndex].caption}
          </div>

          <div className="flex mt-4 justify-center">
            {images.map((_, index) => (
              <span
                key={index}
                className={`mx-2 cursor-pointer h-3 w-3 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLoveStory;
