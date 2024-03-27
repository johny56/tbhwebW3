import { React, useState } from "react";

import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Dropdown, Ripple });


export default function Product2nav(){

    const [isOpen, setIsOpen] = useState(false);

    const handleDropDown = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
        setTimeout(() => {
            setIsOpen(false);
          }, 3000);
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
            Our Products
            
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
                href="/productpage"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                data-te-dropdown-item-ref
                >
                Products
                </a>
            </li>
            <li>
                <a
                href="#Packing"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                data-te-dropdown-item-ref
                >
                Packaging
                </a>
            </li>
            <li>
                <a
                href="#SPEC"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                data-te-dropdown-item-ref
                >
                SPEC
                </a>
            </li>
            <li>
                <a
                href="#otherbussiness"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                data-te-dropdown-item-ref
                >
                Other Bussiness
                </a>
            </li>
            
            </ul>

            
        </div>
        );
}

