import React from "react";
import { Link } from "react-router-dom";

import img1 from "./asset/หัวเรื่อง Lee in tong.png";
import img2 from "./asset/History pic/Home.png";
import img3 from "./asset/bg4.png";
import img4 from "./asset/เนื้อหา.png";
import img5 from "./asset/bg6.png";
import img6 from "./asset/หัวเรื่อง timeline.png";

import img7 from "./asset/History pic/7.png";
import img8 from "./asset/History pic/3.png";
import img9 from "./asset/History pic/5.png";
import img10 from "./asset/History pic/9.png";
import img11 from "./asset/History pic/6.png";
import img12 from "./asset/History pic/10.png";
import img13 from "./asset/History pic/8.png";



export const image01 = img1;
export const image02 = img2;
export const image03 = img3;
export const image04 = img4;
export const image05 = img5;
export const image06 = img6;

export const image07 = img7;
export const image08 = img8;
export const image09 = img9;
export const image10 = img10;
export const image11 = img11;
export const image12 = img12;
export const image13 = img13;


export default function History(){

    
        return (

            <div className="relative h-screen w-full bg-white pt-32 overflow-x-hidden">
                
                <div className="h-28 w-3/5 flex flex-col justify-center text-center ml-56 pl-56">
                <img className="h-full w-auto rounded-lg" src={image01} alt=""/>
                    
                </div>

                <div className="h-10 w-full flex justify-end mr-8 pr-8">
                    <Link to="/history_img" className="h-full w-10 bg-gray-400/50 rounded-full -pt-2 border-2 border-gray-900 text-gray-800 font-samibold text-2xl text-center hover:bg-gray-700/80">+</Link>
                </div>
                <div className="relative h-auto w-full flex justify-center">
                    <img className="absolute -top-56 h-auto w-5/6" src={image02}/>
                </div>


                <div className="relative h-24 w-full px-8 mt-96 pt-20">
                    <p className="text-xl font-normal indent-16">In 1954, Lee Inntong and his associates acquired real estate, founded Thailand Teck Bee Hang Co., Ltd., and was nominated as a chairman.
                    Under his devoted management. Teck Bee Hang standard rubber production and export progressively become the leader in Thailand, becoming the Empire of rubber exports.</p>
                </div>

                
                <div className="relative bg-contain h-5/6 w-full mt-48">
                    {/* bg-[url('https://drive.google.com/uc?export=view&id=11lbVo54ir_Qg6dTM_DH-NBqto86Cc8nK')] */}
                    
                    <img className="absolute h-full w-full" src={image03}/>

                    <div className="absolute flex flex-row h-full w-full pl-16">
                        <div className="h-full w-2/3 m-4">
                            <div className="h-96 w-auto bg-gray-200/20 border-4 mt-16 ml-12"></div>
                        </div>
                        <div className="h-full w-2/5 pl-36">
                            <img className="h-full w-auto" src={image04} alt=""/>
                            
                        </div>
                    </div>

                    

                </div>

                <div className="relative bg-contain h-screen w-full mt-48 scale-125">
                    {/* bg-[url('https://drive.google.com/uc?export=view&id=1dU0MhmIxow1DWaytqd7Rv3j4ljqyGlCQ')] */}
                    <img className="absolute h-full w-full" src={image05}/>
                    
                    <div className="h-36 w-3/6 flex flex-col my-4 ml-96 pl-96 scale-125">
                        <img className="h-full w-auto rounded-lg m-16" src={image06} alt=""/>
                    </div>

                    {/* <!-- component --> */}
                    <div className="relative flex ml-24 justify-center scale-100 container">
                            <div
                                className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
                            >
                                {/* <!-- right --> */}
                                <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                    <div className="relative h-full w-6 flex items-center justify-center">
                                    <div className="absolute h-2/3 top-28 w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-800"
                                    ></div>
                                </div>
                                <div
                                    className="bg-transition col-start-6 col-end-8 p-4 my-4 mr-auto pt-20"
                                >
                                    <h3 className="font-bold text-3xl mb-1 text-green-900">1954</h3>
                                    <p className="leading-tight text-base line-clamp-3 text-gray-900">
                                    Established Company with RSS smoke-houses in Songkhla, Yala & Narathiwas by Mr.Lee In Tong.
                                    </p>
                                </div>
                                </div>
                                {/* <!-- left --> */}
                                <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-transition col-start-3 col-end-5 p-4 my-4 ml-auto text-end pt-16"
                                >
                                    <h3 className="font-bold text-3xl mb-1 text-green-900">1966</h3>
                                    <p className="leading-tight text-base line-clamp-2 text-gray-900">
                                    Overtook Krung Sang Rubber to become Thailand's leading natural rubber exporter.
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                    <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-800"
                                    ></div>
                                </div>
                                </div>
                                {/* <!-- right --> */}
                                <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-800"
                                    ></div>
                                </div>
                                <div
                                    className="bg-transition col-start-6 col-end-8 p-4 my-4 mr-auto pt-20"
                                >
                                    <h3 className="font-bold text-3xl mb-1 text-green-900">1973</h3>
                                    <p className="leading-tight text-base line-clamp-3 text-gray-900">
                                    Pioneered the production of Thai Tested Rubber and become a well-known world leading exporter of natural rubber.
                                    </p>
                                </div>
                                </div>
                                {/* <!-- left --> */}
                                <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-transition col-start-3 col-end-5 p-4 my-4 ml-auto text-end pt-20"
                                >
                                    <h3 className="font-bold text-3xl mb-1 text-green-900">1995</h3>
                                    <p className="leading-tight text-base line-clamp-3 text-gray-900">
                                    Honored by Thai Ministry of Agriculture and Cooperatives for its contribution to the Thai Rubber Industry.
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                    <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-800"
                                    ></div>
                                </div>
                                </div>
                                {/* <!-- right --> */}
                                <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-800"
                                    ></div>
                                </div>
                                <div
                                    className="bg-transition col-start-6 col-end-8 p-4 my-4 mr-auto pt-44"
                                >
                                    <h3 className="font-bold text-3xl mb-1 text-green-900">1999</h3>
                                    <p className="leading-tight text-gray-900 text-base line-clamp-7">
                                    Mr.Lee In Tong, chairman of TBH, was honored as an outstanding person in the Thai Rubber Industry,for the
                                    advancemanets in rubber processing and trading, by the prime minister on the occasion of the 100th Anniversary
                                    of the Thai Natural Rubber Industry
                                    </p>
                                </div>
                                </div>
                                {/* <!-- left --> */}
                                <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-transition col-start-3 col-end-5 p-4 my-4 ml-auto text-end pt-16"
                                >
                                    <h3 className="font-bold text-3xl mb-1 text-green-900">2003</h3>
                                    <p className="leading-tight text-base line-clamp-2 text-gray-900">
                                    Production of premium grade STR, meeting consumer specifications.
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                    <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-800"
                                    ></div>
                                </div>
                                </div>
                                {/* <!-- right --> */}
                                <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                    className="w-6 h-6 absolute z-10 top-1/2 -mt-3 rounded-full bg-green-800"
                                    ></div>
                                </div>
                                <div
                                    className="relative bg-transition col-start-6 col-end-8 p-4 my-4 mr-auto pt-16"
                                >
                                    <h3 className="font-bold text-3xl mb-1 text-green-900">2010</h3>
                                    <p className="leading-tight text-base line-clamp-2 text-gray-900">
                                    GMG Global Ltd. become majority shareholder of TBH
                                    </p>
                                    <div className="absolute h-96 w-auto -top-44 -right-80 scale-150 bg-transition">
                                        <img className="h-full w-full" src={image07} alt=""/>
                                    </div>
                                </div>
                                </div>
                                {/* <!-- left --> */}
                                <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="relative bg-transition col-start-3 col-end-5 p-4 my-4 ml-auto text-end pt-20"
                                >
                                    <h3 className="font-bold text-3xl mb-1 text-green-900">2016</h3>
                                    <p className="leading-tight text-base line-clamp-3 text-gray-900">
                                    Halcyon Agri Corporation Ltd., takeover of GMG Global Ltd., Thus becoming a majority shareholder of TBH.
                                    </p>
                                    <div className="absolute h-max-screen w-auto -top-36 -left-96 scale-150 bg-transition">
                                        <img className="h-full w-full" src={image10} alt=""/>
                                    </div>
                                    
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                    <div className="relative h-full w-6 flex items-center justify-center">
                                    <div className="absolute -top-28 h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div
                                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-800"
                                    ></div>
                                </div>

                                
                                </div>

                                <div className="absolute h-1/3 w-auto -top-20 -left-48 bg-transition scale-125">
                                    <img className="h-full w-full" src={image08} alt=""/>
                                </div>

                                <div className="absolute h-1/3 w-auto top-96 -right-56 scale-x-100 bg-transition">
                                    <img className="h-full w-full" src={image09} alt=""/>
                                </div>
                                {/* <div className="absolute h-96 w-auto top-80 -scale-x-100 -right-5 bg-transition">
                                    <img className="h-full w-full" src={image10} alt=""/>
                                </div> */}
                                
                                <div className="absolute h-2/4 w-auto buttom-0 top-48 mt-96 pt-96 scale-100 -left-48 bg-transition">
                                    <img className="h-full w-full" src={image11} alt=""/>
                                </div>

                            </div>

                            

                           

                </div>
                            <div className="relative h-3/4 w-full overflow-hidden">

                                <img className="absolute top-16 buttom-0 bg-cover h-max w-full z-10" src={image12}/>

                                <div className="absolute -top-32 -right-28 h-full w-auto z-0 scale-125">
                                    <img className="h-full w-full" src={image13} alt=""/>
                                </div>

                                <div className="absolute mt-96 top-40 buttom-0 h-16 w-full bg-[#273F02] text-white z-10">
                                    <div className="w-full container mx-16 flex flex-col text-center scale-90">
                                        <div className="flex flex-row mx-4 md:flex-row text-center text-md md:text-left md:justify-between py-6">
                                            
                                            <Link className="font-sans font-tt-hoves text-white dark:text-white hover:underline" to="/Whistleblowing">WHISTLEBLOWIMG</Link>
                                            <a href="#" className="font-sans font-tt-hoves ">SUGGESTION/CUSTOMER COMPLAINTS</a>
                                            <Link to="/policy_page" className="font-sans font-tt-hoves ">PRIVACY POLICY | COOKIE POLICY</Link>
                                            <Link className="font-sans font-tt-hoves text-white dark:text-white hover:underline" to="/tbhstaff">TBH STAFF</Link>
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>

                </div>
                

            
            </div>

       
    );
};

