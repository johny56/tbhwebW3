import { useState } from "react";
import React from "react";

import img3 from "./asset/package/Shrink wrap - Metal pallet RMP.png"
import img4 from "./asset/package/Shrink wrap - wooden pallet.png"
import img5 from "./asset/package/Shrink wrap TBH Metal pallet.png"
import img6 from "./asset/package/Shrink wrap - DMP-A Power Concord.png"
import img7 from "./asset/package/Metal box.png"
import img8 from "./asset/package/Shrink wrap - plastic pallet.png"

import img9 from "./asset/package/GIFpacking.png"

import gif1 from "./asset/package/GIF/gif01.gif";
import gif2 from "./asset/package/GIF/gif02.gif";
import gif3 from "./asset/package/GIF/gif03.gif";
import gif4 from "./asset/package/GIF/gif04.gif";
import gif5 from "./asset/package/GIF/gif05.gif";
import gif6 from "./asset/package/GIF/gif06.gif";

import gif7 from "./asset/package/GIFreverse/gif01reverse.gif";
import gif8 from "./asset/package/GIFreverse/gif02reverse.gif";
import gif9 from "./asset/package/GIFreverse/gif03reverse.gif";
import gif10 from "./asset/package/GIFreverse/gif04reverse.gif";
import gif11 from "./asset/package/GIFreverse/gif05reverse.gif";
import gif12 from "./asset/package/GIFreverse/gif06reverse.gif";



