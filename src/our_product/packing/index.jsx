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
        name:'Shrink wrap - DMP-A Power Concord',
        imageUrl:img6,
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
        name:'Metal box',
        imageUrl:img7,
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
        name:'Shrink wrap - plastic pallet',
        imageUrl:img8,
      },
    ],

    
    
    
  ]

export default function Packing(){

  const [currentPackage, setCurrentPackage] = useState(0);
  const [prePackage, setCurrentprePackage] = useState(0);
 
  

  const handleClickLeft = () => {
    if(currentPackage <= 0){
      setCurrentprePackage(currentPackage);
      setCurrentPackage(currentPackage+5);
    }else{
  
      setCurrentPackage(currentPackage-1);
      setCurrentprePackage(currentPackage);
    }
   
    console.log(currentPackage);
  };

  const handleClickRight = () => {

    if(currentPackage > 4){
      setCurrentprePackage(currentPackage);
      setCurrentPackage(currentPackage-5);
    }else{
  
      setCurrentPackage(currentPackage+1);
      setCurrentprePackage(currentPackage);
    }

    console.log(currentPackage);
  };

  if(currentPackage===3 && prePackage===4){
    return (
      <div className="absolute h-auto w-full overflow-x-hidden z-20">
  
        <div className="relative h-full w-full bg-red-100/50 overflow-hidden">


          <div className="relative flex justify-center item-center h-full w-full">
              <div className="relative h-full w-full pt-8">
              <img className="h-auto w-full" src={gif10} alt=""/>
              </div>
          </div>

              
          <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {"<"}
              </button>

              {Package[currentPackage - 0].map((item, index) => (
              <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                  <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
              </div>
              ))}
              
              <button
                onClick={handleClickRight}
                className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                >
                {">"}
              </button>

            </div>

      
      </div>

    );

    }
  if(currentPackage===4 && prePackage===5){
    return (
      <div className="absolute h-auto w-full overflow-x-hidden z-20">
  
        <div className="relative h-full w-full bg-red-100/50 overflow-hidden">


          <div className="relative flex justify-center item-center h-full w-full">
              <div className="relative h-full w-full pt-8">
              <img className="h-auto w-full" src={gif11} alt=""/>
              </div>
          </div>
              
          <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {"<"}
              </button>

              {Package[currentPackage - 0].map((item, index) => (
              <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                  <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
              </div>
              ))}
              
              <button
                onClick={handleClickRight}
                className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                >
                {">"}
              </button>

            </div>

      
      </div>

    );

  }
  if(currentPackage===5 && prePackage===0){
    return (
      <div className="absolute h-auto w-full overflow-x-hidden z-20">
  
        <div className="relative h-full w-full bg-red-100/50 overflow-hidden">


          <div className="relative flex justify-center item-center h-full w-full">
              <div className="relative h-full w-full pt-8">
              <img className="h-auto w-full" src={gif12} alt=""/>
              </div>
          </div>

          <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {"<"}
              </button>

              {Package[currentPackage - 0].map((item, index) => (
              <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                  <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
              </div>
              ))}
              
              <button
                onClick={handleClickRight}
                className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                >
                {">"}
              </button>

            </div>

      
      </div>

    );

    }
    if(currentPackage===0 && prePackage===1){
      return (
        <div className="absolute h-auto w-full overflow-x-hidden z-20">
    
          <div className="relative h-full w-full bg-red-100/50 overflow-hidden">

            <div className="relative flex justify-center item-center h-full w-full">
                <div className="relative h-full w-full pt-8">
                <img className="h-auto w-full" src={gif7} alt=""/>
                </div>
            </div>

                
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {"<"}
              </button>

              {Package[currentPackage - 0].map((item, index) => (
              <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                  <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
              </div>
              ))}
              
              <button
                onClick={handleClickRight}
                className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                >
                {">"}
              </button>
  
              </div>
  
        
        </div>
  
      );
  
      }
      if(currentPackage===1 && prePackage===2){
        return (
          <div className="absolute h-auto w-full overflow-x-hidden z-20">
      
            <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
    
    
              <div className="relative flex justify-center item-center h-full w-full">
                  <div className="relative h-full w-full pt-8">
                  <img className="h-auto w-full" src={gif8} alt=""/>
                  </div>
              </div>


              <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {"<"}
              </button>

              {Package[currentPackage - 0].map((item, index) => (
              <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                  <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
              </div>
              ))}
              
              <button
                onClick={handleClickRight}
                className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                >
                {">"}
              </button>
    
              </div>
                  
    
          
          </div>
    
        );
    
        }
        if(currentPackage===2 && prePackage===3){
          return (
            <div className="absolute h-auto w-full overflow-x-hidden z-20">
        
              <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
      
      
                <div className="relative flex justify-center item-center h-full w-full">
                    <div className="relative h-full w-full pt-8">
                    <img className="h-auto w-full" src={gif9} alt=""/>
                    </div>
                </div>
      
                <button
                onClick={handleClickLeft}
                className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                >
                  {"<"}
                </button>

                {Package[currentPackage - 0].map((item, index) => (
                <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                    <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
                </div>
                ))}
                
                <button
                  onClick={handleClickRight}
                  className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                  >
                  {">"}
                </button>
      
                  </div>
      
            
            </div>
      
          );
      
          }
    //-------------------------------------------------------------------------------------------------------------------------------reverse----------------------------------------------------------------------------------------------------------------------------        
            if(currentPackage===1 && prePackage===0){
              return (
                <div className="absolute h-auto w-full overflow-x-hidden z-20">
            
                  <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
          
          
                    <div className="relative flex justify-center item-center h-full w-full">
                        <div className="relative h-full w-full pt-8">
                        <img className="h-auto w-full" src={gif1} alt=""/>
                        </div>
                    </div>
          
                    <button
                    onClick={handleClickLeft}
                    className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                    >
                      {"<"}
                    </button>

                    {Package[currentPackage - 0].map((item, index) => (
                    <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                        <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
                    </div>
                    ))}
                    
                    <button
                      onClick={handleClickRight}
                      className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                      >
                      {">"}
                    </button>
                    
                    </div>
                
                </div>
          
              );
          
              }
              if(currentPackage===2 && prePackage===1){
                return (
                  <div className="absolute h-auto w-full overflow-x-hidden z-20">
              
                    <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
          
            
                      <div className="relative flex justify-center item-center h-full w-full">
                          <div className="relative h-full w-full pt-8">
                          <img className="h-auto w-full" src={gif2} alt=""/>
                          </div>
                      </div>
            
                      <button
                      onClick={handleClickLeft}
                      className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                      >
                        {"<"}
                      </button>

                      {Package[currentPackage - 0].map((item, index) => (
                      <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                          <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
                      </div>
                      ))}
                      
                      <button
                        onClick={handleClickRight}
                        className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                        >
                        {">"}
                      </button>
            
                        </div>
            
                  
                  </div>
            
                );
            
                }
                if(currentPackage===3 && prePackage===2){
                  return (
                    <div className="absolute h-auto w-full overflow-x-hidden z-20">
                
                      <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
              
              
                        <div className="relative flex justify-center item-center h-full w-full">
                            <div className="relative h-full w-full pt-8">
                            <img className="h-auto w-full" src={gif3} alt=""/>
                            </div>
                        </div>
              
                            
                        <button
                        onClick={handleClickLeft}
                        className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                        >
                          {"<"}
                        </button>

                        {Package[currentPackage - 0].map((item, index) => (
                        <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                            <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
                        </div>
                        ))}
                        
                        <button
                          onClick={handleClickRight}
                          className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                          >
                          {">"}
                        </button>
                          
                          </div>
                    
                    </div>
              
                  );
              
                  }
                  if(currentPackage===4 && prePackage===3){
                    return (
                      <div className="absolute h-auto w-full overflow-x-hidden z-20">
                  
                        <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
                
                
                
                          <div className="relative flex justify-center item-center h-full w-full">
                              <div className="relative h-full w-full pt-8">
                              <img className="h-auto w-full" src={gif4} alt=""/>
                              </div>
                          </div>
                
                              
                          <button
                          onClick={handleClickLeft}
                          className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                          >
                            {"<"}
                          </button>

                          {Package[currentPackage - 0].map((item, index) => (
                          <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                              <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
                          </div>
                          ))}
                          
                          <button
                            onClick={handleClickRight}
                            className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                            >
                            {">"}
                          </button>
                
                            </div>
                
                      
                      </div>
                
                    );
                
                    }
                    if(currentPackage===5 && prePackage===4){
                      return (
                        <div className="absolute h-auto w-full overflow-x-hidden z-20">
                    
                          <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
                  
                  
                  
                            <div className="relative flex justify-center item-center h-full w-full">
                                <div className="relative h-full w-full pt-8">
                                <img className="h-auto w-full" src={gif5} alt=""/>
                                </div>
                            </div>
                  
                                
                    
                            <button
                            onClick={handleClickLeft}
                            className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                            >
                              {"<"}
                            </button>

                            {Package[currentPackage - 0].map((item, index) => (
                            <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                                <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
                            </div>
                            ))}
                            
                            <button
                              onClick={handleClickRight}
                              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                              >
                              {">"}
                            </button>
                  
                        
                        </div>

                      </div>
                      
                  
                      );
                  
      
                    }
                    if(currentPackage===0 && prePackage===5){
                      return (
                        <div className="absolute h-auto w-full overflow-x-hidden z-20">
                    
                          <div className="relative h-full w-full bg-red-100/50 overflow-hidden">
                  
                  
                            <div className="relative flex justify-center item-center h-full w-full">
                                <div className="relative h-full w-full pt-8">
                                <img className="h-auto w-full" src={gif6} alt=""/>
                                </div>
                            </div>
                  
                            <button
                            onClick={handleClickLeft}
                            className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                            >
                              {"<"}
                            </button>

                            {Package[currentPackage - 0].map((item, index) => (
                            <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                                <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
                            </div>
                            ))}
                            
                            <button
                              onClick={handleClickRight}
                              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                              >
                              {">"}
                            </button>


                            </div>
                        
                        </div>
                  
                      );
                  
      
      }
      // if(currentPackage===0 && prePackage===6){
      //   return (
      //     <div className="absolute h-auto w-full overflow-x-hidden z-20">
      
      //       <div className="relative h-full w-full overflow-hidden z-20">
    
    
      //         <div className="relative flex justify-center item-center h-full w-full">
      //             <div className="relative h-full w-full pt-8">
      //             <img className="h-auto w-full" src={gif1} alt=""/>
      //             </div>
      //         </div>
    
      //         <button
      //         onClick={handleClickLeft}
      //         className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
      //         >
      //           {"<"}
      //         </button>

      //         {Package[currentPackage - 0].map((item, index) => (
      //         <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
      //             <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
      //         </div>
      //         ))}
              
      //         <button
      //           onClick={handleClickRight}
      //           className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
      //           >
      //           {">"}
      //         </button>
              


      //         </div>
          
      //     </div>
    
      //   );
      // }
      else{

      return (

        <div className="absolute h-auto w-full overflow-x-hidden z-20">
    
          <div className="relative h-full w-full overflow-hidden bg-red-100/50 z-20">
  

  
            <div className="relative flex justify-center item-center h-full w-full">
                <div className="relative h-full w-full pt-8">
                <img className="h-full w-full" src={img9} alt=""/>
                </div>
            </div>
  
            
                
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {"<"}
              </button>

              {Package[currentPackage - 0].map((item, index) => (
              <div key={index} className="relative h-16 w-1/3 -top-20 left-96 ml-28 text-center">
                  <div className="h-full w-full text-2xl font-bold text-green-800">{item.name}</div>
              </div>
              ))}
              
              <button
                onClick={handleClickRight}
                className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                >
                {">"}
              </button>
  
        
                  </div>
              
    
      </div>
      );

    }

}

