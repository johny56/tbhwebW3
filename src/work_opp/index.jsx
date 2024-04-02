// import Forum from "./emailforum";
import React from 'react';
import { useState } from "react";
import img from "./asset/Work Opputunity.png";
import ContactForm from './contractform';

// import StyledCheckbox from "../Whistleblowing/checkbox";

export const imageBg = img;

export default function WorkOpputunity(){

    const [clickState, setclickState] = useState(0);


    

    const handleClick = () =>{
        if(clickState === 0){
            setclickState(clickState+1);
        }
        else{
            setclickState(clickState-1);
        }
        console.log(clickState);

    }


    if(clickState === 0){
    return (

        <div>
            <div className="relative h-screen w-full overflow-hidden bg-cover z-0 bg-white">
                <div className="absolute h-full w-full pt-24">
                    <img className="h-full w-full" src={imageBg} alt=""/>
                </div>            

                    <div className="flex relative h-full items-center justify-center z-20">
                    <div className=" text-green-900 text-center pt-28">
                        <h2 className="my-2 text-7xl font-semibold"> WORK WITH US</h2>
                        <h4 className="my-2 text-4xl font-semibold"> BECOME ONE OF OUR HEROES</h4>
                    
                    </div>
                    </div>

                 
            
            </div>

            <div className="relative flex flex-col h-full shadow-md pt-20 z-10 sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Unti
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qualification
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Apply
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Post Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a>
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={handleClick} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</button>
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                2
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a>
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={handleClick} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</button>
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                3
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a> */}
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</a> */}
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                4
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a> */}
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</a> */}
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                5
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a> */}
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</a> */}
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                6
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a> */}
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</a> */}
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
                


            

            
            
            <footer className="bg-white text-black py-8 m-8">
            <div className="container mx-auto flex flex-wrap justify-center text-center">
                <div className="w-full md:w-1/3 px-4 mb-6">
                </div>
                <div className="w-full md:w-1/3 px-4 mb-6">
                <a>For futher information, please contact us</a>
                <br></br>
                <a>HR Department at Teck Bee Hang Co,Ltd(Head office)</a>
                <br></br>
                <a>157 Niphat Uthut 2 Road Hatyai Songkhla 90110</a>
                <br></br>
                <a>Email: HRD@teckbeehang.com</a>
                <br></br>
                <a>Call us:074-xxx-xxx Ext 20xx</a>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-6">
                </div>
            </div>
            </footer>

            </div>
      



        );

    }
    else{
        return(
            <div className="relative h-screen w-full bg-gray-800/10">
                <button
                    className="z-30 absolute top-32 right-40 h-12 w-12 text-center mt-4 border-2 right-5 text-red-100 border-4 text-extrabold cursor-pointer text-2xl rounded-full z-30 bg-red-400 hover:bg-red-700"
                    onClick={handleClick}
                    >
                        X
                </button>
                
                <ContactForm/>

            </div>
        );
    }
}
