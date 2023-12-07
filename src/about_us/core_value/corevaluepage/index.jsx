import React from "react";
import { Link } from "react-router-dom";

export default function CorevaluePage(){

    
        return (

            
            <div className="bg-contain bg-no-repeat h-max-screen w-auto bg-green-200 pt-24">
                <div className="w-full h-auto bg-white">
                    
                    <div className="flex flex-row m-2 pt-36">
                        
                        <div className="h-full w-1/2 item-end justify-end">
                            <h1 className="text-end text-8xl font-bold text-green-900 pr-20">OUR<br/> VISION</h1>
                            <div className="flex flex-col justify-center m-8 pl-12 pt-12">
                                <div className="h-1 w-28 bg-green-900"></div>
                                <div className="flex justify-center w-2/3">
                                    <p className="pt-6 font-sans text-xl text-green-900 indent-5">To be a professional natural rubber processor that is committed to developing its block rubber business to be globally renown for excellence in quality,technology and competency with sustainable ties to community and society.</p>
                                </div>
                            </div>

                        </div>

                        <div className="h-full w-1/2 flex justify-center item-center m-4">
                            <img className="h-full w-full" src="https://drive.google.com/uc?export=view&id=1u3grAJgd74mkD7unpG8bM_80SHmxMc32" alt=""/>
                        </div>
                    </div>
                        
                    <div className="flex flex-row m-4 pt-24">
                        
                        <div className="h-full w-1/3 flex justify-start item-start pl-12">
                            <img className="h-full w-96" src="https://drive.google.com/uc?export=view&id=1wv7ExbPIbzyjXX-YA2pYQaY9EL3bjPqq" alt=""/>
                        </div>

                        <div className="h-full w-2/3 item-start justify-start md:w-full pl-32 ">
                            <h1 className="pt-48 text-start text-8xl font-bold text-green-900 md:pt-28">OUR<br/> MISSION</h1>
                            <div className="flex flex-col m-4">
                                <div className="h-1 w-28 bg-green-900"></div>
                                <div className="flex justify-center lg:w-2/3 md:w-full">
                                    <p className="pt-6 font-sans text-xl text-green-900 indent-5">Committed to comtinuously developing and maintaining product quality coupled with building innovation excellence whilst developing employee potential and welfare. To promote a "Kaizen" mindset amonget employees and to be a sustainable organization that is community and environment friendly.</p>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="flex flex-row m-2 pt-28">
                        
                        <div className="h-full w-1/2 item-start justify-start pt-48 pl-8">
                            <h1 className="text-start text-8xl font-bold text-green-900 pl-16">CORE<br/> VALUE</h1>
                            <div className="flex flex-col m-6 pl-4 pt-8">
                                <div className="h-1 w-28 bg-green-900"></div>
                                <p className="pt-6 font-sans text-xl text-green-900">RESPECT<br/>LEADERSHIP<br/>COMMUNICATION<br/>PROFESSIONALISM<br/>INTEGRITY</p>
                            </div>

                        </div>

                        <div className="h-full w-1/2 flex justify-center item-center pr-24">
                            <img className="h-full w-full" src="https://drive.google.com/uc?export=view&id=1kTRrbtsZnq4QvPcbbPNLjuu17Hthki7Q" alt=""/>
                        </div>

                    </div>

                    <div className="h-full w-full flex justify-center item-center px-48 pt-36 pb-16">
                        <img className="h-full w-full" src="https://drive.google.com/uc?export=view&id=1XDwEOmCirIdsJ-0RIaenfKD6ZtP1oaDH" alt=""/>
                    </div>

                    <div className="h-64 w-full pt-18 p-4">
                        <div className="flex flex-col text-center">
                            <h1 className=" text-xl">Teck Bee Hang Co., Ltd.</h1>
                            <div className="font-sm text-lg text-gray-700">
                                <p>Address: 157 Niphat Uthit 2 Road, Hatyai, Songkhla 90110, Thailand.</p>
                                <p>Telephone: +(66) 7435 5307-9, +(66) 7423 5200-5</p>
                                <p>Fax: +(66) 7423 4729, +(66) 7423 1308</p>
                                <p>Office Hours: 8:30 – 17:30 (Mon-Fri)</p>
                                <p>Sales and Marketing: sales@teckbeehang.com</p>
                                <p>Human Resources: hrd@teckbeehang.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#273F02] text-white">
                        <div className="w-full container mx-auto flex flex-col text-center">
                            <div className="flex flex-row md:flex-row text-center text-lg md:text-left md:justify-between py-6">
                                
                                <Link className="font-sans font-tt-hoves text-white dark:text-white hover:underline" to="/Whistleblowing">WHISTLEBLOWIMG</Link>
                                <a href="#" className="font-sans font-tt-hoves ">SUGGESTION/CUSTOMER COMPLAINTS</a>
                                <a href="#" className="font-sans font-tt-hoves ">PRIVACY POLICY | COOKIE POLICY</a>
                                <Link className="font-sans font-tt-hoves text-white dark:text-white hover:underline" to="/tbhstaff">TBH STAFF</Link>
                                
                            </div>
                        </div>
                    </div>

                </div>
                
            
            </div>

       
    );
};

