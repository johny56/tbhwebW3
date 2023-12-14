import React, {useState} from 'react';
import { Carousel, IconButton } from "@material-tailwind/react";

export default function Songkran(){

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseCarousel = () => {
        setSelectedImage(null);
    };

    return (

        <div>
            <div>
                <div className="bg-cover h-screen bg-[url(https://drive.google.com/uc?export=view&id=1VbqaCvp6OGGFT11eaatz_AqWai8yKYol)]">
                    <div className="bg-white h-full w-full text-back text-start pt-12">
                        <div className="container mx-auto flex flex-col justify-center">
                            <div className="flex flex-row">
                                <div className="flex flex-col h-full w-1/2">
                                    <h1 className="text-3xl text-green-800 font-sans font-tt-hoves py-24 mx-16">
                                    HAPPY SONGKRAN FESTIVAL
                                    </h1>
                                    <div className="flex flex-col h-1/2 w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                            HAPPY SONGKRAN FESTIVAL<br></br>On 12 April 2023 , TBH Head office
                                        </h2><br></br>
                                        <p className="mx-16 indent-5">All employees and the management team enjoyed in-house Thai new year activities by showering and blessing the water for the new year.
                                            Happy Songkran Festival to all our team!
                                        </p>
                                    </div>
                                    <br></br>
                            
                                    <div className="flex flex-col h-full w-full pt-12">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                            สงกรานต์มหาสนุก<br></br>12 เมษายน 2556 ณ สำนักงานใหญ่ บริษัทยางไทยปักษ์ใต้ จำกัด
                                        </h2><br></br>
                                        <p className="mx-16 indent-5">พนักงานและคณะผู้บริหารทุกคนร่วมสนุกสนานกับกิจกรรมวันขึ้นปีใหม่ไทยด้วยการสรงน้ำพระ
                                        และรับพรปีใหม่จากผู้บริหาร <br></br>สุขสันต์วันปีใหม่ไทยทุกคน!
                                        </p>
                                    </div>

                                </div>
                                    <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 w-1/2 pt-16">
                                    {selectedImage ? (
                                            
                                            <div className="absolute top-20 left-0 right-0 bottom-0 bg-white h-full w-full">
                                                            

                                            <Carousel className="absolute top-16 left-0 right-0 buttom-0 bg-cover bg-gray-800/70 border-4 h-4/5 w-full z-0 rounded-xl p-2 shadow-lg"
                                                    navigation={({ setActiveIndex, activeIndex, length }) => (

                                                        <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-3">
                                                        
                                                        {new Array(length).fill("").map((_, i) => (
                                                            <span
                                                            key={i}
                                                            className={`block h-2 border-2 cursor-pointer rounded-2xl transition-all content-[''] ${ 
                                                                activeIndex === i ? "w-16 bg-white" : "w-12 bg-white/50"
                                                            }`}
                                                            onClick={() => setActiveIndex(i)}
                                                            />
                                                            
                                                        ))}
                                                            {/* prevArrow={({ handlePrev }) => (
                                                                <IconButton
                                                                variant="text"
                                                                color="white"
                                                                size="lg"
                                                                onClick={handlePrev}
                                                                className="!absolute top-2/4 left-4 -translate-y-2/4"
                                                                >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={2}
                                                                    stroke="currentColor"
                                                                    className="h-6 w-6"
                                                                >
                                                                    <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                                                    />
                                                                </svg>
                                                                </IconButton>
                                                            )}
                                                            nextArrow={({ handleNext }) => (
                                                                <IconButton
                                                                variant="text"
                                                                color="white"
                                                                size="lg"
                                                                onClick={handleNext}
                                                                className="!absolute top-2/4 !right-4 -translate-y-2/4"
                                                                >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={2}
                                                                    stroke="currentColor"
                                                                    className="h-6 w-6"
                                                                >
                                                                    <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                                                    />
                                                                </svg>
                                                                </IconButton>
                                                            )} */}

                                                        </div>
                                                        
                                                        
                                                    )}
                                                >
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-01.jpg?fit=960%2C720&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-02.jpg?fit=960%2C720&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-03.jpg?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-04.jpg?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-04.jpg?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-05.jpg?fit=1030%2C481&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                            
                                            </Carousel>
                                            <button
                                                            className="absolute pt-4 top-16 right-10 text-white/90 text-bold cursor-pointer text-4xl"
                                                            onClick={handleCloseCarousel}
                                                            >
                                                                CLOSE
                                            </button>
                                            </div>
                                            
                                            ) : (
                                        <>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-01.jpg?fit=960%2C720&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-01.jpg?fit=960%2C720&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-02.jpg?fit=960%2C720&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-02.jpg?fit=960%2C720&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-03.jpg?fit=1030%2C773&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-03.jpg?fit=1030%2C773&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-04.jpg?fit=1030%2C773&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-04.jpg?fit=1030%2C773&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-04.jpg?fit=1030%2C773&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-04.jpg?fit=1030%2C773&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-05.jpg?fit=1030%2C481&ssl=130%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-05.jpg?fit=1030%2C481&ssl=130%2C687&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        
                                        </>
                                    )}
                                </div>

                                


                                
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}