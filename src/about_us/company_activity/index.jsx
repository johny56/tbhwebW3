import React from "react";
import { Link } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import picture_1 from "../../assets/img/activity/01Sep-07.svg";
import picture_2 from "../../assets/img/activity/02Sep-06.svg";
import picture_3 from "../../assets/img/activity/03Aug-11.svg";
import picture_4 from "../../assets/img/activity/04Jun-21.svg";
import picture_5 from "../../assets/img/activity/05Jun-16.svg";
import picture_6 from "../../assets/img/activity/06Jun-28.svg";

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

            <div className="w-full h-full bg-[#FFFFFF] shadow flex flex-col p-4 pt-22 overflow-hidden">
            {/* <div className="flex flex-row"> */}

                <div className="grid grid-rows-2 md:gap-0 grid-cols-2 lg:ml-16 gap-0 grid-cols-2 xl:grid-rows-3 ml-16 gap-0">

                
                <ResponsiveMasonry columnsCountBreakPoints={{1250: 1, 1650: 2, 1800: 3, 1440: 3}} >
                <Masonry gutter="10px">
                    {images.map((image, i) => (
                        <Link to="/activity_board">
                        <div className="group relative">
                        <img
                           className="max-w-full rounded transition-all duration-300 group-hover:opacity-75 "
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", borderRadius: "15px"}}
                            alt=""
                        />
                            <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full mr-32">
                                    <img className="w-auto h-32 flex justify-center item-center"
                                        src="https://drive.google.com/uc?export=view&id=1vLDPRW1ckbl8LdFqK1oo7t7EBX2ZeGCA"
                                    />
                            </div>
                        </div>
                        </Link>
                    ))}
                </Masonry>
                </ResponsiveMasonry>
                {/* </div> */}

                    <div className="flex flex-col text-clip overflow-hidden pl-12">
                        <h1 className=" text-6xl font-sans font-tt-hoves text-green-900 dark:text-neutral-50">
                            ACTIVITIES
                        </h1><br></br>
                        <p className="font-sans font-tt-hoves w-3/4">Company activities play crucial part in enhancing collaboration and crreating a positive work environment.</p>
                        <br></br>
                        <p className="font-sans font-tt-hoves w-3/4">Enhancing the team's trust and relationships, as well as its overall efficacy within the organization.</p>
                        <br></br>
                        <p className="font-sans font-tt-hoves w-3/4">We enjoy bringing team members togather and sharing in their successes and celebrations.</p>
                        <br></br>
                    </div>

                

                                    
                </div>

            </div>

       
    );
};


                    {/* <div className="grid gap-4 justify-center">
                        <Link to="/activity_board">
                        <div className="group relative">
                        <img
                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/06-1.jpg?fit=1030%2C772&ssl=1"
                            alt="Your Alt Text"
                            className="ml-16 max-w-full h-96 rounded transition-all duration-300 group-hover:opacity-75 "
                        />
                            <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full mr-32">
                                <img className="w-auto h-40 flex justify-center item-center ml-12"
                                    src="https://drive.google.com/uc?export=view&id=1vLDPRW1ckbl8LdFqK1oo7t7EBX2ZeGCA"
                                />
                            </div>
                        </div>
                        </Link>

                        <div className="flex flex-cols gap-2 mb-72">
                            <div className="flex justify-center">
                                <img className="h-72 w-auto rounded-lg" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/04-scaled.jpg?fit=1030%2C687&ssl=1" alt=""/>
                            </div>
                            <div className="flex justify-center">
                                <img class="h-56 max-w-full rounded-lg" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-01.jpg?fit=960%2C720&ssl=1" alt=""/>
                            </div>
                        </div>
                        
                    </div> */}
                    
                    {/* <div className="grid gap-4 justify-center">
                        <div className="flex flex-cols gap-2 pl-4">
                            <div className="flex justify-start">
                                <img className="h-56 max-w-full rounded-lg" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/02-4.jpg?fit=1030%2C686&ssl=1" alt=""/>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 p-4">
                            <div className="flex justify-center ml-20">
                                <img className="h-56 max-w-full rounded-lg" src="https://drive.google.com/uc?export=view&id=18AJQk3aosy7D62EYxaIvwCi6jlVgxaG2" alt=""/>
                            </div>
                            <div className="flex justify-center mb-72">
                                <img className="h-56 ml-32 max-w-auto rounded-lg" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2022/05/yrs-1-e1653465777889.png?fit=1030%2C725&ssl=1" alt=""/>
                            </div>
                        </div>
                    </div> */}

                    
