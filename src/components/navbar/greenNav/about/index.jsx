import { React, useState } from "react";
// import { Link } from 'react-router-dom';

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
              }, 2000);
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
                    href="#core_value"
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
                    href="#factory-clip"
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
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    data-te-dropdown-item-ref
                    >
                    Awards
                    </a>
                </li>
                <li>
                    <a
                    href="#activity"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    data-te-dropdown-item-ref
                    >
                    Company Activities
                    </a>
                </li>
                </ul>

            
        </div>

       
    );
}


// import { React, useState, useEffect } from "react";
// import Logo from "components/navbar/logo";

// import {
//   Dropdown,
//   Ripple,
//   initTE,
// } from "tw-elements";

// initTE({ Dropdown, Ripple });

// export default function About2nav() {

//   const [isNavbarVisible, setIsNavbarVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;

//       // Show the navbar when at the top of the page
//       setIsNavbarVisible(currentScrollPos <= 0);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 transition-transform duration-300 ${
//         isNavbarVisible ? 'transform translate-y-0' : '-translate-y-full'
//       }`}
//     >
//       <div className="px-4 mx-auto flex items-center justify-between">
//         <div className="flex items-center">
//           <Logo></Logo> {/* Replace with your logo component */}
//           <div className="flex item-center ml-40 pl-40"> {/* Adjust margin as needed */}
//             <Dropdown></Dropdown> {/* Replace with your dropdown component */}
//           </div>
//         </div>
//         <div className="flex flex-row items-end justify-end pr-8">
//           <a
//             href="/"
//             className="font-sans font-noto-sans-thai text-white dark:text-white hover:underline"
//           >
//             History
//           </a>
//           <a
//             href="#core_value"
//             className="font-sans font-noto-sans-thai text-white dark:text-white hover:underline"
//           >
//             Vision & Mission / Core Value
//           </a>
//           {/* Add more navigation links as needed */}
//         </div>
//       </div>
//     </nav>
//   );
// }





