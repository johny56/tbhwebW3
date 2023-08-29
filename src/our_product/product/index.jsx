import React from "react";

export default function Product(){


        // const image = [ "https://drive.google.com/uc?export=view&id=1Y0tLBg9vMc6X_uUz370Zbtc8c38lLlSa",
        //                 "https://drive.google.com/uc?export=view&id=1QKpaqfYmycu8uQdsJBuhrQsw3mK5cPTR",
        //             ];

        return (

        <div>
            
            <div className="bg-white flex flex-col justify-start p-2">
                
                <a href="#" className=" text-5xl font-bold text-green-900 m-10 p-2">PRODUCTS</a>
                
                    
            
                <div className="flex flex-row bg-tranparent bg-clip-content p-1 m-1">
                    <div
                        className="relative w-full flex items-center invisible md:visible"
                        
                    ><img className="h-72 w-full hover:opacity-75" src={"https://drive.google.com/uc?export=view&id=1QKpaqfYmycu8uQdsJBuhrQsw3mK5cPTR"}/>
                    </div>
                    <div
                        className="relative w-full flex items-center invisible md:visible "
                        
                    ><img className="h-72 w-full hover:opacity-75" src={"https://drive.google.com/uc?export=view&id=1Y0tLBg9vMc6X_uUz370Zbtc8c38lLlSa"}/>
                    </div>
                    <div
                        className="relative w-full flex items-center invisible md:visible "
                        
                    ><img className="h-72 w-full hover:opacity-75" src={"https://drive.google.com/uc?export=view&id=1QKpaqfYmycu8uQdsJBuhrQsw3mK5cPTR"}/>
                    </div>
                    <div
                        className="relative w-full flex items-center invisible md:visible "
                        
                    ><img className="h-72 w-full hover:opacity-75" src={"https://drive.google.com/uc?export=view&id=1Y0tLBg9vMc6X_uUz370Zbtc8c38lLlSa"}/>
                    </div>
                    
                </div>
            </div>

        </div>   


        );

        

};