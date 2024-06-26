import React, {useState} from 'react';
import { Carousel } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Bigcleaning(){

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
                                <h1 className="text-3xl text-green-800 font-sans font-tt-hoves py-12 pt-16 mx-16">
                                BIG CLEANING DAY 2022
                                </h1>

                                    <div className="flex flex-col h-full w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        BIG CLEANING DAY 2022
                                        </h2>
                                        <h3 className="text-bold text-xl p-4">On 11 November 2022 , TBH Head office</h3>
                                        <p className="indent-8">Teck Bee Hang Co., Ltd. encourages employees to adopt 5S as the company’s guiding principle by organising an annual 5S competition. Employees at the head office joined together this year to arrange the Big Cleaning Day to clean and improve the environment around the company,
 to create a workplace that is good for society and effective for future work, as well as to encourage safety, raise the standards, promote discipline, and increase the efficiency of work.
                                        </p>
                                    </div>
                                    <br></br>
                            
                                    <div className="flex flex-col h-full w-full pt-12">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        BIG CLEANING DAY 2022
                                        </h2>
                                        <h3 className="text-bold text-xl p-4">11 พฤศจิกายน 2565 ณ สำนักงานใหญ่ บริษัทยางไทยปักษ์ใต้ จำกัด</h3>
                                        <p className="indent-8">บริษัทยางไทยปักษ์ใต้มีการส่งเสริมให้นำ 5ส มาใช้ โดยมีการจัดการประกวด 5ส ในทุกๆปี เพื่อเป็นการผลักดันปลูกฝัง 5ส เป็นรากฐานให้แก่องค์กร โดยในปีนี้พนักงาน ณ.สำนักงาน ร่วมใจจัดกิจกรรม Big Cleaning Day ร่วมกันทำความสะอาดและปรับปรุงภูมิทัศน์รอบๆบริษัท
 เพื่อให้เกิดภูมิทัศน์ที่ดีต่อสังคม และเพื่อส่งเสริมความปลอดภัย มีมาตรฐาน สร้างวินัย ก่อให้เกิดการเพิ่มประสิทธิภาพ และประสิทธิผลต่อการทำงานต่อไป
                                        </p>
                                    </div>

                                </div>
                                <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 w-1/2 pt-16">
                                    {selectedImage ? (
                                            
                                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-transition h-full w-full">
                                                            

                                            <Carousel className="fixed item-center top-16 left-0 right-0 buttom-0 bg-gray-800/90 h-full w-full z-20"
                                                    navigation={({ setActiveIndex, activeIndex, length }) => (

                                                        <div className='fixed'>
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

                                                        <div className="fixed bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-3">
                                                        
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
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/01-6.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75 pb-8"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/02-6.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75 pb-8"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/03-6.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75 pb-8"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/05-4.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75 pb-8"
                                                />
                                                {/* <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/05-4.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                /> */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/06-4.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75 pb-8"
                                                />
                                            </Carousel>   
                                            </div>
                                            
                                            ) : (
                                        <>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/01-6.jpg?fit=1030%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/01-6.jpg?fit=1030%2C687&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/02-6.jpg?fit=1030%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/02-6.jpg?fit=1030%2C687&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/03-6.jpg?fit=1030%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/03-6.jpg?fit=1030%2C687&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/05-4.jpg?fit=1030%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/05-4.jpg?fit=1030%2C687&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        {/* <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/05-4.jpg?fit=1030%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/05-4.jpg?fit=1030%2C687&ssl=1'
                                                )
                                            }
                                            />
                                        </div> */}
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/06-4.jpg?fit=1030%2C687&ssl=130%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/06-4.jpg?fit=1030%2C687&ssl=130%2C687&ssl=1'
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
