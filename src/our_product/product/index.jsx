import React from "react";
import { Link } from "react-router-dom";
import img from "E:/Web/assets/08-Our Product/Products/STR10_SHADOW.png";
import img1 from "E:/Web/assets/08-Our Product/Products/STR20_SHADOW.png";
import img2 from "E:/Web/assets/08-Our Product/Products/STR20CV_SHADOW.png";
import img3 from "E:/Web/assets/08-Our Product/Products/MIXTURES_SHADOW.png";

export const image00 = img;
export const image01 = img1;
export const image02 = img2;
export const image03 = img3;


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
                
            
                <div className="flex flex-row bg-tranparent bg-clip-content justify-center ml-24 gap-x-4 font-sans font-tt-hoves pt-8 mt-4">

                    <div className="relative h-full w-1/4 flex flex-col invisible md:visible">
                        <div className="bg-gray-200/90 rounded-full h-72 w-72"></div>
                        <img className="absolute top-20 left-11 h-auto w-2/4 hover:scale-125" src={image00}/>
                        <p className="text-xl font-sans font-tt-hoves text-green-900 pl-28">STR10</p>
                    </div>
                    <div className="relative h-full w-1/4 flex flex-col invisible md:visible">
                        <div className="bg-gray-200/90 rounded-full h-72 w-72"></div>
                        <img className="absolute top-20 left-11 h-auto w-2/4 hover:scale-125" src={image01}/>
                        <p className="text-xl font-sans font-tt-hoves text-green-900 pl-28">STR20</p>
                    </div>
                    <div className="relative h-full w-1/4 flex flex-col invisible md:visible">
                        <div className="bg-gray-200/90 rounded-full h-72 w-72"></div>
                        <img className="absolute top-20 left-11 h-auto w-2/4 hover:scale-125" src={image02}/>
                        <p className="text-xl font-sans font-tt-hoves text-green-900 pl-28">STR20CV</p>
                    </div>
                    <div className="relative h-full w-1/4 flex flex-col invisible md:visible">
                        <div className="bg-gray-200/90 rounded-full h-72 w-72"></div>
                        <img className="absolute top-20 left-11 h-auto w-2/4 hover:scale-125" src={image03}/>
                        <p className="text-xl font-sans font-tt-hoves text-green-900 pl-28">Mixture</p>
                    </div>

                </div>
                
            </div>

        </div>   

        );
};