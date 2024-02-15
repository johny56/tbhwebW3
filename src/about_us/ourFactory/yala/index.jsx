import React  from "react";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import picture_1 from "../asset/Yala/BG_Yala.jpg";
import picture_2 from "../asset/Yala/H2 (2).png";
import picture_3 from "../asset/Yala/H2 CERT.png";

export const images = [
  picture_1,
  picture_2,
  picture_3,
]


export default function YaLafac() {

    const toggleCard = () => {
        console.log("Istoggle");
    };

    return (
        

            <div>
                <div className="h-screen w-full overflow-clip">
                    {/* <div className="bg-cover bg-no-repeat bg-center h-full w-auto bg-[url(https://drive.google.com/uc?export=view&id=1r-lZKJ3L5_klh6EWlakBmwYEGGXMeNb2)]"> */}
                    <div className="relative bg-cover h-full w-full z-0">
                        <div className="absolute h-full w-full z-10">
                            <img className="h-full w-full" src={picture_1} alt=""/>
                        </div>
                    <div className="relative flex flex-row pt-24 pl-32 z-20">

                        <div className="absolute left-0 pt-16 pl-8">
                            {/* Button to toggle visibility */}
                            <Link to="/ourFactoryList">
                            <button
                                onClick={toggleCard}
                                className={`relative focus:outline-none transition `}
                                >
                            <FontAwesomeIcon className="fa-3x text-white hover:opacity-60" icon={faChevronLeft}/>

                            </button>
                            </Link>
                        </div>
                        <h1 className="font-black text-8xl text-gray-800/50 pt-10 z-20">YALA</h1>
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

                    {/* <div className="flex flex-col justify-end item-end"> */}
                    {/* </div> */}
            </div>
        </div>    
            
        
    );

}


               
// <div className="relative bottom-0 left-0 right-0 top-0 h-screen w-full">
// <div className="bg-cover bg-no-repeat bg-[url(https://drive.google.com/uc?export=view&id=1r-lZKJ3L5_klh6EWlakBmwYEGGXMeNb2)]">
//     <div className="flex flex-col pl-24 pt-12">
//         <div className="h-72 w-auto">
//             <img className="h-full w-auto" src="https://drive.google.com/uc?export=view&id=1UxPPaxZQsk-mwLUl4gdji41sk1TG46z3"/>
//         </div>
//     </div>
//     <div className="flex flex-row justify-center>">
//         <div className="h-48 w-full">
//             <img className="h-full w-auto" src="https://drive.google.com/uc?export=view&id=1PjFVReVpTjOqfFGxMuqkXFWyGmaHOPBk"/>
        
//         </div>
//         <div className="h-80 w-full">
//             <img className="h-full w-auto" src="https://drive.google.com/uc?export=view&id=1tCdnNJE984lbFw_xsy-TIbfVLW4ZSHK5"/>
//         </div>
//     </div>
// </div>
// </div>


                