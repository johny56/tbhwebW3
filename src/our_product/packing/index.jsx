import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";


const Package = [
    [
      {
        name:'Shrink wrap - pallet RMP',
        imageUrl:'https://drive.google.com/uc?export=view&id=1-LqXai5puVUzPihWFcBA7Tp5gcQq-21J',
      },
    ],
    [
      {
        name:'Shrink wrap - wooden pallet',
        imageUrl:'https://drive.google.com/uc?export=view&id=1fSIZVZvMj1EnOGI3-aDqDSrCY7EvbiPC',
      },
    ],
    [
      {
        name:'Shrink wrap - TBH Metal pallet',
        imageUrl:'https://drive.google.com/uc?export=view&id=18raH7socPMFD_SFEOCpoPApyuVXwosUu',
      },
    ],
    [
      {
        name:'Shrink wrap - DMP-A Power Concord',
        imageUrl:'https://drive.google.com/uc?export=view&id=1L8e7RvEcoMPpBqY4R1A7g3a5_xng9UA1',
      },
    ],
    [
      {
        name:'Metal nox',
        imageUrl:'https://drive.google.com/uc?export=view&id=1pTa5hIhTl9NbbMwIloTcQ2x_NhQVxY9w',
      },
    ],
    [
      {
        name:'Shrink wrap - pallet RMP',
        imageUrl:'https://drive.google.com/uc?export=view&id=1-LqXai5puVUzPihWFcBA7Tp5gcQq-21J',
      },
    ],
    [
      {
        name:'Shrink wrap - wooden pallet',
        imageUrl:'https://drive.google.com/uc?export=view&id=1fSIZVZvMj1EnOGI3-aDqDSrCY7EvbiPC',
      },
    ],
    [
      {
        name:'Shrink wrap - TBH Metal pallet',
        imageUrl:'https://drive.google.com/uc?export=view&id=18raH7socPMFD_SFEOCpoPApyuVXwosUu',
      },
    ],
    [
      {
        name:'Shrink wrap - DMP-A Power Concord',
        imageUrl:'https://drive.google.com/uc?export=view&id=1L8e7RvEcoMPpBqY4R1A7g3a5_xng9UA1',
      },
    ],
    [
      {
        name:'Metal nox',
        imageUrl:'https://drive.google.com/uc?export=view&id=1pTa5hIhTl9NbbMwIloTcQ2x_NhQVxY9w',
      },
    ],
    
  ]

