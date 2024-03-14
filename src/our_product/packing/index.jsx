import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import img1 from "../asset/FT.png"
import img2 from "../asset/TC.png"

import img3 from "./asset/package/Shrink wrap - Metal pallet RMP.png"
import img4 from "./asset/package/Shrink wrap - wooden pallet.png"
import img5 from "./asset/package/Shrink wrap TBH Metal pallet.png"
import img6 from "./asset/package/Shrink wrap - DMP-A Power Concord.png"
import img7 from "./asset/package/Metal box.png"
import img8 from "./asset/package/Shrink wrap - plastic pallet.png"

export const imgFT = img1;
export const imgTC = img2;



export const Package = [
    [
      {
        name:'Shrink wrap - pallet RMP',
        image:img3,
      }
    ],
    [
      {
        name:'Shrink wrap - wooden pallet',
        imageUrl:img4,
      },
    ],
    [
      {
        name:'Shrink wrap - TBH Metal pallet',
        imageUrl:img5,
      },
    ],
    [
      {
        name:'Shrink wrap - DMP-A Power Concord',
        imageUrl:img6,
      },
    ],
    [
      {
        name:'Metal box',
        imageUrl:img7,
      },
    ],
    [
      {
        name:'Shrink wrap - plastic pallet',
        imageUrl:img8,
      },
    ],
    [
      {
        name:'Shrink wrap - pallet RMP',
        imageUrl:img3,
      },
    ],
    [
      {
        name:'Shrink wrap - wooden pallet',
        imageUrl:img4,
      },
    ],
    [
      {
        name:'Shrink wrap - TBH Metal pallet',
        imageUrl:img5,
      },
    ],
    [
      {
        name:'Shrink wrap - DMP-A Power Concord',
        imageUrl:img6,
      },
    ],
    [
      {
        name:'Metal box',
        imageUrl:img7,
      },
    ],
    [
      {
        name:'Shrink wrap - plastic pallet',
        imageUrl:img8,
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


        <div className="relative h-screen w-full bg-red-100/50">
                                        
            <div className="h-full w-full flex flex-col">

            <div className="flex flex-row justify-center item-center pt-96">
                <div className="h-32 w-auto text-7xl font-bold text-stroke text-green-900">P</div>
                <div className="h-32 w-auto text-7xl font-bold text-green-900">acking</div>
            </div>

            <div className="absolute top-96 h-72 w-full bg-green-300/20 mt-12">

              <div className="flex flex-rows-5 justify-center item-center overflow-x-clip gap-x-24 mr-20">

                  <div className="relative flex justify-center item-center h-full w-1/6">
                      <div className="relative h-full w-56 pt-8">
                      <div className="absolute right-24 h-48 w-48 mt-8 ml-12 rounded-full bg-orange-100 shadow-md"></div>
                      {/* <img className="absolute buttom-32 right-24 h-56 bg-transparent w-64 pt-8" src={img3} alt=""/> */}
                      </div>
                  </div>

                  <div className="relative flex justify-center item-center h-full w-1/6">
                      <div className="relative h-full w-56 pt-8">
                      <div className="absolute right-24 h-48 w-48 mt-8 ml-12 rounded-full bg-orange-100 shadow-md"></div>
                      {/* <img className="absolute buttom-32 right-24 h-56 bg-transparent w-64 pt-8" src={img4} alt=""/> */}
                      </div>
                  </div>

                  <div className="relative flex justify-center item-center h-full w-1/6">
                      <div className="relative h-full w-56 pt-8">
                      <div className="absolute right-24 h-48 w-48 mt-8 ml-12 rounded-full bg-orange-100 shadow-md"></div>
                      {/* <img className="absolute buttom-32 right-24 h-56 bg-transparent w-64 pt-8" src={img5} alt=""/> */}
                      </div>
                  </div>

                  <div className="relative flex justify-center item-center h-full w-1/6">
                      <div className="relative h-full w-56 pt-8">
                      <div className="absolute right-24 h-48 w-48 mt-8 ml-12 rounded-full bg-orange-100 shadow-md"></div>
                      {/* <img className="absolute buttom-32 right-24 h-56 bg-transparent w-64 pt-8" src={img6} alt=""/> */}
                      </div>
                  </div>

                  <div className="relative flex justify-center item-center h-full w-1/6">
                      <div className="relative h-full w-56 pt-8">
                      <div className="absolute right-24 h-48 w-48 mt-8 ml-12 rounded-full bg-orange-100 shadow-md"></div>
                      {/* <img className="absolute buttom-32 right-24 h-56 bg-transparent w-64 pt-8" src={img7} alt=""/> */}
                      </div>
                  </div>

                  <div className="relative flex justify-center item-center h-full w-1/6">
                      <div className="relative h-full w-56 pt-8">
                      <div className="absolute right-24 h-48 w-48 mt-8 ml-12 rounded-full bg-orange-100 shadow-md"></div>
                      {/* <img className="absolute buttom-32 right-24 h-56 bg-transparent w-64 pt-8" src={img8} alt=""/> */}
                      </div>
                  </div>


              </div>
            </div>

            <div className="relative h-12 w-full mt-80">

                <div className="flex flex-rows-3 justify-center bg-red-100/50">
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

                <div className="relativeb h-screen w-full bg-red-100/50 pt-48">
                    
                    <div className="flex flex-col">

                        <div className="flex flex-row justify-center item-center">
                          <div className="h-32 w-auto text-7xl font-sans font-bold text-stroke text-green-900">Other</div>
                          <div className="h-32 w-auto text-7xl font-sans font-bold text-green-900 pl-4">business</div>
                        </div>

                        <div className="flex flex-row justify-center item-center gap-16">
                          <div className="h-72 w-72 bg-green-500 rounded-lg">
                            <img className="h-full w-full" src={imgFT} alt="" />
                          </div>
                          <div className="h-72 w-72 bg-green-500 rounded-lg">
                            <img className="h-full w-full" src={imgTC} alt="" />
                          </div>
                        </div>

                    </div>

                    <div className="bg-[#273F02] text-white mt-44">
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