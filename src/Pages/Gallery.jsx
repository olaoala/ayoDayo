import React, { useEffect, useRef } from 'react';
import I1 from '../Assets/IFX_3452.jpg'
import I2 from '../Assets/IFX_3513.jpg'
import I3 from '../Assets/IFX_3531.jpg'
import I4 from '../Assets/IFX_3582.jpg'
import I5 from '../Assets/IFX_3591.jpg'
import I6 from '../Assets/IFX_3597.jpg'
import I7 from '../Assets/IFX_3599.jpg'
import I8 from '../Assets/IFX_3661.jpg'
import I9 from '../Assets/IFX_3681.jpg'
import I11 from '../Assets/IFX_3735.jpg'
import I14 from '../Assets/IFX_3743.jpg'
import I15 from '../Assets/IFX_3753.jpg'
import I16 from '../Assets/IFX_3765.jpg'
import I17 from '../Assets/IFX_3773.jpg'
// import I1 from '../Assets/IFX_3753.jpg'

// Sample image list (replace with your image URLs)
const images = [
    I8,I9, I3,I4,I7,I11,I14,I15,I16,I17,I1, I2,I5,I6
];

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    galleryItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      galleryItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="container  px-4 py-10">
         <h1 className="text-center font-cardo text-xl lg:text-xl font-bold m-2">
       OUR GALLERY
      </h1>
      <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
     
        {images.map((src, index) => (
          <div
            key={index}
            className="gallery-item  transition-opacity duration-700 ease-in"
          >
            <img
              src={src}
              alt={`Gallery  ${index + 1}`}
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
