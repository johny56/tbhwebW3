import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
