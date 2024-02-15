import React from "react";
import Navbar from "components/navbar";

import picture_1 from "../management/asset/BG-MANAGEMENT.jpg";
import picture_2 from "./asset/Management (1).png";
import picture_3 from "./asset/team (1).png";

import picture_4 from "./asset/DILOK.svg";
import picture_5 from "./asset/KS.svg";
import picture_6 from "./asset/SY.svg";

import picture_7 from "./asset/SIRIWAT C.svg";
import picture_8 from "./asset/SETTHA K.svg";
import picture_9 from "./asset/MAYUREE S.svg";

import picture_10 from "./asset/YOTSAK I.svg";
import picture_11 from "./asset/THITIKORN V.svg";
import picture_12 from "./asset/NARONG R.svg";
import picture_13 from "./asset/SOMCHAI M.svg";

import picture_14 from "./asset/TAWEE P.svg";
import picture_15 from "./asset/JIRAPHAT S.svg";
import picture_16 from "./asset/PHAKPONG C.svg";
// import img from "./asset/Activity/Circle.png";
// export const image01 = img;


export const images = [
    picture_1,
    picture_2,
    picture_3,
    picture_4,
    picture_5,
    picture_6,
    picture_7,
    picture_8,
    picture_9,
    picture_10,
    picture_11,
    picture_12,
    picture_13,
    picture_14,
    picture_15,
    picture_16,
]

export default function ManagementTeam(){

    return (

        <div>
            <nav className="flex flex-row fixed top-0 w-full z-40 lg:pr-24">
                  <Navbar></Navbar>
            </nav>
        
            {/* <div className="bg-contain bg-no-repeat h-max w-auto bg-[url(https://drive.google.com/uc?export=view&id=1NPbCPEdJuJHq1nrKQFVCDmWlFOITrLTN)]  lg:pl-16"> */}

            <div className="relative bg-contain h-full w-auto">
                
                <img className="absolute h-full w-full" src={picture_1} alt=""/>

                <div className="pt-24 h-full w-auto md:w-auto sm:w-auto">
                <div className="absolute top-0 inset-x-0 flex flex-row justify-center pt-24 pl-28">

                        <img className="h-full w-80" src={picture_2} alt=""/>
                        <img className="h-16 w-auto pb-3 pl-2" src={picture_3} alt=""/>

                </div>
            
                <div className="pt-12 flex flex-row h-96 w-auto justify-center pb-24 lg:space-x-16 md:space-x-10">
                    <div className="pt-24">
                        <div className="lg:h-64 w-auto flex justify-center mx-4 px-2 md:h-56 w-auto">

                            <img className="z-10 h-full w-auto rounded-lg" src={picture_6} alt=""/>
                        </div>
                    </div>
                    <div className="lg:h-64 w-auto flex justify-center md:h-56 w-auto"> 

                            <img className="z-10 h-full w-auto rounded-lg " src={picture_5} alt=""/>
                    </div>
                    <div className="pt-24">
                        <div className="lg:h-64 w-auto flex justify-center mx-4 px-2 md:h-56 w-auto">

                            <img className="z-10 h-full w-auto rounded-lg" src={picture_4} alt=""/>
                            
                        </div>
                    </div>
                </div>
                
                <img className="absolute h-28 w-full" src={picture_1} alt=""/>

                <div className="flex flex-row h-full w-auto justify-center lg:space-x-16 md:space-x-10">
                    <div className="lg:h-64 w-auto flex justify-center mx-4 px-2 md:h-56 w-auto">

                        <img className="h-full w-auto rounded-lg z-10" src={picture_9} alt=""/>
        
                    </div>
                    
                    <div className="lg:h-64 w-auto flex justify-center mx-4 px-2 md:h-56 w-auto">

                        <img className="h-full w-auto rounded-lg z-10" src={picture_8} alt=""/>
        
                    </div>
                    
                    <div className="lg:h-64 w-auto flex justify-center mx-4 px-2 md:h-56 w-auto">

                        <img className="h-full w-auto rounded-lg z-10" src={picture_7} alt=""/>
        
                    </div>
                
                </div>


                <div className="flex flex-row h-full w-auto justify-center lg:space-x-16 mt-96 md:space-x-2">

                    <div className="lg:h-64 w-auto flex justify-center md:h-56 w-auto">

                         <img className="h-full w-auto rounded-lg z-10" src={picture_10} alt=""/>
        
                    </div>
                    
                    <div className="lg:h-64 w-auto flex justify-center md:h-56 w-auto">

                         <img className="h-full w-auto rounded-lg z-10" src={picture_11} alt=""/>
        
                    </div>

                    <div className="lg:h-64 w-auto flex justify-center md:h-56 w-auto">
                         <img className="h-full w-auto rounded-lg z-10" src={picture_12} alt=""/>
        
                    </div>
                    
                    <div className="lg:h-64 w-auto flex justify-center md:h-56 w-auto">

                         <img className="h-full w-auto rounded-lg z-10" src={picture_13} alt=""/>
        
                    </div>
                </div>
    
                <div className="flex flex-row h-full w-auto justify-center pb-8 lg:space-x-16 md:space-x-10">
                    <div className="lg:h-64 w-auto flex justify-center md:h-56 w-auto">

                         <img className="h-full w-auto rounded-lg z-10" src={picture_14} alt=""/>
        
                    </div>

                    <div className="lg:h-64 w-auto flex justify-center md:h-56 w-auto">
                        
                         <img className="h-full w-auto rounded-lg z-10" src={picture_15} alt=""/>
        
                    </div>

                    <div className="lg:h-64 w-auto flex justify-center md:h-56 w-auto">

                         <img className="h-full w-auto rounded-lg z-10" src={picture_16} alt=""/>

        
                    </div>

                </div>
            
            
                
            </div>
            <div className="p-4 h-10 w-auto">

            </div>
            
            
            </div>
        </div>


    );
}