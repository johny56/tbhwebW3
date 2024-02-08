import React, { useState, useEffect } from 'react';
import Navbar from "components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import picture_1 from "./asset/1.png";
import picture_2 from "./asset/2.png";
import picture_3 from "./asset/4.png";
import picture_4 from "./asset/5.png";
import picture_5 from "./asset/H6.png";
import picture_6 from "./asset/BG Factory.jpg";
import picture_7 from "./asset/Factory_BW.png";

import picture_8 from "./asset/Factory_Green.png";
import picture_9 from "./asset/Quote Factory2.png";

export const images = [
  picture_1,
  picture_2,
  picture_3,
  picture_4,
  picture_5,
  picture_6,
  picture_7,
  picture_8,
  picture_9,
]

export default function OurFACTORY() {

  const [isCardVisible, setIsCardVisible] = useState(true);

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  const location = useLocation();
  const isFactoryPath = location.pathname = '/ourFactory';

  if(isFactoryPath){
    
    return (
      <>
        
        {!isCardVisible && (
          <nav className="flex flex-row bg-transition fixed top-0 w-full z-20">
            <Navbar />
          </nav>
        )}

        {isCardVisible &&(
            
            // <div className="absolute bg-cover h-screen overflow-y-hidden w-auto bg-[url(https://drive.google.com/uc?export=view&id=1OCFsHZyA9FKvkP0wgaEwsozoxmlY7Aih)] text-back text-end">
            <div className="relative bg-cover h-screen overflow-hidden w-auto text-back text-end z-0">
            <div className="absolute h-full w-full top-0 z-10 scale-125">
                <img className="h-full w-full" src={picture_6} alt=""/>
            </div>
              <div className="absolute flex flex-col items-center justify-center pt-48 z-20">
                <img
                  className="h-full w-5/6 rounded-lg"
                  src={picture_7}
                />
              </div>
              <div className="absolute top-96 left-24 -right-0 flex items-center justify-center pt-24 z-20 md:pt-0">
                {/* Button to toggle visibility */}
                <button
                  onClick={toggleCard}
                  className={`relative focus:outline-none transition ${
                    isCardVisible ? 'top-[8rem] z-0' : ''
                  }`}
                >
                  <FontAwesomeIcon className="fa-7x text-gray-200 fa-beat" icon={faChevronDown} />
                </button>
              </div>
            </div>

          )}

        {!isCardVisible &&(

          <div id="cardContent" className={`card transition-opacity duration-300  bg-white`}>
          {/* Content of Cardtoggle */}
            <div className="relative flex flex-col h-screen w-full pt-16">
                    <img className="h-76 w-3/5" src={picture_8}/>
                    <div className="flex justify-end pr-12">
                    <img className="h-full w-3/5" src={picture_9}/>
                    </div>
                    
                    

                <div className="h-screen w-auto bg-white-200" id="factory-select">
                <div className="grid grid-flow-row-dense grid-cols-5 lg:gap-0 pb-8 ml-10 pl-24 md:gap-2 ml-2">


                <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
                    <Link to='/thungSong'>
                        <img className="h-full w-auto rounded-lg" src={picture_1} alt=""/>
                    </Link>
                </div>
                <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
                    <Link to='/yala'>
                        <img className="h-full w-auto rounded-lg" src={picture_2} alt=""/>
                    </Link>
                </div>
                <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
                    <Link to='/narathiwat'>
                        <img className="h-full w-auto rounded-lg" src={picture_5} alt=""/>
                    </Link>
                </div>
                <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
                    <Link to='/pattani'>
                        <img className="h-full w-auto rounded-lg" src={picture_3} alt=""/>
                    </Link>
                </div>
                <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
                    <Link to='/suratthani'>
                        <img className="h-full w-auto rounded-lg" src={picture_4} alt=""/>
                    </Link>
                </div>

                </div>
                </div>

              </div>
          </div>

        )}
    </>
    );
    
  }
    

}