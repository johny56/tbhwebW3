import React from 'react';

export default function Nrproperty(){

    return (

        <div>
            <div>
                <div className="bg-cover h-screen bg-[url(https://drive.google.com/uc?export=view&id=1VbqaCvp6OGGFT11eaatz_AqWai8yKYol)]">
                    <div className="bg-white h-full w-full text-back text-start pt-12">
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
                            <h1 className="text-3xl text-green-800 font-sans font-tt-hoves mx-16">
                            NR PROPERTY TRAINING
                            </h1>
                            <div className="flex flex-col">
                                
                                    <div className="flex flex-col h-full w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        16 Oct, 20 TBH Head Office
                                        </h2>
                                        
                                    </div>
                                
                                <div className="grid grid-cols-3 grid-rows-3 gap-1 pt-12">

                                    <div className="relative h-56 w-80 overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/150879-1.jpg?resize=495%2C400&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-80 overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/150945-1.jpg?resize=495%2C400&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-80 overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201016133652-1-scaled.jpg?resize=495%2C400&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-80 overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201016135320-1-scaled.jpg?resize=495%2C400&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-80 overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201016153235-scaled.jpg?resize=495%2C400&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-80 overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201016163119-scaled.jpg?resize=495%2C400&ssl=1" alt=""/>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}