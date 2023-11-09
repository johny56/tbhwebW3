import React  from "react";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NarathiWatfac() {

    const toggleCard = () => {
        console.log("Istoggle");
    };

    return (
        

        <   div className="h-screen w-full overflow-clip">
                <div className="relative bottom-0 left-0 right-0 top-0 h-screen w-full">
                    <div className="bg-cover bg-no-repeat bg-center h-full w-auto bg-[url(https://drive.google.com/uc?export=view&id=1CBl6RK1_iragvcTlRj12NxCT_UDVmuox)]">
                    
                    <div className="relative flex flex-col pt-24 pl-32">
                        <h1 className="font-black text-8xl text-white pt-10">NARATHIWAT</h1>
                        <div className="absolute right-0 pt-8 pr-12">
                            {/* Button to toggle visibility */}
                            <Link to="/ourFactory">
                            <button
                                onClick={toggleCard}
                                className={`relative focus:outline-none transition `}
                                >
                            <FontAwesomeIcon className="fa-4x text-gray-[8080] hover:opacity-60" icon={faChevronLeft}/>

                            </button>
                            </Link>
                        </div>
                    </div>

                    <div className="md:h-3/5 w-auto flex flex-row justify-center space-x-32 lg:h-1/2 w-full mt-16">
                        <div className="h-full w-auto p-4">
                            <img className="h-full w-96" src="https://drive.google.com/uc?export=view&id=1E-CJEqoZkYreyP-thKepzESJH7wRG1eZ"/>
                        </div>
                        <div className="h-full w-auto p-4">
                            <img className="h-full w-96" src="https://drive.google.com/uc?export=view&id=1Y7knNa0Pe7ihciXg2CqGTNZIuATIwYid"/>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            

    );

}