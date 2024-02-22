import React from 'react';

import img1 from '../../asset/yokohama.png'

export default function BestSupplier(){

    return (

        <div>
            {/* <div className="relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden"> */}
            <div>
                <div className="bg-cover h-screen bg-[url(https://drive.google.com/uc?export=view&id=1VbqaCvp6OGGFT11eaatz_AqWai8yKYol)]">
                    
                    <div className="bg-white h-full w-full text-back pl-32 pt-12">
                        {/* backbutton */}
                        <div className="flex justify-end pr-12 pt-20">
                            <a href="activity_board"
                                className="inline-flex items-center border border-green-500 px-3 py-1.5 rounded-md text-green-700 hover:bg-indigo-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                                    </path>
                                </svg>
                                <span className="ml-1 font-bold text-lg text-green-700">Back</span>
                            </a>
                        </div>
                        {/* backbutton */}
                        <div className="container mx-auto flex flex-col justify-center">
                        <h1 className="text-3xl text-green-800 font-sans font-tt-hoves py-12 mx-16">
                        Best Supplier for Quality Performance Award
                        </h1>
                        <div className="flex justify-center p-4">
                            <img className="max-h-full max-w-full rounded-lg" src={img1} alt=""/>
                        </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}