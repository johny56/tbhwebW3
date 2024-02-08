import { Link } from "react-router-dom";

import picture_1 from "../asset/1.png";
import picture_2 from "../asset/2.png";
import picture_3 from "../asset/4.png";
import picture_4 from "../asset/5.png";
import picture_5 from "../asset/H6.png";
import picture_6 from "../asset/Factory_Green.png";
import picture_7 from "../asset/Quote Factory2.png";

export const images = [
  picture_1,
  picture_2,
  picture_3,
  picture_4,
  picture_5,
  picture_6,
  picture_7,
]


export default function OurFactoryList() {


    return (
        <>
        <div id="cardContent" className={`card transition-opacity duration-300  bg-white`}>
        {/* Content of Cardtoggle */}
        <div className="relative flex flex-col h-screen w-full pt-16">
              <img className="h-76 w-3/5" src={picture_6}/>
              <div className="flex justify-end pr-12">
                <img className="h-full w-3/5" src={picture_7}/>
              </div>
              
              
  
            <div className="h-screen w-auto bg-white-200" id="factory-select">
            <div className="grid grid-flow-row-dense grid-cols-5 lg:gap-0 pb-8 ml-10 pl-24 md:gap-2 ml-2">
  
  
            <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
              <Link to='/thungSong'>
                  <img className="h-full w-auto rounded-lg" src={picture_1} alt=""/>
              </Link>
            </div>
            <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
              <Link to='/yala'>
                  <img className="h-full w-auto rounded-lg" src={picture_2} alt=""/>
              </Link>
            </div>
            <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
              <Link to='/narathiwat'>
                  <img className="h-full w-auto rounded-lg" src={picture_3} alt=""/>
              </Link>
            </div>
            <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
              <Link to='/pattani'>
                  <img className="h-full w-auto rounded-lg" src={picture_4} alt=""/>
              </Link>
            </div>
            <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
              <Link to='/suratthani'>
                  <img className="h-full w-auto rounded-lg" src={picture_5} alt=""/>
              </Link>
            </div>
  
            </div>
            </div>
  
            </div>
        </div>
        </>
  
      );

}