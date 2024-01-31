import React, { useState } from "react";
import Card from "./productCard";
import {initalState} from "./data";

function Carousel() {

  const [cards, setCards] = useState(initalState);

  const handleLeftClick = (isLeft) => {
    const prevState = [...cards];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };

  return (
    <>
        <div className="h-screen flex flex-row-3 justify-center gap-24">
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleLeftClick()}
      >
        {"<"}
      </div>
      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <Card key={index} prop={card.text}/>
          ))}
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleRightClick()}
        >
        {">"}
      </div>
        </div>
    </>
  );
}

export default Carousel;

//     const [currentProduct, setCurrentProduct] = useState(4);

//     const [IsProductRoll_L, setIsProductRoll_L] = useState(false);
//     const [IsProductRoll_R, setIsProductRoll_R] = useState(false);


//     const [IsStick_R, setIsStick_R] = useState(false);
//     const [IsStick_L, setIsStick_L] = useState(false);

//     const handleCardChange = (product) => {

//         if(product >= 5)setIsStick_R(true);
//         if(product <= 3)setIsStick_L(true);
        
//         if(IsStick_R){
//             setIsProductRoll_L(1);
//             setIsProductRoll_R(0);
//         }else if(IsStick_L){
//             setIsProductRoll_R(1);
//             setIsProductRoll_L(0);
//         }else{
//             setIsProductRoll_L(currentProduct > product);
//             setIsProductRoll_R(currentProduct < product);
//         }
//         setCurrentProduct(product);
        
//         if(currentProduct >= 7){
//             setCurrentProduct(4);
//         }if(currentProduct <= 1){
//             setCurrentProduct(4);
//         }
//         console.log('oldcurrent:'+ currentProduct);
//         console.log('current:'+product);
//         console.log("--------------------------");
            
        


//         return(

//             <div id="card" className="relative h-screen bg-white">
    
//                 <div className="h-full w-full flex flex-col">
//                     <div className="flex flex-rows-4 gap-x-4 -ml-28">

//                     {productImage[currentProduct - 1].map((item, index) => (
//                         <div key={index} className="relative flex justify-center item-center h-full w-1/4">
//                         <div className="relative h-full w-56 pt-24 pl-32">
//                         <div className="absolute ml-4 h-44 w-44 rounded-full bg-orange-100 z-0"></div>
//                         <div className={"absolute h-72 w-72 bg-blue-600/70 z-20" +
//                                                                                         (IsProductRoll_R?'transform duration-700 ease-out translate-x-96 ml-44 object-fit delay-700 overflow-clip z-10':
//                                                                                                 (IsProductRoll_L?'transform -translate-x-96 -ml-48 duration-700 ease-out object-fit delay-700 z-20':'transform translate-x-0'))}>

//                         </div>
//                         {/* <img className="absolute h-auto w-auto bg-transparent" src={item.imageUrl} alt="" /> */}
//                         {/* <img className="absolute ml-32 h-auto w-auto bg-transparent transition translate-x-96 delay-700" src="https://drive.google.com/uc?export=view&id=1IoSB-WGi7DrqQp4VUWjYp8me0uhXdCSu" alt="" /> */}
//                         </div>
        
//                     </div>
//                     ))}

//                     {productImage[currentProduct + 0].map((item, index) => (
//                     <div key={index} className="relative flex justify-center item-center h-full w-1/4 z-10">
//                         <div className="relative h-full w-56 pt-24 mr-64 -ml-8">
//                         {/* <div className="absolute left-96 ml- h-44 w-44 rounded-full bg-orange-100 z-0"></div> */}
//                         <div className={"absolute left-96 h-72 w-72 bg-red-600/70 z-10" +
//                                                                                             (IsProductRoll_R?'transform duration-700 ease-out -translate-x-96 -ml-56 object-fit overflow-hidden delay-700 z-10':
//                                                                                                 (IsProductRoll_L?'transform duration-700 ease-out translate-x-96 ml-56 object-fit delay-700 overflow-hidden z-10':'transform translate-x-0'))}>

//                         </div>
//                         {/* <img className="absolute h-auto w-auto bg-transparent" src={item.imageUrl} alt="" />
//                         <img className="absolute ml-32 h-auto w-auto bg-transparent transition translate-x-full delay-700" src="https://drive.google.com/uc?export=view&id=1IoSB-WGi7DrqQp4VUWjYp8me0uhXdCSu" alt="" /> */}
//                         </div>
        
//                     </div>
//                     ))}
    
//                     {productImage[currentProduct + 1].map((item, index) => (
//                     <div key={index} className="relative flex justify-center item-center h-full w-1/4">
//                             <div className="relative h-full w-56 pt-24 -ml-96 mr-24">
//                             <div className="absolute ml-4 h-44 w-44 rounded-full bg-orange-100 z-0"></div>
//                             <div className={"absolute h-72 w-72 bg-green-600/70 z-10" + 
//                                                                                             (IsProductRoll_R?'transform duration-700 ease-out translate-x-96 ml-44 object-fit delay-700 overflow-hidden z-20':
//                                                                                                 (IsProductRoll_L?'transform -translate-x-96 -ml-48 duration-700 ease-out object-fit delay-700 z-20':'transform translate-x-0'))}>
//                             </div>
//                             {/* <img className="absolute h-auto w-auto bg-transparent" src={item.imageUrl} alt="" /> */}
//                             {/* <img className="absolute ml-40 h-auto w-auto bg-transparent transition translate-x-96 delay-700" src="https://drive.google.com/uc?export=view&id=1PfKAz9x_8GKbY0VyLYlXj8SCW-mmUrs-" alt="" /> */}
//                         </div>
                        
