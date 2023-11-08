import React from 'react';
import Navbar from 'components/navbar';
import { useState } from "react";

export default function Activity_board(){

    const [isCardVisible, setCardVisibility] = useState(false);

    const toggleCard = () => {
        // Toggle the visibility state
    console.log('Toggle card function called');
    console.log('isCardVisible:', isCardVisible);
    setCardVisibility(!isCardVisible);
    }

    return (
        <div>
            <nav className="flex flex-row bg-transition fixed top-0 w-full z-20">
                <Navbar />
            </nav>
            <div className="h-screen bg-cover bg-[url(https://drive.google.com/uc?export=view&id=18AJQk3aosy7D62EYxaIvwCi6jlVgxaG2)] pt-28">
                <div className="absolute flex flex-col text-white text-9xl font-black pl-96">
                    <p className="pl-48">COMPANY</p>
                    <p className="pl-96">ACTIVITIES</p>
                </div>

                <div className="flex justify-center bg-white h-full w-full text-back mt-96 pt-16">
                    <div className="flex flex-col gap-8">
                    <div className="flex flex-rows-3 gap-16">

                        <div className="bg-cover bg-[url(https://drive.google.com/uc?export=view&id=1zCXE9iWExk02ivAUBez9rM63pk2gG2ct)] h-96 w-80 block max-w-sm border border-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col h-32 w-76 bg-gray-100 flex items-center justify-start group-hover:bottom-0 opacity-0 hover:opacity-100 transform transition-transform duration-300 ease-in-out hover:translate-y-[-52%] mt-80 pt-2 z-10">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white pr-56"> year...</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 pr-40">text...........................<br></br>............................<br></br>............................</p>
                            </div>
                        </div>

                        <div className="bg-cover bg-[url(https://drive.google.com/uc?export=view&id=18xoG3N2qGkrU65sJLQkqwudj8wW4uUct)] h-96 w-80 block max-w-sm border border-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col h-32 w-76 bg-white flex items-center justify-start group-hover:bottom-0 opacity-0 hover:opacity-100 transform transition-transform duration-300 ease-in-out hover:translate-y-[-52%] mt-80 pt-2">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white pr-56"> year...</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 pr-40">text...........................<br></br>............................<br></br>............................</p>
                            </div>
                        </div>

                        <div className="bg-cover bg-[url(https://drive.google.com/uc?export=view&id=1dbRy9xKfBKTsmXpdae-1xbmns6Z_O8mS)] h-96 w-80 block max-w-sm border border-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col h-32 w-76 bg-white flex items-center justify-start group-hover:bottom-0 opacity-0 hover:opacity-100 transform transition-transform duration-300 ease-in-out hover:translate-y-[-52%] mt-80 pt-2">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white pr-56"> year...</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 pr-40">text...........................<br></br>............................<br></br>............................</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-rows-3 gap-16">

                        <div className="bg-cover bg-[url(https://drive.google.com/uc?export=view&id=1JAxyiSC4o9RFF7Kzb2gWw3_NwTvjiYaF)] h-96 w-80 block max-w-sm border border-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col h-32 w-76 bg-white flex items-center justify-start group-hover:bottom-0 opacity-0 hover:opacity-100 transform transition-transform duration-300 ease-in-out hover:translate-y-[-52%] mt-80 pt-2">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white pr-56"> year...</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 pr-40">text...........................<br></br>............................<br></br>............................</p>
                            </div>
                        </div>

                        <div className="bg-cover bg-[url(https://drive.google.com/uc?export=view&id=173mNAzWjOqZ3kER6gvSMDaTl0K9hWhJX)] h-96 w-80 block max-w-sm border border-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col h-32 w-76 bg-white flex items-center justify-start group-hover:bottom-0 opacity-0 hover:opacity-100 transform transition-transform duration-300 ease-in-out hover:translate-y-[-52%] mt-80 pt-2">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white pr-56"> year...</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 pr-40">text...........................<br></br>............................<br></br>............................</p>
                            </div>
                        </div>

                        <div className="bg-cover bg-[url(https://drive.google.com/uc?export=view&id=1u0LZdjL5HIgiPjZ2HWJS4zXlAGViZXUf)] h-96 w-80 block max-w-sm border border-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col h-32 w-76 bg-white flex items-center justify-start group-hover:bottom-0 opacity-0 hover:opacity-100 transform transition-transform duration-300 ease-in-out hover:translate-y-[-52%] mt-80 pt-2">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white pr-56"> year...</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 pr-40">text...........................<br></br>............................<br></br>............................</p>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>


                <nav className="mt-72 absolute end-0 flex justify-center inset-x-8 p-4 pb-12" aria-label="Page navigation">
                <ul className="list-style-none flex">
                    <li>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#"
                        aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#"
                        >1</a
                    >
                    </li>
                    <li aria-current="page">
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#"
                        >2</a
                    >
                    </li>

                    <li>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#"
                        >3</a
                    >
                    </li>
                    <li>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#"
                        aria-label="Next"
                        ><span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
                </nav>
    
            </div>
        </div>
        
    );
}         


{/* 
<div className="flex items-center justify-center">
    <button
        onClick={toggleCard}
        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
    >2

    </button>
</div> */}