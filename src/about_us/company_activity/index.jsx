import React from "react";
import { Link } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";


import picture_1 from "../../assets/img/activity/01Sep-07.svg";
import picture_2 from "../../assets/img/activity/02Sep-06.svg";
import picture_3 from "../../assets/img/activity/03Aug-11.svg";
import picture_4 from "../../assets/img/activity/04Jun-21.svg";
import picture_5 from "../../assets/img/activity/05Jun-16.svg";
import picture_6 from "../../assets/img/activity/06Jun-28.svg";
import img from "E:/Web/assets/06_Factory/Circle.png";
export const image01 = img;


const images = [
    picture_2,
    picture_1,
    picture_3,
    picture_4,
    picture_6,
    picture_5,
    // "https://picsum.photos/300/300?image=206",
    // "https://picsum.photos/200/300?image=1050",
    // "https://picsum.photos/300/300?image=206",
    // "https://picsum.photos/200/300?image=1050",
    // "https://picsum.photos/300/300?image=206",
]

export default function Activity(){

    
        return (

            <div className="w-full h-screen bg-[#FFFFFF] shadow overflow-hidden py-14">

                <div className="grid grid-col-2 
                                md:gap-0 grid-cols-2
                                lg:ml-16 gap-0 grid-rows-2 
                                xl:grid-rows-3 ml-16 gap-0"
                >

                
                <ResponsiveMasonry columnsCountBreakPoints={{1250: 3, 1650: 3, 1800: 3, 1440: 3}} >
                {/* <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}> */}
                <Masonry gutter="10px">
                    {images.map((image, i) => (
                        <Link to="/activity_board">
                        <div className="group relative">
                        <img
                           className="max-w-full rounded transition-all duration-300 group-hover:opacity-75"
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", borderRadius: "15px"}}
                            alt=""
                        />
                            <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full">
                                    <img className="w-auto h-32 flex justify-center item-center"
                                        src={image01}
                                    />
                            </div>
                        </div>
                        </Link>
                    ))}
                </Masonry>
                </ResponsiveMasonry>
                    <div className="flex flex-col text-clip h-full w-full pl-28">
                        <h1 className=" text-6xl font-sans font-tt-hoves text-green-900 dark:text-neutral-50">
                            ACTIVITIES
                        </h1><br/>
                        <p className="font-sans font-tt-hoves w-3/4">Company activities play crucial part in enhancing collaboration and crreating a positive work environment.</p>
                        <br/>
                        <p className="font-sans font-tt-hoves w-3/4">Enhancing the team's trust and relationships, as well as its overall efficacy within the organization.</p>
                        <br/>
                        <p className="font-sans font-tt-hoves w-3/4">We enjoy bringing team members togather and sharing in their successes and celebrations.</p>
                        <br/>
                    </div>
                                    
                </div>

            </div>

       
    );
};
                    
