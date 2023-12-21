import React from "react";
import { Link } from "react-router-dom";

export default function Product(){


        // const image = [ "https://drive.google.com/uc?export=view&id=1Y0tLBg9vMc6X_uUz370Zbtc8c38lLlSa",
        //                 "https://drive.google.com/uc?export=view&id=1QKpaqfYmycu8uQdsJBuhrQsw3mK5cPTR",
        //             ];

        return (

        <div>
            
            <div className="bg-white flex flex-col justify-start p-2 ">

                <div className="flex flex-row bg tranparent">

                    <a href="#" className=" text-5xl font-sans font-tt-hoves text-green-900 pl-16">PRODUCTS</a>
                    
                    <div className="absolute right-10 h-10 w-28 shadow-md rounded-full mt-4">
                        <Link to="/Productpage" className="flex justify-center pt-2">More detail</Link>
                    </div>

                </div>
                
            
                <div className="flex flex-row bg-tranparent bg-clip-content p-1 gap-x-12 font-sans font-tt-hoves pt-8 mt-4 m-2">

                    <div className="relative bg-gray-200/90 rounded-full h-full w-1/4 flex flex-col text-start invisible md:visible">
                        <img className="h-full w-full " src={"https://drive.google.com/uc?export=view&id=1IoSB-WGi7DrqQp4VUWjYp8me0uhXdCSu"}/>
                        <p className="text-center">STR10</p>
                    </div>
                    <div className="relative bg-gray-200/90 rounded-full h-full w-1/4 flex flex-col text-start invisible md:visible">
                        <img className="h-full w-full " src={"https://drive.google.com/uc?export=view&id=1PfKAz9x_8GKbY0VyLYlXj8SCW-mmUrs-"}/>
                        <p className="text-center">STR20</p>
                    </div>
                    <div className="relative bg-gray-200/90 rounded-full h-full w-1/4 flex flex-col text-start invisible md:visible">
                        <img className="h-full w-full " src={"https://drive.google.com/uc?export=view&id=1-GU2ZF2o5QznCUiB6TFncXS6ccz4SLjO"}/>
                        <p className="text-center">STR20CV</p>
                    </div>
                    <div className="relative bg-gray-200/90 rounded-full h-full w-1/4 flex flex-col invisible md:visible">
                        <img className="h-full w-full" src={"https://drive.google.com/uc?export=view&id=1y_Mv63WCCTfhymINmR8uvQ0ptdS_Kjc4"}/>
                        <p className="text-center">Mixture</p>
                    </div>

                </div>
                
            </div>

        </div>   

        );
};