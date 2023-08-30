import React from "react";

export default function Product(){


        // const image = [ "https://drive.google.com/uc?export=view&id=1Y0tLBg9vMc6X_uUz370Zbtc8c38lLlSa",
        //                 "https://drive.google.com/uc?export=view&id=1QKpaqfYmycu8uQdsJBuhrQsw3mK5cPTR",
        //             ];

        return (

        <div>
            
            <div className="bg-white flex flex-col justify-start p-2">
                
                <a href="#" className=" text-5xl font-bold text-green-900 m-10 p-2">PRODUCTS</a>
                
                    
            
                <div className="flex flex-row bg-tranparent bg-clip-content p-1">
                    <div
                        className="relative rounded w-full flex flex-col invisible md:visible"
                        
                    ><img className="h-72 w-full " src={"https://drive.google.com/uc?export=view&id=1Vi1wL2OMv06XuEowYlpDnRddGSQuC1RI"}/>
                    <p className="text-center">Mixture</p>
                    </div>
                    <div
                        className="relative rounded w-full flex flex-col text-start invisible md:visible"
                        
                    ><img className="h-72 w-full " src={"https://drive.google.com/uc?export=view&id=1ijPFqAXWne1Xolo_yWTS3s1cbaCW8rgW"}/>
                    <p className="text-center">STR20CV</p>
                    </div>
                    <div
                        className="relative rounded w-full flex flex-col text-start invisible md:visible"
                        
                    ><img className="h-72 w-full " src={"https://drive.google.com/uc?export=view&id=1TXpKFGXd-QiltFPL6r_zrf0OR1XH_Aj3"}/>
                    <p className="text-center">STR20</p>
                    </div>
                    <div
                        className="relative rounded w-full flex flex-col text-start invisible md:visible"
                        
                    ><img className="h-72 w-full " src={"https://drive.google.com/uc?export=view&id=1WlUUw79Dg2Pj4GOtNEnwiZB1_Erlptw2"}/>
                    <p className="text-center">STR10</p>
                    </div>
                    
                </div>
            </div>

        </div>   


        );

        

};