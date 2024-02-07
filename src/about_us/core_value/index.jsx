import React from "react";
import { Link } from "react-router-dom";
import img from "./asset/c (1).jpg";

export default function CoreValue(){

    const image01 = img;

            return(

                <div className="bg-contain bg-no-repeat h-screen w-full bg-white pt-28 mt-28">
                    <div className="flex flex-row h-full w-full">
                        <div className="flex justify-center item-center h-2/3 w-auto pl-16">
                            <img className="h-full w-full" src={image01}/>
                        </div>

                        <div className="flex flex-col h-full w-auto pl-20 pt-36">
                            <div className="h-12 w-full">
                                <h1 className="font-normal text-6xl text-green-800">CORE VALUES</h1>
                                <div className="flex flex-col pt-12 space-y-2">
                                    <p className="font-normal text-3xl">RESPECT</p>
                                    <p className="font-normal text-3xl">LEADERSHIP</p>
                                    <p className="font-normal text-3xl">COMMUNICATION</p>
                                    <p className="font-normal text-3xl">PROFESSIONALISM</p>
                                    <p className="font-normal text-3xl">INTEGRITY</p>
                                </div>
                                <div className="absolute end-0 pr-32">
                                    <div className="h-10 w-28 shadow-lg rounded-full">
                                        <Link to="/CorevaluePage" className="flex justify-center pt-2">More detail</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            );
};

