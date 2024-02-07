import Navbar from "components/navbar";
import React from 'react';

import image from "../asset/Homepage_01.jpg";
export const image01 = image;

const Header = () => {

  

  return (
    
      
        // <div className="bg-transition h-max z-40">

          <header className="bg-green-500 bg-local hover:bg-fixed top-0 w-full shadow-md z-0">
              <nav className="flex flex-row bg-transition fixed top-0 w-full z-40">
                  <Navbar></Navbar>
              </nav>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed z-20">
              {/* <div className="bg-cover h-screen bg-[url(https://drive.google.com/uc?export=view&id=1w2SwHnIUEbKgPLefMC8YPxEH4kzJX0QB)] bg-no-repeat z-10"> */}
                
              {/* <div className="bg-cover h-screen bg-[url(./img/Hompage_01.jpg)] bg-no-repeat z-10"> */}
              <div className="relative bg-cover h-screen bg-no-repeat z-10">

                <img className="absolute h-full w-full" src={image01}/>
               
             
             {/* <div className="bg-cover h-screen bg-[image01] bg-no-repeat z-10"> */}
            

                  <div className="relative flex h-full items-end py-18 justify-center">
                  <div className="text-white m-8">
                      <h2 className="my-2 text-7xl font-sans font-tt-hoves"> TECK BEE HANG CO.,LTD.</h2>
                      <h4 className="my-2 text-4xl font-sans font-tt-hoves"> NATURAL RUBBER PROCESSOR AND EXPORTER</h4>
                  
                  </div>
                  </div>
              
              </div>
            </div>
     
              
          </header>
            
        // </div>
    
  );
};

export default Header;


// make change url homepage-01 https://drive.google.com/file/d/1w2SwHnIUEbKgPLefMC8YPxEH4kzJX0QB/view?usp=drive_link



        