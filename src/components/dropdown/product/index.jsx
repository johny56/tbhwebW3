import { React, useState } from "react";
import { HashLink } from 'react-router-hash-link';

import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Dropdown, Ripple });


export default function Product(){

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
                className="flex item-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-3xl font-sans font-noto-sans-thai leading-normal text-white"
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
                className={`absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref>
                <li>
                <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="/productpage"
                    data-te-dropdown-item-ref
                    >Products
                </a>
                </li>
                <HashLink smooth to='/productpage/#Packaging'
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    data-te-dropdown-item-ref
                    >Package
                </HashLink>

                <HashLink smooth to='/productpage/#SPEC'
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    data-te-dropdown-item-ref
                    >SPEC
                </HashLink>

                <HashLink smooth to='/productpage/#otherbussiness'
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    data-te-dropdown-item-ref
                    >Otherbussiness
                </HashLink>
            </ul>
        </div>

    );
}