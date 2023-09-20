import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Whenever the route changes, reset scroll position and hide the button
    window.scrollTo(0, 0);
    setIsVisible(false);
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed mb-24 mr-8 bottom-4 right-4 p-2 bg-green-400 text-white rounded-full hover:bg-green-600"
        >
          {/* Your icon goes here */}
        </button>
      )}
    </nav>
  );
};

export default ScrollToTopButton;

