import React, {useState} from "react";
import Packing from "./packing";
import Product from "./product _roll/productRoll"

import img1 from './asset/RRIT-SPEC.png';
import img2 from './asset/INE-20-SPEC.png';
import imgBg from './asset/bg.png';

export const image01 = img1;
export const image02 = img2;
export const imageBackground = imgBg;

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
                              <h1 className="h-full w-auto text-8xl font-sans text-green-900 font-bold">PRODUCT</h1>
                          </div>
                          <div className="flex flex-col h-96 w-auto pt-4 pl-96">
                              <p className="indent-6 text-green-900 text-xl line-clamp-3 pl-28 ml-32">To Produce Standard Thai Rubber(STR) that
                              <br/>Consistently Satiefies or Exceeds Customer's 
                              <br/>Requirements Through Continuous Improvement</p>
                          </div>
                            <div className=""> 

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

                                            <div className="flex justify-center h-full w-auto scale-75">
                                              <img src={image01}/>
                                            </div>
                                          ))}
                                          {currentSpec > 0 &&INEspec.map(() => (

                                            <div className="flex justify-center h-full w-auto">
                                              <img src={image02}/>
                                            </div>
                                          ))}
                                        </div>
                                        
                                      </div>
                                      <p className="flex justify-end pr-28 text-2xl font-normal h-12 w-full z-30">NEED MORE INFORMATION? FEEL FREE TO CONTACT US</p>
                                    </div>
                                    


                                    <Packing/> 
                                </div>
                                </div>
                                            
                        </div>
                        </div>
                      

             </div>

          );

}
export default Productpage;
