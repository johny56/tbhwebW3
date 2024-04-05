import React from "react";
import Navbar from "components/navbar";

import img1 from "./asset/BG_Building.jpg";
import img2 from "./asset/Company ST..png";
import img3 from "./asset/Shareholder structure.png";
// import img4 from "E:/Web/assets/04-Company Structure/TBH.png";

export const image01 = img1;
export const image02 = img2;
export const image03 = img3;
// export const image04 = img4;

export default function CompanyStructure() {
  return (
    // <div className="relative">
      
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed z-20">
        <nav className="flex flex-row bg-transition fixed top-0 w-full z-20">
          <Navbar />
        </nav>
      <div className="bg-cover h-screen bg-no-repeat z-10">
        <img src={image01}/>

      <div className="absolute inset-0 flex flex-col justify-center pl-8">
        {/* <h1 className="flex flex-col  text-7xl font-extrabold ml-36 text-[#827717]"> */}
            <img
                src={image03}
                className="absolute -top-80 right-56 h-full w-auto scale-75"
                alt=""
                />
            <img
                src={image02}
                className="relative flex justify-center h-full w-3/5 scale-100 mt-56 ml-72 p-8"
                alt=""
                />
        {/* </h1> */}
        
      </div>
                  
        </div>
    //   </div>
      
  );
}

              
            

                  
            
