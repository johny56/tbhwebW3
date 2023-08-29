import { React, useState } from "react";
// import Card from "about_us/core_value";

import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
  
initTE({ Dropdown, Ripple });

export default function About(){
    

    const [isOpen, setOpen] = useState(false);

    const handleDropDown = () => {
        setOpen(!isOpen);
    };

        return (
            <div className="relative" data-te-dropdown-ref>
            <a
                // className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-base font-sans leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                className="flex item-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-base font-sans leading-normal text-white"
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light" onClick={handleDropDown}>
                About TBH
                
            </a>
            <ul
                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref>
                <li>
                <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >History
                    
                </a>
                </li>
                <li>
                <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#core_value"
                    data-te-dropdown-item-ref
                    >Vision&Mision / Core Value			
                    </a>
                </li>
                <li>
                <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >Company Structure
                    
                </a>
                </li>
                <li>
                <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >Management Team
                    
                </a>
                </li>
                <li>
                <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#factory-clip"
                    data-te-dropdown-item-ref
                    >Factory
                    
                </a>
                </li>
                <li>
                <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >Corporate Governance
                    
                </a>
                </li>

                <li>
                <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >Awards
                    
                </a>
                </li>
                <li>
                <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#activity"
                    data-te-dropdown-item-ref
                    >Company Activities	
                    
                </a>
                </li>
                
            </ul>
        </div>

       
    );
}

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from React Router if you're using it

// const About = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="relative inline-block">
//       <button onClick={toggleDropdown} className="text-white">
//         Open Dropdown
//       </button>
//       {isDropdownOpen && (
//         <div className="absolute right-0 mt-2 bg-gray-700 p-2">
//           <Link to="/" className="block text-white hover:text-blue-500 transition-colors">Home</Link>
//           <Link to="/about" className="block text-white hover:text-blue-500 transition-colors">About</Link>
//           {/* Add more Link components for additional menu items */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default About;
