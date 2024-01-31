import React from "react";
import Navbar from "components/navbar";

import img1 from "E:/Web/assets/04-Company Structure/BG_Building.jpg";
import img2 from "E:/Web/assets/04-Company Structure/Company ST..png";
import img3 from "E:/Web/assets/04-Company Structure/Shareholder structure.png";
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
      {/* bg-[url(https://drive.google.com/uc?export=view&id=16IPET1uaGQKXb75QfNamUhnwdbNzzWY8)] */}
        <img src={image01}/>

      <div className="absolute inset-0 flex flex-col justify-center pl-8">
        {/* <h1 className="flex flex-col  text-7xl font-extrabold ml-36 text-[#827717]"> */}
            <img
                // src="https://drive.google.com/uc?export=view&id=1vDVjmb2SGxNkH5vhA7uYTMcgXck_wsPc"
                src={image03}
                className="absolute -top-96 right-0 h-min w-auto scale-75"
                alt=""
                />
            <img
                // src="https://drive.google.com/uc?export=view&id=19ePNijrJLKrJ4O8X9FNCEcVyk9XKKYgV"
                src={image02}
                className="absolute top-48 right-72 h-3/4 w-auto p-4"
                alt=""
                />
        {/* </h1> */}
        
      </div>
      {/* <div className="mt-28 h-4/5 w-auto flex justify-center item-center ">
          <img
            // src="https://drive.google.com/uc?export=view&id=16zQqLt1ik1E3FHUPY-bPy4TGEeyOVdOe"
            src={image04}
            className=""
            alt=""
            />
            </div>
        </div> */}
                  
        </div>
    //   </div>
      
  );
}

              
            

                  
            
