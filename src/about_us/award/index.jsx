import React, { useState } from "react";
import Navbar from "components/navbar";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import picture_1 from "./asset/1-removebg-preview.png";
import picture_2 from "./asset/BG_Awards.svg";

export const images = [
    picture_1,
    picture_2,
]

export default function Award(){

    const [isCardVisible, setIsCardVisible] = useState(true);

    const toggleCard = () => {
        setIsCardVisible(!isCardVisible);
    };


    return (
        <>

        {/* {!isCardVisible && (
          <nav className="flex flex-row bg-transition fixed top-0 w-full z-20">
            <Navbar />
          </nav>
        )} */}

        {/* {isCardVisible &&( */}
            
            {/* <div className="relative bg-cover h-screen w-full bg-[url(https://drive.google.com/uc?export=view&id=17OcFrqE-5HEkzmHXLn5wP6KmcUKK8f05)] py-1"> */}
            <div className="relative bg-contain h-screen overflow-hidden w-auto text-back text-end bg-no-scroll z-30">
              <div className="absolute h-full w-auto scale-150 mt-32 p-20 ml-52 z-10">
                <img className="h-full w-full" src={picture_2} alt=""/>
              </div>
              <div className="h-2/3 w-full flex flex-col justify-center item-center pt-96 text-end md:pt-64 z-20">

                <div className="flex flex-row justify-center item-center h-full w-auto pt-48">

                    <div className="absolute top-96 left-64 h-72 w-auto lg:pr-2 z-20">
                        <img className="h-full w-full" src={picture_1} alt=""/>
                    </div>
                        
                    
                    {/* <div className="flex flex-row items-center justify-center pt-24 z-20 scale-150"> 
                      <h2 className="text-9xl font-sans font-extrabold text-white text-border-white text-stroke pr-48 md:pl-24 lg:pl-0">A</h2>
                    </div> */}
                    <div className="flex flex-col items-center justify-center text-white pt-24 z-20">

                          <div className="">
                            <h2 className="text-8xl font-bold text-back pr-64 md:pl-12 lg:pl-24">WARDS &</h2>
                            <h2 className="text-8xl font-bold text-back pt-2 pl-32 md:pl-56 lg:pl-56">CHIEVEMENTS</h2>
                          </div>

                        <div className="flex flex-row item-center justify-center">
                          
                        </div>
                    </div>

                </div>
                {/* Button to toggle visibility */}
                <Link to="/awardContent">
                 {/* className="absolute inset-x-0 bottom-0"> */}
                    <button
                    onClick={toggleCard}
                    className={`absolute inset-x-0 bottom-4 focus:outline-none transition${
                        isCardVisible ? 'top-[8rem] z-20' : ''
                    }`}
                    >
                    <FontAwesomeIcon className="fa-7x text-gray-200 fa-beat" icon={faChevronDown} />
                    </button>
                </Link>
              </div>
            </div>

           {/* )} */}

        </>
    );
}