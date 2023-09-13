import { React, useState } from "react";

import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Dropdown, Ripple });


export default function Sustain2nav(){

    const [isOpen, setIsOpen] = useState(false);

    const handleDropDown = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
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
            Sustainability
            
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
                href="#product"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                data-te-dropdown-item-ref
                >
                Message from Management
                </a>
            </li>
            <li>
                <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                data-te-dropdown-item-ref
                >
                QESG
                </a>
            </li>
            <li>
                <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                data-te-dropdown-item-ref
                >
                Sustaiability Activities
                </a>
            </li>
            <li>
                <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                data-te-dropdown-item-ref
                >
                Sustaiability Report
                </a>
            </li>
            <li>
                <a
                href="/policy_page"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                data-te-dropdown-item-ref
                >
                Policies
                </a>
            </li>
            
            </ul>
    
            
        </div>
        );
}