export default function Packing(){

    
    const [currentPackage, setCurrentPackage] = useState(2);

    const handlePackageChange = (pack) => {
        console.log(currentPackage);
        setCurrentPackage(pack);
        if(currentPackage >= 6 )setCurrentPackage(pack - 5);
        if(currentPackage <= 1)setCurrentPackage(pack + 5);
      };

    return(


        <div className="relativeb h-screen w-full bg-white">
                                        
            <div className="h-full w-full flex flex-col">

            <div className="flex flex-row justify-center item-center pt-28">
                <div className="h-32 w-auto text-7xl font-bold text-stroke text-green-900">P</div>
                <div className="h-32 w-auto text-7xl font-bold text-green-900">acking</div>
            </div>

            <div className="flex flex-rows-5 justify-center item-center overflow-x-clip">


                {Package[currentPackage - 1].map((item, index) => (
                <div key={index} className="relative flex justify-center item-center h-full w-1/6">
                    <div className="relative h-full w-56 pt-8">
                    <div className="absolute right-24 h-48 w-48 mt-8 ml-12 rounded-full bg-orange-100 shadow-md"></div>
                    <img className="absolute buttom-32 right-36 h-56 w-64 bg-transparent pt-8" src={item.imageUrl} alt="" />
                    </div>
                </div>
                ))}

                {Package[currentPackage - 0].map((item, index) => (
                <div key={index} className="relative flex justify-center item-center h-full w-1/6">
                    <div className="relative h-full w-56 pt-8">
                    <div className="absolute h-48 w-48 mt-8 ml-12 rounded-full bg-orange-100 shadow-md"></div>
                    <img className="absolute buttom-32 left-4 h-56 w-64 bg-transparent pt-8" src={item.imageUrl} alt="" />
                    </div>
                </div>
                ))}

                {Package[currentPackage + 1].map((item, index) => (
                  <div key={index} className="relative flex justify-center item-center h-full w-2/6">
                    <div className="relative h-full w-64 pt-8">
                    <div className="absolute h-48 w-48 mt-8 ml-12 rounded-full bg-orange-100 shadow-md"></div>
                    <img className="absolute buttom-20 left-4 h-64 w-72 bg-transparent pt-8" src={item.imageUrl} alt="" />
                    </div>
                </div>
                ))}


                {Package[currentPackage + 2].map((item, index) => (
                  <div key={index} className="relative flex justify-center item-center h-full w-1/6">
                    <div className="relative h-full w-56 pt-8">
                    <div className="absolute h-48 w-48 mt-8 ml-12 rounded-full bg-orange-100 shadow-md"></div>
                    <img className="absolute buttom-32 left-6 h-56 w-64 bg-transparent pt-8" src={item.imageUrl} alt="" />
                    </div>
                </div>
                ))}

                {Package[currentPackage + 3].map((item, index) => (
                <div key={index} className="relative flex justify-center item-center h-full w-1/6">
                    <div className="relative h-full w-56 pt-8">
                    <div className="absolute left-24 h-48 w-48 mt-8 ml-12 rounded-full bg-orange-100 shadow-md"></div>
                    <img className="absolute buttom-32 left-36 h-56 w-64 bg-transparent pt-8" src={item.imageUrl} alt="" />
                    </div>
                </div>
                ))}
                

            </div>

            <div className="relative h-12 w-full mt-80 pt-16">

                <div className="flex flex-rows-3 justify-center">
                <button
                onClick={() => handlePackageChange(currentPackage + 1)}
                className={`h-12 w-12 bg-gray-500 rounded-full
                }`}
                >
                <svg class="h-8 w-8 text-white ml-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" />
                </svg>
                </button>

                {Package[currentPackage - 0].map((item, index) => (
                <div key={index} className="relative h-16 w-2/3 text-center">
                    <div className="right-50 h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
                </div>
                ))}
                
                <button
                onClick={() => handlePackageChange(currentPackage - 1)}
                className={`h-12 w-12 bg-gray-500 rounded-full`}
                >
                <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                </button>
                </div>

                <div className="relativeb h-screen w-full bg-white pt-48">
                    
                    <div className="flex flex-col">

                        <div className="flex flex-row justify-center item-center">
                          <div className="h-32 w-auto text-7xl font-sans font-bold text-stroke text-green-900">Other</div>
                          <div className="h-32 w-auto text-7xl font-sans font-bold text-green-900 pl-4">business</div>
                        </div>

                        <div className="flex flex-row justify-center item-center gap-16">
                          <div className="h-72 w-72 bg-green-500 rounded-lg">
                            <img className="h-full w-full" src="https://drive.google.com/uc?export=view&id=1-0y3U1wZANYwX9jzMHTj5gsA_GK7ChHO" alt="" />
                          </div>
                          <div className="h-72 w-72 bg-green-500 rounded-lg">
                            <img className="h-full w-full" src="https://drive.google.com/uc?export=view&id=1VaaoCrTffbLrUAmM7F6aqDT2MwKrCxn5" alt="" />
                          </div>
                        </div>

                    </div>

                    <div className="bg-[#273F02] text-white mt-56">
                    <div className="w-full container mx-auto flex flex-col text-center">
                        <div className="flex flex-row md:flex-row text-center text-lg md:text-left md:justify-between py-6 mx-8">
                            
                            <Link className="font-sans font-tt-hoves text-white dark:text-white hover:underline" to="/Whistleblowing">WHISTLEBLOWIMG</Link>
                            <a href="#" className="font-sans font-tt-hoves ">SUGGESTION/CUSTOMER COMPLAINTS</a>
                            <Link to="/policy_page" className="font-sans font-tt-hoves ">PRIVACY POLICY | COOKIE POLICY</Link>
                            <Link className="font-sans font-tt-hoves text-white dark:text-white hover:underline" to="/tbhstaff">TBH STAFF</Link>
                            
                        </div>
                    </div>
                    </div>

                </div>

            </div>

        </div>
        </div>



    );



};