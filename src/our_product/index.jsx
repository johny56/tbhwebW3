import React, {useState} from "react";
import Packing from "./packing";
import Product from "./product _roll/productRoll"

import { Link } from "react-router-dom";

import img1 from './asset/RRIT-SPEC.png';
import img2 from './asset/INE-20-SPEC.png';
import imgBg from './asset/bg.png';
import img3 from "./asset/FT.png"
import img4 from "./asset/TC.png"

export const image01 = img1;
export const image02 = img2;
export const imageBackground = imgBg;

export const imgFT = img3;
export const imgTC = img4;

  const PRITspec = [
    [
      {
          name:'PRIT',
          imageUrl: {img1},
          
      },
      
    ],
    
  ];

  const INEspec = [
    [
      {
        name:'INE',
        imageUrl: {img2},
        
      },
    ],
  ];



  function Productpage(){
    
        const [currentSpec, setCurrentSpec] = useState(1);
        
        const [IshighlightSpec, setIshighlightSpec] = useState(1);

        const handleSpecChange = (spec) => {
          console.log(currentSpec);
          setCurrentSpec(spec);
          if(currentSpec > 1)setCurrentSpec(1);
          if(currentSpec < 0)setCurrentSpec(0);
          setIshighlightSpec(true);
        };

       
            return (

                <div className="relative h-screen bg-red-100/60">
                
                <div className="flex flex-col w-full h-full pt-24">
                  
                  <div className="bg-contain bg-no-repeat h-2/3 w-full">

                        <img className="h-96 w-full" src={imageBackground}/>

                      <div className="flex flex-col h-24">

                          <div className="flex flex-row pt-16 m-4 justify-center item-center">
                              <h1 className="h-full w-auto text-8xl font-sans font-bold text-stroke text-green-900">OUR</h1>
                              <h1 className="h-full w-auto text-8xl font-sans text-green-900 font-bold">PRODUCTS</h1>
                          </div>
                          <div className="flex flex-col h-96 w-auto pt-4 pl-96">
                              <p className="indent-6 text-green-900 text-xl line-clamp-3 pl-28 ml-56">To Produce Standard Thai Rubber(STR) that
                              <br/>Consistently Satiefies or Exceeds Customer's 
                              <br/>Requirements Through Continuous Improvement</p>
                          </div>
                            <div className="pl-4"> 

                                <Product/>
                            </div>
                        
                          
                            

                            <div className="h-screen w-full bg-white">

                                    <div className="relative h-screen w-full bg-red-100/50">

                                  <div className="flex flex-col">
                                    <div className="flex flex-row justify-center item-center">
                                      <div className="h-20 w-auto text-6xl font-bold text-stroke text-green-900">SPEC</div>
                                      <div className="h-20 w-auto text-6xl font-bold text-green-900 pl-4">Approved</div>
                                    </div>

                                      <div className="h-12 w-full flex justify-center">
                                        <div className="flex flex-row justify-center h-12 w-80 rounded-full bg-gray-400">
                                          <button onClick={() => handleSpecChange(currentSpec - 2)} className="btn btn-warning text-2xl text-white font-medium px-4 hover:bg-green-800 rounded-full">RRIT SPEC</button>
                                          <button onClick={() => handleSpecChange(currentSpec + 2)} className="btn btn-success text-2xl text-white font-medium px-4 ml-4 hover:bg-green-800 rounded-full">INE SPEC</button>
                                          </div>

                                        </div>
                                        <div className="relative h-2/3 w-2/3 mb-12 ml-72 z-30">
                                          {currentSpec <= 0 &&PRITspec.map(() => (

                                            <div className="relative flex justify-center h-full w-auto scale-75">
                                              <img className="absolute top-5" src={image01}/>
                                            </div>
                                          ))}
                                          {currentSpec > 0 &&INEspec.map(() => (

                                            <div className="flex justify-center h-full w-auto">
                                              <img className="py-36" src={image02}/>
                                            </div>
                                          ))}
                                        </div>
                                        
                                      </div>
                                    </div>
                                    
                                      <div className="relative h-screen w-full">
                                        
                                        <div className="h-full w-full flex flex-col">
                            
                                        <div className="flex flex-row justify-center item-center z-30 pt-8 bg-red-100/50">
                                            <div className="h-32 w-auto text-7xl font-bold text-stroke text-green-900">P</div>
                                            <div className="h-32 w-auto text-7xl font-bold text-green-900">acking</div>
                                        </div>

                                        <section id="packing">
                                          <Packing/>
                                        </section>

                                        <div className="relativeb h-screen w-full mt-96 pt-1 mb-4">
                      
                                            <div className="flex flex-col mt-96 pt-12 bg-red-100/50">

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

                                        <div className="bg-[#273F02] text-white pt-1 mt-1">
                                          <div className="w-full container mx-auto flex flex-col text-center">
                                              <div className="flex flex-row md:flex-row text-center text-lg md:text-left md:justify-between py-4 mx-8">
                                                  
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
                                </div>
                                            
                        </div>
                        </div>
                      

             </div>

          );

}
export default Productpage;
