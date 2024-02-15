import React, { useState } from 'react';
// import Navbar from 'components/navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
// import { useEffect } from 'react';

// import picture_1 from "./asset/1.png";
// import picture_2 from "./asset/2.png";
// import picture_3 from "./asset/4.png";
// import picture_4 from "./asset/5.png";
// import picture_5 from "./asset/H6.png";
import picture_6 from "./asset/BG Factory.jpg";
import picture_7 from "./asset/Factory_BW.png";

import picture_8 from "./asset/Factory_Green.png";
import picture_9 from "./asset/Quote Factory2.png";
// import GREENnav from 'components/navbar/greenNav';
// import { transition } from '@chakra-ui/system';

export const images = [
  // picture_1,
  // picture_2,
  // picture_3,
  // picture_4,
  // picture_5,
  picture_6,
  picture_7,
  picture_8,
  picture_9,
]

export default function OurFACTORY() {

  const [isCardVisible, setIsCardVisible] = useState(true);
  // const element = document.getElementById("cardContent");

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
    
    setTimeout(() => {  
      window.scrollTo(10,document.body.scrollHeight);
    }, 0);
  };


    return (
      <>

            
              <div className="relative bg-contain h-screen overflow-hidden w-auto text-back text-end bg-no-scroll z-30">
              
                <div className="absolute h-full w-full top-0 z-10 scale-125">
                    <img className={`h-full w-full rounded-lg
                        ${isCardVisible ? 'z-10 overflow-y-hidden':'transition transfrom -translate-y-full delay-500 duration-1000 ease-in-out z-10'
                    }`} 
                    src={picture_6} alt=""/>
                </div>
                  <div className="absolute flex flex-col items-center justify-center pt-48 z-10">
                    <img
                      className={`h-full w-full rounded-lg
                      ${isCardVisible ? 'z-10':'transition transfrom -translate-y-full delay-700 duration-500 ease-in-out pb-20 z-10'
                  }`} 
                      src={picture_7}
                      alt=""
                    />
                  </div>
                  <div className="absolute top-96 left-0 -right-0 flex items-center justify-center pt-24 z-10 md:pt-0">
                    {/* Button to toggle visibility */}
                    <button
                      id="showBox"
                      onClick={toggleCard}
                      className={`relative focus:outline-none transition ${
                        isCardVisible ? 'top-[8rem] z-10' : 'scale-0'
                      }`}
                    >
                      <FontAwesomeIcon className="fa-7x text-gray-200 fa-beat" icon={faChevronDown} />
                    </button>
                  </div>

                </div>
            
            {/* <div className="absolute bg-cover h-screen overflow-y-hidden w-auto bg-[url(https://drive.google.com/uc?export=view&id=1OCFsHZyA9FKvkP0wgaEwsozoxmlY7Aih)] text-back text-end"> */}
            
            {!isCardVisible && ( 

                <div id="cardContent" className={`absolute top-0 card transition-opacity duration-500 bg-white z-20 overflow-hidden`}>


                  <div className="relative flex flex-col h-screen w-full pt-16">
                      <img className="h-76 w-3/5" src={picture_8} alt=""/>
                      <div className="flex justify-end pr-12">
                      <img className="h-full w-3/5" src={picture_9} alt=""/>
                      </div>
                      
                      

                  <div className="relative h-screen w-auto bg-white-200 z-30" id="factory-select z-20">
                  <div className="grid grid-flow-row-dense grid-cols-5 item-center lg:gap-0 pb-8 ml-10 pl-24 md:gap-2 ml-2">


                  <div className="h-56 w-auto overflow-hidden hover:opacity-75 transition">
                      <Link to='/thungSong'>
                          <div className='h-full w-52 bg-red-100/90 pt-16 rounded-full shadow-md'>
                            <h1 className='text-6xl font-extrabold text-center text-gray-800/80'>H1</h1>
                            <h2 className='text-2xl font-bold text-center text-green-800'>THUNGSONG</h2>
                          </div>
                      </Link>
                  </div> 
                  <div className="h-56 w-auto overflow-hidden hover:opacity-75 transition">
                      <Link to='/yala'>
                          <div className='h-full w-52 bg-red-100/90 pt-16 rounded-full shadow-md'>
                            <h1 className='text-6xl font-extrabold text-center text-gray-800/80'>H2</h1>
                            <h2 className='text-2xl font-bold text-center text-green-800'>YALA</h2>
                          </div>
                      </Link>
                  </div>
                  <div className="h-56 w-auto overflow-hidden hover:opacity-75 transition">
                      <Link to='/narathiwat'>
                          <div className='h-full w-52 bg-red-100/90 pt-16 rounded-full shadow-md'>
                            <h1 className='text-6xl font-extrabold text-center text-gray-800/80'>H6</h1>
                            <h2 className='text-2xl font-bold text-center text-green-800'>NARATHIWAT</h2>
                          </div>
                      </Link>
                  </div>
                      <div className="h-56 w-auto overflow-hidden hover:opacity-75 transition">
                      <Link to='/pattani'>
                          <div className='h-full w-52 bg-red-100/90 pt-16 rounded-full shadow-md'>
                            <h1 className='text-6xl font-extrabold text-center text-gray-800/80'>H7</h1>
                            <h2 className='text-2xl font-bold text-center text-green-800'>PATANI</h2>
                          </div>
                      </Link>
                      </div>
                  <div className="h-56 w-auto overflow-hidden hover:opacity-75 transition">
                      <Link to='/suratthani'>
                          <div className='h-full w-52 bg-red-100/90 pt-16 rounded-full shadow-md'>
                            <h1 className='text-6xl font-extrabold text-center text-gray-800/80'>H8</h1>
                            <h2 className='text-2xl font-bold text-center text-green-800'>SURATTHANI</h2>
                          </div>
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
    


       