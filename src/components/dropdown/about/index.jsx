import { React, useState } from "react";

import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
  
initTE({ Dropdown, Ripple });



export default function About(){
    

    const [isOpen, setIsOpen] = useState(false);

    
    const handleDropDown = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);

        setTimeout(() => {
            setIsOpen(false);
          }, 7000);
    };

        return (
            <div className="relative" data-te-dropdown-ref>
            <a
                className="flex item-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-3xl font-sans font-noto-sans-thai leading-normal text-white"
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
                // className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                // aria-labelledby="dropdownMenuButton2"
                className={`absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref
                >
                <li>
                <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="/"
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
                    href="/company_structure"
                    data-te-dropdown-item-ref
                    >Company Structure
                    
                </a>
                </li>
                <li>
                
                <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="/management"
                    data-te-dropdown-item-ref
                    >Management Team
                </a>
                {/* <Link to="/management"></Link>   */}
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
                    href="/"
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

