import React  from "react";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import picture_1 from "../asset/Pattani/BG_PT.jpg";
import picture_2 from "../asset/Pattani/H7.png";
import picture_3 from "../asset/Pattani/H7 Cert.png";

export const images = [
  picture_1,
  picture_2,
  picture_3,
]

export default function PatTanifac() {

    const toggleCard = () => {
        console.log("Istoggle");
    };

    return (
        

            <div className="h-screen w-full overflow-clip">
                <div className="relative bottom-0 left-0 right-0 top-0 h-screen w-full">
                    {/* <div className="bg-cover bg-no-repeat bg-center h-full w-auto bg-[url(https://drive.google.com/uc?export=view&id=1fi4h0fXvnGCnXWKkBmx5pRCBhKOydUIA)]"> */}
                    <div className="relative bg-cover h-screen w-full z-0">
                        <div className="absolute h-full w-full z-10">
                            <img className="h-full w-full" src={picture_1} alt=""/>
                        </div>

                    <div className="relative flex flex-col pt-24 pl-32 z-20">
-                        <h1 className="font-black text-8xl text-gray-800/50 pt-10">PATTANI</h1>
                        <div className="absolute left-0 pt-20 pl-8">
                            {/* Button to toggle visibility */}
                            <Link to="/ourFactoryList">
                            <button
                                onClick={toggleCard}
                                className={`relative focus:outline-none transition `}
                                >
                            <FontAwesomeIcon className="fa-3x text-gray-800 hover:opacity-60" icon={faChevronLeft}/>

                            </button>
                            </Link>
                        </div>
                    </div>
                    
                
                    <div className="absolute md:h-3/5 w-auto flex flex-row justify-center space-x-32 scale-125 lg:h-1/2 w-full mt-16 z-20">
                        <div className="h-full w-auto p-8 mt-4">
                            <img className="h-full w-full" src={picture_2}/>
                        </div>
                        <div className="h-full w-auto p-4">
                            <img className="h-full w-full" src={picture_3}/>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>

            

    );

}