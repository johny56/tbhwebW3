import React from "react";
import { Link } from 'react-router-dom';

export default function Activity(){

    
        return (

            <div className="w-full bg-[#FFFFFF] shadow flex flex-col p-8">
        
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-3">
            
                        <div className="relative w-auto h-auto overflow-hidden hover:opacity-75 transition">
                            <Link to="/Activity">
                            <img className="h-auto max-w-full rounded-lg" src="https://drive.google.com/uc?export=view&id=18AJQk3aosy7D62EYxaIvwCi6jlVgxaG2" alt=""/>
                            </Link>
                            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span class="text-gray-200/95 text-7xl font-bold"> + </span>
                            </div>
                        </div>

                        <div className="relative w-auto h-auto overflow-hidden hover:opacity-75 transition">
                            <img className="h-auto max-w-full rounded-lg" src="https://drive.google.com/uc?export=view&id=1SKwh20kJ56vJwm3Bxut1Rdm_9b5Rt9Uv" alt=""/>
                            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span class="text-gray-200/95 text-7xl font-bold"> + </span>
                            </div>
                        </div>

                        <div className="relative w-auto h-auto overflow-hidden hover:opacity-75 transition">
                            <img className="h-auto max-w-full rounded-lg" src="https://drive.google.com/uc?export=view&id=16YDqsO5xkNWOa4NjkIKNDnMFnMfXx8Op" alt=""/>
                            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span class="text-gray-200/95 text-7xl font-bold"> + </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-3">
                    <div className="relative w-auto h-auto overflow-hidden hover:opacity-75 transition">
                            <img className="h-auto max-w-full rounded-lg" src="https://drive.google.com/uc?export=view&id=1r7-sOj-ceD-5ANhvvz_Gk4uF_Sj4pO0L" alt=""/>
                            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span class="text-gray-200/95 text-7xl font-bold"> + </span>
                            </div>
                        </div>

                        <div className="relative w-auto h-auto overflow-hidden hover:opacity-75 transition">
                            <img className="h-auto max-w-full rounded-lg" src="https://drive.google.com/uc?export=view&id=1XX1qf0U1VSyXAWs-q8QcbcDarZ9tC2UZ" alt=""/>
                            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span class="text-gray-200/95 text-7xl font-bold"> + </span>
                            </div>
                        </div>

                        <div className="relative w-auto h-auto overflow-hidden hover:opacity-75 transition">
                            <img className="h-auto max-w-full rounded-lg" src="https://drive.google.com/uc?export=view&id=1WbRwSeRFDIxVj5O1-en7-TCfXb8S5NN4" alt=""/>
                            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span class="text-gray-200/95 text-7xl font-bold"> + </span>
                            </div>
                        </div>
                    </div>    

                    <div className="grid gap-3">
                        
                        <div className="relative w-auto h-auto overflow-hidden hover:opacity-75 transition">
                            <img className="h-auto max-w-full rounded-lg" src="https://drive.google.com/uc?export=view&id=1r7-sOj-ceD-5ANhvvz_Gk4uF_Sj4pO0L" alt=""/>
                            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span class="text-gray-200/95 text-7xl font-bold"> + </span>
                            </div>
                        </div>

                        <div className="relative w-auto h-auto overflow-hidden hover:opacity-75 transition">
                            <img className="h-auto max-w-full rounded-lg" src="https://drive.google.com/uc?export=view&id=1XX1qf0U1VSyXAWs-q8QcbcDarZ9tC2UZ" alt=""/>
                            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span class="text-gray-200/95 text-7xl font-bold"> + </span>
                            </div>
                        </div>

                        <div className="relative w-auto h-auto overflow-hidden hover:opacity-75 transition">
                            <img className="h-auto max-w-full rounded-lg" src="https://drive.google.com/uc?export=view&id=1WbRwSeRFDIxVj5O1-en7-TCfXb8S5NN4" alt=""/>
                            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span class="text-gray-200/95 text-7xl font-bold"> + </span>
                            </div>
                        </div>
                    </div>
                   
                    <div className="flex flex-col text-start">
                        <h1 className=" text-6xl font-sans font-tt-hoves text-green-900 dark:text-neutral-50">
                            ACTIVITIES
                        </h1><br></br>
                        <p className="font-sans font-tt-hoves">Marketing posters for clients in the arts and culture industry, 2022</p>
                    </div>
                </div>
                
            </div>

            

    

       
    );
};
