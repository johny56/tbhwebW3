import Dropdown from "components/dropdown";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;
  
      setIsNavbarVisible(!isScrollingDown || currentScrollPos < 100); // Show navbar when scrolling up or at the top
      setPrevScrollPos(currentScrollPos);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);
  
    return (

        
       
        
        <nav className={`fixed w-full transition-transform duration-300 ${isNavbarVisible ? 'transform translate-y-0' : '-translate-y-full'}`}>
        <div className="px-4 mx-auto">
            <div className="flex flex-row items-end justify-end">

                    <p className="mx-2">
                        <p className="text-white dark:text-white hover:underline"><Link to="/work_opp">Work Opportunity</Link></p>
                        {/* <a href="#" className="text-white dark:text-white hover:underline" aria-current="page">Work Opportunity</a> */}
                    </p>
                    <p className="mx-2">
                        <a href="#" className="text-white dark:text-white hover:underline">Contact Us</a>
                    </p>
                    <p className="mx-2">
                        <a href="#" className="text-white dark:text-white hover:underline">TH/EN</a>
                    </p>

            </div>
        </div>

{/*         
        <div href="#" className="flex items-start justify-start mx-3 mr-8 pl-16">
            <img src="https://drive.google.com/uc?export=view&id=19G1fi2gEjUFi-D7qAsgk41EQQ6_-4gGr" className="h-18 w-18" alt="Logo" />
            

        <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button> */}
        
        <div className="flex flex-row justify-center item-center ml-12">
                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                      
                      <ul className="flex flex-row font-medium ">
                        <Dropdown></Dropdown>
                      </ul>
                  </div>
                </div>
        {/* </div> */}

            
            
            
      
      </nav>
    );
  };
  
  export default Navbar;
      
      

  {/* //nav  --  className="bg-blend-screen max-w-screen p-4 border-4 bg-gray-50 dark:bg-gray-700"
 // https://drive.google.com/file/d/15ATIlQ_vdTY2ksjTwW-mK-QcFMJMzBcQ/view?usp=drive_link

 //https://drive.google.com/uc?export=view&id=15ATIlQ_vdTY2ksjTwW-mK-QcFMJMzBcQ */}