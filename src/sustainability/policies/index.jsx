import React from "react";
import img from "../asset/Qualitypolicy.png";
import img2 from "../asset/WeChat Image_20230707151821.png";
export const image01 = img;
export const image02 = img2;


export default function Policy(){

    return (

        <div className="relative bg-cover h-screen">
            <img src={image01} className="h-full w-auto" alt=""/>
            <div className="absolute inset-y-4 w-full">
            <div className="flex flex-col h-full items-center justify-center">
             <div className="text-[#E6DCC6] space-y-8 scale-125 pt-32">
                 {/* <p className="text-4xl font-sans flex justify-center"> Quality Policy</p> */}
                 <p className="text-2xl font-sans font-dm-sans indent-4 text-center space-y-8">
                     " To Produce Standard Thai Rubber (STR) that Consistently<br></br>
                     Satisfies or Exceeds Customers’ Requirements Through<br></br>Continuous Improvement "
                     </p>
            
             </div>
             <div>
             <a className="flex flex-nowarp pt-12 items-center justify-center">
                <img src={image02} className="h-28 w-auto" />
            </a>
             </div>
            </div>
            </div>
        </div>
        

    );
};