import React, { useEffect, useRef } from 'react';


// Sample image list (replace with your image URLs)
const images = [
    require('../Assets/IFX_3452.jpg'),
    require('../Assets/IFX_3513.jpg'),
    require('../Assets/IFX_3531.jpg'),
    require('../Assets/IFX_3582.jpg'),
    require('../Assets/IFX_3591.jpg'),
    require('../Assets/IFX_3597.jpg'),
    require('../Assets/IFX_3599.jpg'),
    require('../Assets/IFX_3661.jpg'),
    require('../Assets/IFX_3681.jpg'),
    require('../Assets/IFX_3735.jpg'),
    require('../Assets/IFX_3743.jpg'),
    require('../Assets/IFX_3753.jpg'),
    require('../Assets/IFX_3765.jpg'),
    require('../Assets/IFX_3773.jpg')
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
