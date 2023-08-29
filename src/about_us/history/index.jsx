import React from "react";

export default function About(){

    
        return (

            <div>
            {/* <div className="container w-50 bg-green-360"> */}
                <div
                    className="flex flex-row max-w-full h-auto rounded-lg bg-green-200">
                    <img
                        className="max-h-4xl max-w-4xl"
                        src="https://drive.google.com/uc?export=view&id=1sKykK-POA0B5vcQvgFpm9a82F1oczP-G"
                        alt="" />
                    
                    <div className="flex flex-col item-center justify-center space-y-6">

                        <h1 className="mx-56 mb-5 text-6xl font-medium uppercase text-green-900 dark:text-neutral-50">
                            Core Value
                        </h1>
                        <p className="ml-36 mb-2 text-2xl font-medium uppercase text-neutral-800 dark:text-neutral-50">
                            respect
                        </p>
                        <p className="ml-36 mb-2 text-2xl font-medium uppercase text-neutral-800 dark:text-neutral-50">
                            leadership
                        </p>
                        <p className="ml-36 mb-2 text-2xl font-medium uppercase text-neutral-800 dark:text-neutral-50">
                            communication
                        </p>
                        <p className="ml-36 mb-2 text-2xl font-medium uppercase text-neutral-800 dark:text-neutral-50">
                            professionalism
                        </p>
                        <p className="ml-36 mb-2 text-2xl font-medium uppercase text-neutral-800 dark:text-neutral-50">
                            integrity
                        </p>
                    </div>

                </div>
                
            
            </div>

       
    );
};

