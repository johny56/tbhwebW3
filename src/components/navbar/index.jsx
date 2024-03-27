

import Dropdown from "components/dropdown";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "./logo";
import GREENnav from "./greenNav";


const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false); // Set initial visibility to false
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
  
      // Show navbar only when at the top of the page
      setIsNavbarVisible(currentScrollPos === 0);
  
      setPrevScrollPos(currentScrollPos);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  
    return (
      <div>
        {/* Original Navbar */}
        <nav className={`fixed w-full transition-transform z-40 duration-300`}>
        {/* <nav className={`fixed w-full transition-transform z-40 duration-300 ${isNavbarVisible ? 'transform translate-y-0' : '-translate-y-full'}`}> */}
          <div className="px-4 mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <Logo></Logo> {/* Replace with your logo component */}
              <div className="flex item-center ml-32 pl-32">
                
                <div className="relative rounded-full bg-gray-600/20 ml-32">
                  <Dropdown></Dropdown>
              
                </div>
              </div>
            </div>
            <div className="flex flex-row items-end justify-end pr-8 pb-16">
              <p className="mx-2">
                <p className="font-sans font-noto-sans-thai text-white dark:text-white hover:underline"><Link to="/work_opp">Work Opportunity</Link></p>
              </p>
              <p className="mx-2">
                <a href="#" className="font-sans font-noto-sans-thai text-white dark:text-white hover:underline">
                  <Link to="/contact_us">Contact Us</Link>
                </a>
              </p>
              <p className="mx-2">
                <a href="#" className="font-sans font-noto-sans-thai text-white dark:text-white hover:underline">TH|EN</a>
              </p>
            </div>
          </div>
        </nav>
        
        {window.pageYOffset >= 800 &&(
          <GREENnav></GREENnav>  
        )}
        
      

      </div>
    );
};

export default Navbar;

