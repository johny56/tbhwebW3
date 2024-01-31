import React, { useState } from "react";
import Navbar from "components/navbar";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Award(){

    const [isCardVisible, setIsCardVisible] = useState(true);

    const toggleCard = () => {
        setIsCardVisible(!isCardVisible);
    };


    return (
        <>

        {!isCardVisible && (
          <nav className="flex flex-row bg-transition fixed top-0 w-full z-20">
            <Navbar />
          </nav>
        )}

        {isCardVisible &&(
            
            <div className="relative bg-cover h-screen w-full bg-[url(https://drive.google.com/uc?export=view&id=17OcFrqE-5HEkzmHXLn5wP6KmcUKK8f05)] py-1">
              
              <div className="h-2/3 w-full flex flex-col justify-center item-center pt-96 text-end md:pt-64">

                <div className="flex flex-row justify-center item-center h-full w-auto pt-48">
                    <div className="absolute top-3/5 left-64 m-4 pr-12 h-72 w-64 bg-transition lg:pr-2 pb-12">
                        <img className="h-full w-full" src="https://drive.google.com/uc?export=view&id=1XVWCJEmmmrRgxoKR4344UXuWWZyxlfXY" alt=""/>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center text-white pt-32">
                        <h2 className="text-9xl font-bold text-back pr-48 md:pl-24 lg:pl-0">WARDS &</h2>
                        <h2 className="text-9xl font-bold text-back pt-2 pl-32 md:pl-72 lg:pl-56">CHIEVEMENTS</h2>
                    </div>

                </div>
                {/* Button to toggle visibility */}
                <Link to="/awardContent">
                 {/* className="absolute inset-x-0 bottom-0"> */}
                    <button
                    // onClick={toggleCard}
                    className={`absolute inset-x-0 bottom-4 focus:outline-none transition${
                        isCardVisible ? 'top-[8rem] z-20' : ''
                    }`}
                    >
                    <FontAwesomeIcon className="fa-7x text-gray-200 fa-beat" icon={faChevronDown} />
                    </button>
                </Link>
              </div>
            </div>

           )}

        </>
    );
}