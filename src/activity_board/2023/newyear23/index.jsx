import React, { useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function NewYear23(){

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
                            <div className="flex flex-row">
                                <div className="flex flex-col h-full w-1/2 m-4">
                                    <h1 className="text-3xl text-green-800 font-sans font-tt-hoves py-16 pt-16 mx-16">
                                    HAPPY CHINESE NEW YEAR 2023 CELEBRATIONL
                                    </h1>
                                    <div className="flex flex-col h-1/2 w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        HAPPY CHINESE NEW YEAR 2023 CELEBRATION<br></br>On 20 January 2023 , TBH Head office
                                        </h2><br></br>
                                        <p className="indent-8 mx-16">On Friday, January 20, 2023, led by Chairman Mr. Lee Keng Seng, head office management, branch management, and Teck Bee Hang Co., Ltd company employees. Gathered in front of the company to celebrate Chinese New Year to increase this year’s good fortune. This event will be highlighted by the grand opening of 20,000 firecrackers and a Chinese dinner for the employees.

Happy Chinese New Year! We wish you all the best!
                                        </p>
                                    </div>
                            
                                    <div className="flex flex-col h-full w-full pt-12">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        ฉลองเทศกาลตรุษจีน ประจำปี 2566<br></br>20 มกราคม 2556 ณ สำนักงานใหญ่ บริษัทยางไทยปักษ์ใต้ จำกัด
                                        </h2><br></br>
                                        <p className="indent-8 mx-16">กลุ่มบริษัท ยางไทยปักษ์ใต้ จำกัด สำนักงานใหญ่ ฉลองเทศกาลตรุษจีนในวันที่ 20 มกราคม 2566 บริเวณด้านหน้าสำนักงานใหญ่ อย่างยิ่งใหญ่ เมื่อวันศุกร์ ที่ 20 มกราคม 2566 นำโดยประธานกรรมการ Mr.Lee Keng Seng ผู้บริหารสำนักงานใหญ่ ผู้บริหารสาขา และพนักงานบริษัท ยางไทยปักษ์ใต้ จำกัด ร่วมกันไหว้ตรุษจีนบริเวณด้านหน้าบริษัทเพื่อเสริมศิริมงคลของปีนี้
          ไฮไลท์ของงานในครั้งนี้จะเป็นการจุดประทัดจำนวน 20,000 นัดอย่างยิ่งใหญ่และการเลี้ยงพนักงานโต๊ะจีนอีกด้วย
                                        </p>
                                    </div>
                                
                                    </div>
                                    <div className="grid grid-flow-row-dense grid-cols-2 w-1/2 pt-16">
                                    {selectedImage ? (
                                            
                                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-transition h-full w-full">
                                                            

                                            <Carousel className="fixed item-center top-16 left-0 right-0 buttom-0 bg-gray-800/90 h-full w-full"
                                                    navigation={({ setActiveIndex, activeIndex, length }) => (
                                                        <div className=''>
                                                        <button
                                                                onClick={handleCloseCarousel}
                                                                className={`fixed h-12 w-12 text-center mt-4 border-2 top-32 right-10 text-extrabold cursor-pointer text-2xl border-gray-700 rounded-full bg-gray-200`}
                                                                >
                                                                <FontAwesomeIcon className="h-6 w-10 mb-1 fa-3x text-gray-800 hover:opacity-50" icon={faChevronLeft}/>
                                                        </button>
                                                        <div className='fixed top-96 left-24 h-12 w-8 z-30'>
                                                            <button className={`h-full w-full`}
                                                                onClick={() => setActiveIndex(activeIndex-1)}
                                                            >
                                                            <svg class="h-16 w-16 text-white bg-gray-800 rounded-full hover:bg-green-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
                                                            </svg>
                                                            </button>
                                                        </div>
                                                        <div className='fixed top-96 right-24 h-12 w-8 z-30'>
                                                            <button className={`h-full w-full`}
                                                                    onClick={() => setActiveIndex(activeIndex+1)}
                                                            >
                                                            <svg class="h-16 w-16 text-white bg-gray-800 rounded-full hover:bg-green-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                            </svg>
                                                            </button>
                                                        </div>

                                                        <div className="fixed bottom-4 left-2/4 z-20 flex -translate-x-2/4 gap-3">
                                                        
                                                        {new Array(length).fill("").map((_, i) => (
                                                            <span
                                                            key={i}
                                                            className={`block h-2.5 border-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                                                                activeIndex === i ? "w-16 bg-white" : "w-12 bg-white/50"
                                                            }`}
                                                            onClick={() => setActiveIndex(i)}
                                                            />
                                                        ))}

                                                            
                                                        </div>
                                                        </div>
                                                    )}
                                                >
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_83.jpg?fit=1030%2C686&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_113.jpg?fit=1030%2C686&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_121.jpg?fit=1030%2C686&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_128.jpg?fit=1030%2C686&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_133.jpg?fit=1030%2C686&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_76.jpg?fit=773%2C1030&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                            </Carousel>
                                            </div>
                                            
                                            ) : (
                                        <>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_83.jpg?fit=1030%2C686&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_83.jpg?fit=1030%2C686&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_113.jpg?fit=1030%2C686&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_113.jpg?fit=1030%2C686&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_121.jpg?fit=1030%2C686&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_121.jpg?fit=1030%2C686&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_128.jpg?fit=1030%2C686&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_128.jpg?fit=1030%2C686&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_133.jpg?fit=1030%2C686&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_133.jpg?fit=1030%2C686&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_76.jpg?fit=773%2C1030&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/03/LINE_ALBUM_Chinese-New-Year-2023_230220_76.jpg?fit=773%2C1030&ssl=1'
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