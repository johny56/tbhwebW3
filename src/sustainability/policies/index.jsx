import React from "react";
import img from "E:/Web/assets/01_Homepage/Qualitypolicy.png";
export const image01 = img;


export default function Policy(){

    return (

        <div className="bg-cover bg-center h-screen relative">
            <img src={image01} className="h-full w-full" alt=""/>
            <div className="absolute inset-y-4 w-full">
            <div className="flex flex-col h-full items-center justify-center">
             <div className="text-[#E6DCC6] space-y-8">
                 {/* <p className="text-4xl font-sans flex justify-center"> Quality Policy</p> */}
                 <p className="text-2xl font-sans font-dm-sans indent-4 text-center space-y-8">
                     " To Produce Standard Thai Rubber (STR) that Consistently<br></br>
                     Satisfies or Exceeds Customers’ Requirements Through<br></br>Continuous Improvement "
                     </p>
            
             </div>
             <div>
             <a href="#" className="flex flex-nowarp mt-5 items-center justify-center">
                <img src="https://drive.google.com/uc?export=view&id=19G1fi2gEjUFi-D7qAsgk41EQQ6_-4gGr" className="h-20 w-20" />
            </a>
             </div>
            </div>
            </div>
        </div>
        

    );
};
// https://drive.google.com/uc?export=view&id=170zOJoMDg0Pf0_6ifEHpGxO1bFb9L3KW
//https://drive.google.com/uc?export=view&id=19G1fi2gEjUFi-D7qAsgk41EQQ6_-4gGr