import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnPageChange = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route changes for all routes except the root path
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null; // This component doesn't render anything, it's just for the side effect
};

export default ScrollToTopOnPageChange;



