import { React, useState } from "react";
import { Link } from 'react-router-dom';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
  
initTE({ Dropdown, Ripple });



export default function About2nav(){
    

    const [isOpen, setIsOpen] = useState(false);

        const handleDropDown = (event) => {
            event.preventDefault();
            setIsOpen(!isOpen);

            setTimeout(() => {
                setIsOpen(false);
              }, 3000);
        };

        const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
        
            if (section) {
              const yOffset = -100; // Adjust as needed to fine-tune the scroll position
              const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
        };

        return (
            <div className="relative" data-te-dropdown-ref>
            <a
                className="flex item-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-3xl font-sans font-noto-sans-thai leading-normal text-white no-underline hover:underline"
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
                className={`absolute z-[1000] m-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-lg ${
                    isOpen ? 'block' : 'hidden'
                }`}
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref
                >
                <li>
                    <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    data-te-dropdown-item-ref
                    >
                    History
                    </a>
                </li>
                <li>
                    <a
                    href="/CorevaluePage"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    data-te-dropdown-item-ref
                    >
                    Vision & Mission / Core Value
                    </a>
                </li>
                <li>
                    <a
                    href="/company_structure"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    data-te-dropdown-item-ref
                    >
                    Company Structure
                    </a>
                </li>
                <li>
                    <a
                    href="/management"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    data-te-dropdown-item-ref
                    >
                    Management Team
                    </a>
                </li>
                <li>
                    <a
                    href="/ourFactory"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    data-te-dropdown-item-ref
                    >
                    Factory
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    data-te-dropdown-item-ref
                    >
                    Corporate Governance
                    </a>
                </li>
                <li>
                    <a
                    href="/award"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    data-te-dropdown-item-ref
                    >
                    Awards
                    </a>
                </li>
                <li>
                    <a
                    href="/activity_board"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    onClick={() => scrollToSection('activity')}
                    >
                    Company Activities
                    </a>
                </li>
                </ul>

            
        </div>

       
    );
}






