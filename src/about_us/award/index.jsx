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
            
            <div className="relative bg-cover h-screen w-full bg-[url(https://drive.google.com/uc?export=view&id=17OcFrqE-5HEkzmHXLn5wP6KmcUKK8f05)]">
              
              <div className="bg-transition h-2/3 w-full flex flex-col justify-center item-center pt-96 text-end">

                <div className="flex flex-row justify-center item-center h-full w-auto pt-48">
                    <div className="absolute left-96 h-80 w-56 bg-transition pb-24 pr-8 m-4">
                        <img className="h-full w-full " src="https://drive.google.com/uc?export=view&id=1XVWCJEmmmrRgxoKR4344UXuWWZyxlfXY" alt=""/>
                    </div>
                    <div className="flex flex-col items-center justify-center text-white pt-32">
                        <h2 className="text-9xl font-bold text-back pr-56">WARDS &</h2>
                        <h2 className="text-9xl font-bold text-back pt-2 pl-36">CHIEVEMENTS</h2>
                    </div>

                </div>
                {/* Button to toggle visibility */}
                <Link to="/awardContent">
                 {/* className="absolute inset-x-0 bottom-0"> */}
                    <button
                    // onClick={toggleCard}
                    className={`absolute inset-x-0 bottom-8 focus:outline-none transition${
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