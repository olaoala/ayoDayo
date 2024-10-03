import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [greetingIndex, setGreetingIndex] = useState(0); // Track the current greeting index
  const greetings = ['Hey', 'Do you know what love feels like??', 'Come let me show you!'];
  const navigate = useNavigate();

  const navigateToHome = useCallback(() => {
    navigate('/home'); // Use navigate function from react-router-dom
  }, [navigate]);

  useEffect(() => {
    // Update greeting every 2 seconds
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => {
        if (prevIndex < greetings.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval); // Stop cycling through greetings
          setTimeout(() => navigateToHome(), 1000); 
        // Wait 1 second, then navigate
          return prevIndex; // Keep the last greeting while navigating
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [greetings, navigateToHome]);

  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <p className="text-xl font-bold text-rose-gold animate-pulse">
        {greetings[greetingIndex]}
      </p>
    </div>
  );
};

export default LandingPage;