//                     </div>
//                     ))}
    
//                     {productImage[currentProduct + 2].map((item, index) => (
//                     <div key={index} className="relative flex justify-center item-center h-full w-1/4">
//                             <div className="relative h-full w-56 pt-24 mr-36">
//                             <div className="absolute ml-4 h-44 w-44 rounded-full bg-orange-100 z-0"></div>
//                             <div className={"absolute h-72 w-72 bg-yellow-600/70 z-20" + 
//                                                                                         (IsProductRoll_R?'transform duration-700 ease-out translate-x-96 ml-56 object-fit delay-700 overflow-hidden z-20':
//                                                                                             (IsProductRoll_L?'transform duration-700 ease-out -translate-x-96 -ml-56 object-fit delay-700 z-20 overflow-hidden':'transform translate-x-0'))}>
//                             </div>
//                             {/* <img className="absolute h-auto w-auto bg-transparent" src={item.imageUrl} alt="" /> */}
//                             {/* <img className="absolute ml-32 h-auto w-auto bg-transparent hover:translate-x-56 transition delay-700" src="https://drive.google.com/uc?export=view&id=1y_Mv63WCCTfhymINmR8uvQ0ptdS_Kjc4" alt="" /> */}

//                         </div>
                        
//                     </div>
//                     ))}
    
//                     </div>

    

                    
    
//                 <div className="h-full w-full mt-36 pl-24 pt-48">
//                     <div className="flex flex-col">
    
//                     <div className="flex flex-rows-3">
                    
//                         <div className="relative flex justify-center item-center h-full w-1/4 pt-24">
    
//                         {productImage[currentProduct - 1].map((item, index) => (
//                             <div key={index} className="relative h-full w-56 text-center ml-16">
//                             <div className="absolute inset-0 h-16 w-44 text-3xl font-bold text-green-800">{item.name}</div>
//                             <p className="absolute top-10 right-5 h-56 w-64">
//                                 Dirt (%wt,max) {item.dirt}<br/>
//                                 Ash (%wt,max) {item.ash}<br/>
//                                 Nitrogen (%wt,max) {item.nitrogen}<br/>
//                                 Volatile Matter (%wt,max) {item.volatile}<br/>
//                                 Po (Initial Plasticity) {item.Po}<br/>
//                                 PRI Index (min) {item.PRI}<br/>
//                                 Money (ML 1+4, 100C)-
//                             </p>
//                             </div>
//                         ))}
    
//                         </div>
                    
//                     <div className="relative flex justify-center item-center h-full w-3/4 pt-24">
                        
//                         <button
//                         onClick={() => handleCardChange(currentProduct + 1)}
//                         className={`absolute left-56 h-12 w-12 bg-gray-500 rounded-full
//                         }`}
//                         >
//                         <svg className="h-8 w-8 text-white ml-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                             <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" />
//                         </svg>
//                         </button>
                        
//                         <button
//                         onClick={() => handleCardChange(currentProduct - 1)}
//                         className={`absolute right-72 h-12 w-12 bg-gray-500 rounded-full`}
//                         >
//                         <svg className="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
//                         </svg>
//                         </button>
    
    
//                         {productImage[currentProduct - 0].map((item, index) => (
//                         <div key={index} className="relative h-full w-56 text-center">
//                         <div className="absolute h-16 w-44 text-4xl font-bold text-green-800">{item.name}</div>
//                         <p className="absolute top-10 right-5 h-64 w-64 pt-4 text-lg">
//                             Dirt (%wt,max) {item.dirt}<br/>
//                             Ash (%wt,max) {item.ash}<br/>
//                             Nitrogen (%wt,max) {item.nitrogen}<br/>
//                             Volatile Matter (%wt,max) {item.volatile}<br/>
//                             Po (Initial Plasticity) {item.Po}<br/>
//                             PRI Index (min) {item.PRI}<br/>
//                             Money (ML 1+4, 100C)-
//                             </p>
//                         </div>
//                         ))}
    
//                     </div>
    
//                     <div className="relative flex justify-center item-center h-full w-1/4 pt-24">
    
//                     {productImage[currentProduct + 1].map((item, index) => (
//                         <div key={index} className="relative h-full w-56 text-center mr-32">
//                         <div className="absolute inset-0 h-16 w-44 text-3xl font-bold text-green-800">{item.name}</div>
//                         <p className="absolute top-10 right-5 h-56 w-64">
//                             Dirt (%wt,max) 0.16<br/>
//                             Ash (%wt,max) 0.80<br/>
//                             Nitrogen (%wt,max) 0.60<br/>
//                             Volatile Matter (%wt,max) 0.80<br/>
//                             Po (Initial Plasticity) 30<br/>
//                             PRI Index (min) 40<br/>
//                             Money (ML 1+4, 100C)-
//                             </p>
//                         </div>
//                     ))}
    
//                     </div>
    
//                     </div>
    
//                 </div>
//                 </div>
//                 </div>
//                 </div>
    
    
//         );
//  }
