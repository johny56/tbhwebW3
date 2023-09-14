import React from "react";

export default function Product(){


        // const image = [ "https://drive.google.com/uc?export=view&id=1Y0tLBg9vMc6X_uUz370Zbtc8c38lLlSa",
        //                 "https://drive.google.com/uc?export=view&id=1QKpaqfYmycu8uQdsJBuhrQsw3mK5cPTR",
        //             ];

        return (

        <div>
            
            <div className="bg-white flex flex-col justify-start p-2 ">
                
                <a href="#" className=" text-5xl font-sans font-tt-hoves text-green-900 m-10 p-2">PRODUCTS</a>
                
                    
            
                <div className="flex flex-row bg-tranparent bg-clip-content p-1 font-sans font-tt-hoves">
                    <div
                        className="relative rounded w-full flex flex-col invisible md:visible"
                        
                    ><img className="h-full w-full " src={"https://drive.google.com/uc?export=view&id=1y_Mv63WCCTfhymINmR8uvQ0ptdS_Kjc4"}/>
                    <p className="text-center">Mixture</p>
                    </div>
                    <div
                        className="relative rounded w-full flex flex-col text-start invisible md:visible"
                        
                    ><img className="h-full w-full " src={"https://drive.google.com/uc?export=view&id=1-GU2ZF2o5QznCUiB6TFncXS6ccz4SLjO"}/>
                    <p className="text-center">STR20CV</p>
                    </div>
                    <div
                        className="relative rounded w-full flex flex-col text-start invisible md:visible"
                        
                    ><img className="h-full w-full " src={"https://drive.google.com/uc?export=view&id=1PfKAz9x_8GKbY0VyLYlXj8SCW-mmUrs-"}/>
                    <p className="text-center">STR20</p>
                    </div>
                    <div
                        className="relative rounded w-full flex flex-col text-start invisible md:visible"
                        
                    ><img className="h-full w-full " src={"https://drive.google.com/uc?export=view&id=1IoSB-WGi7DrqQp4VUWjYp8me0uhXdCSu"}/>
                    <p className="text-center">STR10</p>
                    </div>
                    
                </div>
            </div>

        </div>   


        );

        

};