export const gifs = [
  {
    gif:gif1
  },
  {
    gif:gif2
  },
  {
    gif:gif3
  },
  {
    gif:gif4
  },
  {
    gif:gif5
  },
  {
    gif:gif6
  },
  {
    gif:gif7
  },
  {
    gif:gif8
  },
  {
    gif:gif9
  },
  {
    gif:gif10
  },
  {
    gif:gif11
  },
  {
    gif:gif12
  },
]



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

  const [currentPackage, setCurrentPackage] = useState(0);
  const [prePackage, setCurrentprePackage] = useState(0)
 
  

  const handleClickLeft = () => {
    if(currentPackage < -3){
      setCurrentprePackage(currentPackage);
      setCurrentPackage(currentPackage+7);
    }else{
  
      setCurrentPackage(currentPackage-1);
      setCurrentprePackage(currentPackage);
    }
   
    console.log(currentPackage);
  };
  const handleClickRight = () => {

    if(currentPackage > 3){
      setCurrentprePackage(currentPackage);
      setCurrentPackage(currentPackage-6);
    }else{
  
      setCurrentPackage(currentPackage+1);
      setCurrentprePackage(currentPackage);
    }

    console.log(currentPackage);
  };

  if(currentPackage===2 && prePackage===-2){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-40">
  
        <div className="relative h-full w-full bg-red-100/50 overflow-hidden">

          <div className="absolute top-0 h-auto w-full">


          <div className="relative flex justify-center item-center h-full w-full">
              <div className="relative h-full w-full pt-8">
              <img className="h-auto w-full" src={gif6} alt=""/>
              </div>
          </div>

          </div>
              
          </div>
  
        
  
          <div className="flex flex-rows-3 justify-center mt-0.5n">
                <button
                onClick={() => handleClickLeft}
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
                onClick={() => handleClickRight}
                className={`h-12 w-12 bg-gray-500 rounded-full`}
                >
                <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                </button>

            </div>

      
      </div>

    );

    }
  if(currentPackage===-2 && prePackage===-1){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-40">
  
        <div className="relative h-full w-full bg-red-100/50 overflow-hidden">

          <div className="absolute top-0 h-auto w-full">


          <div className="relative flex justify-center item-center h-full w-full">
              <div className="relative h-full w-full pt-8">
              <img className="h-auto w-full" src={gif5} alt=""/>
              </div>
          </div>

          </div>
              
          </div>
  
        
  
          <div className="flex flex-rows-3 justify-center mt-0.5n">
                <button
                onClick={() => handleClickLeft}
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
                onClick={() => handleClickRight}
                className={`h-12 w-12 bg-gray-500 rounded-full`}
                >
                <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                </button>

            </div>

      
      </div>

    );

  }
  if(currentPackage===-1 && prePackage===0){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden  z-40">
  
        <div className="relative h-full w-full bg-red-100/50 overflow-hidden">

          <div className="absolute top-0 h-auto w-full">


          <div className="relative flex justify-center item-center h-full w-full">
              <div className="relative h-full w-full pt-8">
              <img className="h-auto w-full" src={gif4} alt=""/>
              </div>
          </div>

          </div>
              
          </div>
  
        
  
          <div className="flex flex-rows-3 justify-center mt-0.5n">
                <button
                onClick={() => handleClickLeft}
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
                onClick={() => handleClickRight}
                className={`h-12 w-12 bg-gray-500 rounded-full`}
                >
                <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                </button>

            </div>

      
      </div>

    );

    }
    if(currentPackage===0 && prePackage===1){
      return (
        <div className="relative h-screen w-full bg-white overflow-x-hidden z-40">
    
          <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
  
            <div className="absolute top-0 h-auto w-full">
  
  
            <div className="relative flex justify-center item-center h-full w-full">
                <div className="relative h-full w-full pt-8">
                <img className="h-auto w-full" src={gif3} alt=""/>
                </div>
            </div>
  
            </div>
                
            </div>
    
          
    
            <div className="flex flex-rows-3 justify-center mt-0.5n">
                  <button
                  onClick={() => handleClickLeft}
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
                  onClick={() => handleClickRight}
                  className={`h-12 w-12 bg-gray-500 rounded-full`}
                  >
                  <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  </button>
  
              </div>
  
        
        </div>
  
      );
  
      }
      if(currentPackage===1 && prePackage===2){
        return (
          <div className="relative h-screen w-full bg-white overflow-x-hidden z-40">
      
            <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
    
              <div className="absolute top-0 h-auto w-full">
    
    
              <div className="relative flex justify-center item-center h-full w-full">
                  <div className="relative h-full w-full pt-8">
                  <img className="h-auto w-full" src={gif2} alt=""/>
                  </div>
              </div>
    
              </div>
                  
              </div>
      
            
      
              <div className="flex flex-rows-3 justify-center mt-0.5n">
                    <button
                    onClick={() => handleClickLeft}
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
                    onClick={() => handleClickRight}
                    className={`h-12 w-12 bg-gray-500 rounded-full`}
                    >
                    <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                    </button>
    
                </div>
    
          
          </div>
    
        );
    
        }
        if(currentPackage===2 && prePackage===-2){
          return (
            <div className="relative h-screen w-full bg-white overflow-x-hidden z-40">
        
              <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
      
                <div className="absolute top-0 h-auto w-full">
      
      
                <div className="relative flex justify-center item-center h-full w-full">
                    <div className="relative h-full w-full pt-8">
                    <img className="h-auto w-full" src={gif1} alt=""/>
                    </div>
                </div>
      
                </div>
                    
                </div>
        
              
        
                <div className="flex flex-rows-3 justify-center mt-0.5n">
                      <button
                      onClick={() => handleClickLeft}
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
                      onClick={() => handleClickRight}
                      className={`h-12 w-12 bg-gray-500 rounded-full`}
                      >
                      <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                      </button>
      
                  </div>
      
            
            </div>
      
          );
      
          }
    //-------------------------------------------------------------------------------------------------------------------------------reverse----------------------------------------------------------------------------------------------------------------------------        
            if(currentPackage===1 && prePackage===0){
              return (
                <div className="relative h-screen w-full bg-white overflow-x-hidden z-40">
            
                  <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
          
                    <div className="absolute top-0 h-auto w-full">
          
          
                    <div className="relative flex justify-center item-center h-full w-full">
                        <div className="relative h-full w-full pt-8">
                        <img className="h-auto w-full" src={gif7} alt=""/>
                        </div>
                    </div>
          
                    </div>
                        
                    </div>
            
                  
            
                    <div className="flex flex-rows-3 justify-center mt-0.5n">
                          <button
                          onClick={() => handleClickLeft}
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
                          onClick={() => handleClickRight}
                          className={`h-12 w-12 bg-gray-500 rounded-full`}
                          >
                          <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                          </svg>
                          </button>
          
                      </div>
          
                
                </div>
          
              );
          
              }
              if(currentPackage===2 && prePackage===1){
                return (
                  <div className="relative h-screen w-full bg-white overflow-x-hidden z-40">
              
                    <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
            
                      <div className="absolute top-0 h-auto w-full">
            
            
                      <div className="relative flex justify-center item-center h-full w-full">
                          <div className="relative h-full w-full pt-8">
                          <img className="h-auto w-full" src={gif8} alt=""/>
                          </div>
                      </div>
            
                      </div>
                          
                      </div>
              
                    
              
                      <div className="flex flex-rows-3 justify-center mt-0.5n">
                            <button
                            onClick={() => handleClickLeft}
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
                            onClick={() => handleClickRight}
                            className={`h-12 w-12 bg-gray-500 rounded-full`}
                            >
                            <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                            </button>
            
                        </div>
            
                  
                  </div>
            
                );
            
                }
                if(currentPackage===3 && prePackage===2){
                  return (
                    <div className="relative h-screen w-full bg-white overflow-x-hidden z-40">
                
                      <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
              
                        <div className="absolute top-0 h-auto w-full">
              
              
                        <div className="relative flex justify-center item-center h-full w-full">
                            <div className="relative h-full w-full pt-8">
                            <img className="h-auto w-full" src={gif9} alt=""/>
                            </div>
                        </div>
              
                        </div>
                            
                        </div>
                
                      
                
                        <div className="flex flex-rows-3 justify-center mt-0.5n">
                              <button
                              onClick={() => handleClickLeft}
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
                              onClick={() => handleClickRight}
                              className={`h-12 w-12 bg-gray-500 rounded-full`}
                              >
                              <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                              </svg>
                              </button>
              
                          </div>
              
                    
                    </div>
              
                  );
              
                  }
                  if(currentPackage===-2 && prePackage===3){
                    return (
                      <div className="relative h-screen w-full bg-white overflow-x-hidden z-40">
                  
                        <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
                
                          <div className="absolute top-0 h-auto w-full">
                
                
                          <div className="relative flex justify-center item-center h-full w-full">
                              <div className="relative h-full w-full pt-8">
                              <img className="h-auto w-full" src={gif10} alt=""/>
                              </div>
                          </div>
                
                          </div>
                              
                          </div>
                  
                        
                  
                          <div className="flex flex-rows-3 justify-center mt-0.5n">
                                <button
                                onClick={() => handleClickLeft}
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
                                onClick={() => handleClickRight}
                                className={`h-12 w-12 bg-gray-500 rounded-full`}
                                >
                                <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                                </button>
                
                            </div>
                
                      
                      </div>
                
                    );
                
                    }
                    if(currentPackage===-1 && prePackage===-2){
                      return (
                        <div className="relative h-screen w-full bg-white overflow-x-hidden z-40">
                    
                          <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
                  
                            <div className="absolute top-0 h-auto w-full">
                  
                  
                            <div className="relative flex justify-center item-center h-full w-full">
                                <div className="relative h-full w-full pt-8">
                                <img className="h-auto w-full" src={gif11} alt=""/>
                                </div>
                            </div>
                  
                            </div>
                                
                            </div>
                    
                          
                    
                            <div className="flex flex-rows-3 justify-center mt-0.5n">
                                  <button
                                  onClick={() => handleClickLeft}
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
                                  onClick={() => handleClickRight}
                                  className={`h-12 w-12 bg-gray-500 rounded-full`}
                                  >
                                  <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                  </svg>
                                  </button>
                  
                              </div>
                  
                        
                        </div>
                  
                      );
                  
      
                    }
                    if(currentPackage===0 && prePackage===-1){
                      return (
                        <div className="relative h-screen w-full bg-white overflow-x-hidden z-40">
                    
                          <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
                  
                            <div className="absolute top-0 h-auto w-full">
                  
                  
                            <div className="relative flex justify-center item-center h-full w-full">
                                <div className="relative h-full w-full pt-8">
                                <img className="h-auto w-full" src={gif12} alt=""/>
                                </div>
                            </div>
                  
                            </div>
                                
                            </div>
                    
                          
                    
                            <div className="flex flex-rows-3 justify-center mt-0.5n">
                                  <button
                                  onClick={() => handleClickLeft}
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
                                  onClick={() => handleClickRight}
                                  className={`h-12 w-12 bg-gray-500 rounded-full`}
                                  >
                                  <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                  </svg>
                                  </button>
                  
                              </div>
                  
                        
                        </div>
                  
                      );
                  
      
                    }else{

      return (
        <div className="absolute h-auto w-full overflow-x-hidden z-40">
    
          <div className="relative h-full w-full overflow-hidden">
  
            {/* <div className="absolute end-0 h-auto w-full"> */}
  
  
            <div className="relative flex justify-center item-center h-full w-full">
                <div className="relative h-full w-full pt-8">
                <img className="h-full w-full" src={img9} alt=""/>
                </div>
            </div>
  
            </div>
                
            {/* </div> */}
    
            <div className="relative flex flex-rows-3 justify-center mt-0.5n">
                  <button
                  onClick={() => handleClickLeft}
                  className={`absolute top-0 left-96 h-12 w-12 bg-gray-500 rounded-full
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
                  onClick={() => handleClickRight}
                  className={`absolute top-0 right-96 h-12 w-12 bg-gray-500 rounded-full`}
                  >
                  <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  </button>
  
              </div>
  
              
    
      </div>
      );

    }

};