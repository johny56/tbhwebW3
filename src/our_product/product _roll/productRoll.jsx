import { useState } from "react";
import React from "react";

// import img1 from "../asset/STR10_SHADOW.png";
// import img2 from "../asset/STR20_SHADOW.png";
// import img3 from "../asset/STR20CV_SHADOW.png";
// import img4 from "../asset/MIXTURES_SHADOW.png";

import gif1 from "./asset/GIF_01.gif";
import gif2 from "./asset/GIF_01_reverse.gif";
import gif3 from "./asset/Gif02.gif";
import gif4 from "./asset/Gif02_reverse.gif";
import gif5 from "./asset/Gif03.gif";
import gif6 from "./asset/Gif03-reverse.gif";
import gif7 from "./asset/Gif04.gif";
import gif8 from "./asset/Gif04-reverse.gif";
import gif9 from "./asset/Gif05.gif";
import gif10 from "./asset/Gif05-reverse.gif";

import pic01 from "./asset/pic001.png";

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
]

export const products = [
  {
    Name: "STR10_SHADOW",
    // ImageUrl: img5,
  },
  {
    Name: "STR20_SHADOW",
    // ImageUrl: img2,
  },
  {
    Name: "STR20CV_SHADOW",
    // ImageUrl: img3,
  },
  {
    Name: "MIXTURES_SHADOW",
    // ImageUrl: img4,
  },
];
export default function Product_Rolltest() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [preProduct, setCurrntpreProduct] = useState(0)
 
  

  const handleClickLeft = () => {
    if(currentProduct < -4){
      setCurrntpreProduct(currentProduct);
      setCurrentProduct(currentProduct+9);
    }else{
  
      setCurrentProduct(currentProduct-1);
      setCurrntpreProduct(currentProduct);
    }
   
    console.log(currentProduct);
  };
  const handleClickRight = () => {

    if(currentProduct > 4){
      setCurrntpreProduct(currentProduct);
      setCurrentProduct(currentProduct-9);
    }else{
  
      setCurrentProduct(currentProduct+1);
      setCurrntpreProduct(currentProduct);
    }

    console.log(currentProduct);
  };

  // negative spin 

  if(currentProduct==-5 && preProduct==-4){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">

              <div
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif4} alt=""/>

              </div>
              <div className="absolute top-40 left-28 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-20 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-28 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              


              <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-2 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 right-6 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>

              
          </div>
  
        
      
        
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-48 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-32 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>

            

          
  
    </div>
    );

    }
  if(currentProduct==-4&&preProduct==-3){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
              
              <div 
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif6} alt=""/>

              </div>
              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-2 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixtures</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 right-6 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
          </div>
  
      
        
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>
          
  
      </div>
  
    );
  }
  if(currentProduct==-3 && preProduct==-2){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
              
              <div 
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif8} alt=""/>

              </div>
              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
          </div>

          <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixtures</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>
              <div className="absolute top-96 mt-12 right-6 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
  
        
      
        
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>
          
  
      </div>
  
    );
  }
  if(currentProduct==-2 && preProduct==-1){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
              
              <div 
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif10} alt=""/>
  
              </div>
              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>

              <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>

              <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixtures</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
              </div>
          </div>
  
        
      
        
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>
          
  
      </div>
  
    );
  }
  if(currentProduct==-1 && preProduct==0){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
              
              <div 
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-20 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif2} alt=""/>
  
              </div>
              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>

              <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>

              <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixture</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>

          </div>
          
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>
          
  
      </div>
  
    );
  }
  if(currentProduct==0 && preProduct==1){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
              
              <div 
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif4} alt=""/>
  
              </div>
              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
          </div>

          <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
                <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                  </div>
                
                
              </div>
  
        
      
        
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>
          
  
      </div>
  
    );
  }
  if(currentProduct==1 && preProduct==2){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
              
              <div 
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif6} alt=""/>

              </div>
              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
          </div>

          <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixtures</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
                <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
              </div>
                
              </div>
  
        
      
        
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>
          
  
      </div>
  
    );
  }
  if(currentProduct==2 && preProduct==3){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
              
              <div 
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif8} alt=""/>

              </div>
              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>

              <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixtures</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>
              <div className="absolute top-96 mt-12 right-6 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              
          </div>
  
        
      
        
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>
          
  
      </div>
  
    );

    }
    if(currentProduct==3 && preProduct==4){
      return (
        <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
    
          <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">

                {/* {gifs[currentProduct+1].map((item,index) => ( */}
                <div
                // key={index} 
                className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                  
                    `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif10} alt=""/>
  
                </div>
                {/* ))} */}
                <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                
                <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
                
                <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>

                <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>

              <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixtures</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
                
            </div>
    
          
        
          
    
              <button
                onClick={handleClickLeft}
                className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {"<"}
              </button>
              <button
                onClick={handleClickRight}
                className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {">"}
              </button>
            
    
        </div>
    
      );
  
      }
    if(currentProduct==4 && preProduct==-5){
      return (
        <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
    
          <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">

                {/* {gifs[currentProduct+1].map((item,index) => ( */}
                <div
                // key={index} 
                className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                  
                    `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif2} alt=""/>
  
                </div>
                {/* ))} */}
                <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                
                <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
                
                <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>

                <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>

              <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixture</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
            </div>
    
          
        
          
    
              <button
                onClick={handleClickLeft}
                className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {"<"}
              </button>
              <button
                onClick={handleClickRight}
                className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {">"}
              </button>
            
    
        </div>
    
      );
  
      }
          
            
    // positive spin-------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if(currentProduct==-4 && preProduct==5){
      return (
        <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
    
          <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
                
                <div 
                className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                  
                    `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif3} alt=""/>
  
                </div>
                <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                
                <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
                
                <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>

                <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixtures</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
                <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
              </div>
              </div>
                
            </div>
    
          
        
          
    
              <button
                onClick={handleClickLeft}
                className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {"<"}
              </button>
              <button
                onClick={handleClickRight}
                className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {">"}
              </button>
            
    
        </div>
    
      );
    }
    if(currentProduct==-3 && preProduct==-4){
      return (
        <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
    
          <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
                
                <div 
                className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-20 z-20"
                  
                    `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif5} alt=""/>
  
                </div>
                <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                
                <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
                
                <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
            
                <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixtures</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>
              <div className="absolute top-96 mt-12 right-6 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>

            </div>
    
          
        
          
    
              <button
                onClick={handleClickLeft}
                className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {"<"}
              </button>
              <button
                onClick={handleClickRight}
                className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
              >
                {">"}
              </button>
            
    
        </div>
    
      );
    }
  if(currentProduct==-2 && preProduct==-3){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
              
              <div 
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-20 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif7} alt=""/>

              </div>
              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>

              <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>

              <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixture</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
          </div>
  
        
      
        
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>
          
  
      </div>
  
    );
  }
  if(currentProduct==-1 && preProduct==-2){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
              
              <div 
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-20 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif9} alt=""/>

              </div>
              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>

              <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>

              <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>
              
          </div>
  
        
      
        
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>
          
  
      </div>
  
    );
  }
  if(currentProduct==0 && preProduct==-1){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">

              {/* {gifs[currentProduct+1].map((item,index) => ( */}
              <div
              // key={index} 
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-20 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif1} alt=""/>

              </div>
              {/* ))} */}
              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>

              <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                              <div className="relative h-full w-56 text-center ml-56">
                              <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                              <p className="absolute top-10 h-56 w-64">
                                  Dirt (%wt,max) 0.08<br/>
                                  Ash (%wt,max) 0.60<br/>
                                  Nitrogen (%wt,max) 0.60<br/>
                                  Volatile Matter (%wt,max) 0.80<br/>
                                  Po (Initial Plasticity) 30<br/>
                                  PRI Index (min) 50<br/>
                                  Money (ML 1+4, 100C)-
                                  </p>
                              </div>
                            </div>
                            <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                              <div className="relative h-full w-56 text-center">
                              <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                              <p className="absolute top-10 h-56 w-64">
                                  Dirt (%wt,max) 0.16<br/>
                                  Ash (%wt,max) 0.80<br/>
                                  Nitrogen (%wt,max) 0.60<br/>
                                  Volatile Matter (%wt,max) 0.80<br/>
                                  Po (Initial Plasticity) -<br/>
                                  PRI Index (min) 40<br/>
                                  Money (ML 1+4, 100C)-
                                  </p>
                              </div>
                            </div>
                              <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                              <div className="relative h-full w-56 text-center">
                              <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                              <p className="absolute top-10 h-56 w-64">
                                  Dirt (%wt,max) 0.16<br/>
                                  Ash (%wt,max) 0.80<br/>
                                  Nitrogen (%wt,max) 0.60<br/>
                                  Volatile Matter (%wt,max) 0.80<br/>
                                  Po (Initial Plasticity) 30<br/>
                                  PRI Index (min) 40<br/>
                                  Money (ML 1+4, 100C)-
                                  </p>
                                </div>
                
                
              </div>
          </div>
  
        
      
        
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>
          
  
      </div>
  
    );

    }
  if(currentProduct==1 && preProduct==0){
    return (
      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
  
        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">

              {/* {gifs[currentProduct+1].map((item,index) => ( */}
              <div
              // key={index} 
              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-20 z-20"
                
                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif3} alt=""/>

              </div>
              {/* ))} */}
              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
              
              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-2 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixtures</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 right-6 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
          </div>
  
        
      
        
  
            <button
              onClick={handleClickLeft}
              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {"<"}
            </button>
            <button
              onClick={handleClickRight}
              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
            >
              {">"}
            </button>
          
  
      </div>
  
    );

    }
 

      
      if(currentProduct==2 && preProduct==1){
        return (
          <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
      
            <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
  
                  <div
                  className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-20 z-20"
                    
                      `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif5} alt=""/>
    
                  </div>
                  <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                  
                  <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
                  
                  <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                  <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixtures</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>
              <div className="absolute top-96 mt-12 right-6 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              </div>
      
            
          
            
      
                <button
                  onClick={handleClickLeft}
                  className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                >
                  {"<"}
                </button>
                <button
                  onClick={handleClickRight}
                  className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                >
                  {">"}
                </button>
              
      
          </div>
      
        );
    
        }
        
          if(currentProduct==3 && preProduct==2){
            return (
              <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
          
                <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
      
                      <div
                      className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-20 z-20"
                        
                          `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif7} alt=""/>
        
                      </div>
                      <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                      
                      <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
                      
                      <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                      <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>

              <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixture</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>
                  </div>
          
                
              
                
          
                    <button
                      onClick={handleClickLeft}
                      className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={handleClickRight}
                      className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                    >
                      {">"}
                    </button>
                  
          
              </div>
          
            );
        
            }
            
              if(currentProduct==4 && preProduct==3){
                return (
                  <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
              
                    <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
          
                          {/* {gifs[currentProduct-1].map((item,index) => ( */}
                          <div
                          // key={index} 
                          className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                            
                              `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif9} alt=""/>
            
                          </div>
                          {/* ))} */}
                          <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                          
                          <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
                          
                          <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                      </div>
                      <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) -<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>

              <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>
              
                    
                  
                    
              
                        <button
                          onClick={handleClickLeft}
                          className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                        >
                          {"<"}
                        </button>
                        <button
                          onClick={handleClickRight}
                          className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                        >
                          {">"}
                        </button>
                      
              
                  </div>
              
                );
               }
                  if(currentProduct==5 && preProduct==4){
                    return (
                      <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
                  
                        <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
              
                              {/* {gifs[currentProduct-1].map((item,index) => ( */}
                              <div
                              // key={index} 
                              className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                                
                                  `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={gif1} alt=""/>
                
                              </div>
                              {/* ))} */}
                              <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                              
                              <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
                              
                              <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                              
                              <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                              <div className="relative h-full w-56 text-center ml-56">
                              <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                              <p className="absolute top-10 h-56 w-64">
                                  Dirt (%wt,max) 0.08<br/>
                                  Ash (%wt,max) 0.60<br/>
                                  Nitrogen (%wt,max) 0.60<br/>
                                  Volatile Matter (%wt,max) 0.80<br/>
                                  Po (Initial Plasticity) 30<br/>
                                  PRI Index (min) 50<br/>
                                  Money (ML 1+4, 100C)-
                                  </p>
                              </div>
                            </div>
                            <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                              <div className="relative h-full w-56 text-center">
                              <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20CV</div>
                              <p className="absolute top-10 h-56 w-64">
                                  Dirt (%wt,max) 0.16<br/>
                                  Ash (%wt,max) 0.80<br/>
                                  Nitrogen (%wt,max) 0.60<br/>
                                  Volatile Matter (%wt,max) 0.80<br/>
                                  Po (Initial Plasticity) -<br/>
                                  PRI Index (min) 40<br/>
                                  Money (ML 1+4, 100C)-
                                  </p>
                              </div>
                            </div>
                              <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                              <div className="relative h-full w-56 text-center">
                              <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                              <p className="absolute top-10 h-56 w-64">
                                  Dirt (%wt,max) 0.16<br/>
                                  Ash (%wt,max) 0.80<br/>
                                  Nitrogen (%wt,max) 0.60<br/>
                                  Volatile Matter (%wt,max) 0.80<br/>
                                  Po (Initial Plasticity) 30<br/>
                                  PRI Index (min) 40<br/>
                                  Money (ML 1+4, 100C)-
                                  </p>
                                </div>
                
                
              </div>
                              
                              
                          </div>
                  
                        
                      
                        
                  
                            <button
                              onClick={handleClickLeft}
                              className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                            >
                              {"<"}
                            </button>
                            <button
                              onClick={handleClickRight}
                              className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                            >
                              {">"}
                            </button>
                          
                  
                      </div>
                  
                    );
                
                    }
                
    
        else{
          return (
            <div className="relative h-screen w-full bg-white overflow-x-hidden z-0">
        
              <div className="relative h-full w-full bg-red-100/50 z-20 overflow-hidden">
        
                  <div 
                  className={`relative flex justify-center item-center h-full w-2/3 ml-64 pl-14 z-20"
                    
                      `}><img className="absolute -top-32 h-full w-full scale-150 z-20" src={pic01} alt=""/>
        
                  </div>
                  <div className="absolute top-40 left-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
                  
                  <div className="absolute top-24 left-96 ml-72 scale-125 h-96 w-96 bg-yellow-700/20 rounded-full z-10"></div>
                  
                  <div className="absolute top-36 right-16 h-60 w-60 bg-yellow-700/20 rounded-full z-10"></div>
              </div>
        
            
                  <button
                  onClick={handleClickLeft}
                  className={`absolute top-96 mt-28 ml-24 left-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                >
                  {"<"}
                </button>
                <button
                  onClick={handleClickRight}
                  className={`absolute top-96 mt-28 mr-24 right-96 h-12 w-12 bg-gray-500 rounded-full shadow-md border-2 scale-125 text-3xl z-40`}
                >
                  {">"}
                </button>

                <div className="absolute top-96 mt-12 left-96 ml-32 flex justify-center item-center h-full w-1/4 pt-24 z-30">
                <div className="relative h-full w-56 text-center ml-56">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR20</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
              <div className="absolute top-96 mt-12 left-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">STR10</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.08<br/>
                    Ash (%wt,max) 0.60<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 50<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                
                </div>
              </div>

              <div className="absolute top-96 mt-12 right-0 flex justify-center item-center h-full w-1/4 z-30 scale-95">
                <div className="relative h-full w-56 text-center">
                <div className="absolute h-16 w-44 text-3xl font-bold text-green-800 ml-10">Mixture</div>
                <p className="absolute top-10 h-56 w-64">
                    Dirt (%wt,max) 0.16<br/>
                    Ash (%wt,max) 0.80<br/>
                    Nitrogen (%wt,max) 0.60<br/>
                    Volatile Matter (%wt,max) 0.80<br/>
                    Po (Initial Plasticity) 30<br/>
                    PRI Index (min) 40<br/>
                    Money (ML 1+4, 100C)-
                    </p>
                </div>
              </div>
                
        
            </div>
        
          );
        }
  
  
}