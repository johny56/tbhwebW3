import React  from "react";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function PatTanifac() {

    const toggleCard = () => {
        console.log("Istoggle");
    };

    return (
        

            <div className="h-screen w-full overflow-clip">
                <div className="relative bottom-0 left-0 right-0 top-0 h-screen w-full">
                    <div className="bg-cover bg-no-repeat bg-center h-full w-auto bg-[url(https://drive.google.com/uc?export=view&id=1fi4h0fXvnGCnXWKkBmx5pRCBhKOydUIA)]">
                    
                    <div className="relative flex flex-col pt-24 pl-32">
                        <h1 className="font-black text-8xl text-white pt-10">PATTANI</h1>
                        <div className="absolute left-0 pt-16 pl-8">
                            {/* Button to toggle visibility */}
                            <Link to="/ourFactory">
                            <button
                                onClick={toggleCard}
                                className={`relative focus:outline-none transition `}
                                >
                            <FontAwesomeIcon className="fa-3x text-white hover:opacity-60" icon={faChevronLeft}/>

                            </button>
                            </Link>
                        </div>
                    </div>
                    
                
                    <div className="md:h-3/5 w-auto flex flex-row justify-center space-x-32 lg:h-1/2 w-full mt-16">
                        <div className="h-full w-auto p-4">
                            <img className="h-full w-96" src="https://drive.google.com/uc?export=view&id=1VFzBYTk10-ilk8EeGWQ9hps_QuPsMxR1"/>
                        
                        </div>
                        <div className="h-full w-auto p-4">
                            <img className="h-full w-96" src="https://drive.google.com/uc?export=view&id=1XCn-L01__1mTlZgeoGytOKHnBb-E_nfU"/>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>

            

    );

}