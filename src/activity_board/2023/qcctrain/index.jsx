import React, {useState} from 'react';
import { Carousel } from "@material-tailwind/react";

export default function QCC(){

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseCarousel = () => {
        setSelectedImage(null);
    };

    return (

        <div>
            {/* <div className="relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden"> */}
            <div>
                <div className="bg-cover h-screen bg-[url(https://drive.google.com/uc?export=view&id=1VbqaCvp6OGGFT11eaatz_AqWai8yKYol)]">
                    <div className="bg-white h-full w-full text-back text-start pt-24">
                        <div className="container mx-auto flex flex-col justify-center">
                            {/* backbutton */}
                            <div className="flex justify-end pr-12 pt-12">
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
                            <div className="flex flex-row">
                                <div className="flex flex-col h-full w-1/2">
                                    <h1 className="text-3xl text-green-800 font-sans font-tt-hoves py-12 pt-12 mx-16">
                                    THE QUALITY CONTROL CIRCLE TRAINING
                                    </h1>
                                    <div className="flex flex-col h-full w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        THE QUALITY CONTROL CIRCLE TRAINING<br />
                                            On 28 June 2023 , TBH Head office
                                        </h2><br></br>
                                        <p className="indent-8 mx-16">We continue to reskill and upskill our employees. This year, we are expanding and educating the entire organization on the QCC (Quality Control Circle) program. We are committed to continuous service and product improvement based on employee feedback.
          Our team will be able to identify the root cause and discover novel techniques for enhancing our organization’s performance.
                                        </p>
                                    </div>
                                    <br></br>
                            
                                    <div className="flex flex-col h-full w-full pt-14">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        กิจกรรมกลุ่มควบคุมคุณภาพ<br />28 มิถุนายน 2556 ณ สำนักงานใหญ่ บริษัทยางไทยปักษ์ใต้ จำกัด
                                        </h2><br></br>
                                        <p className="indent-8 mx-16">บริษัทยางไทยปักษ์ใต้ ไม่เพียงแต่ให้ความใส่ใจคุณภาพของสินค้าและการบริการเท่านั้น เรายังให้ความสำคัญต่อบุคลากรในองค์กร ในปีนี้บริษัทได้เพิ่มความรู้และทักษะให้แก่พนักงานเกี่ยวกับหลักการและแนวคิดแบบ QCC หรือ Quality Control Circle (วงจรควบคุมคุณภาพที่ทุกคนมีส่วนร่วม) เรามุ่งมั่นที่จะปรับปรุงผลิตภัณฑ์และการให้บริการอย่างต่อเนื่องตามความเห็นของพนักงาน
          เป้าหมายของเราคือ สามารถหาสาเหตุของปัญหาที่แท้จริงและค้นพบเทคนิคในการทำงานใหม่ ๆ เพื่อเพิ่มประสิทธิภาพการทำงานขององค์กรของเรา
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 w-1/2 pt-8">
                                    {selectedImage ? (
                                            
                                            <div className="absolute top-20 left-0 right-0 bottom-0 bg-white h-full w-full">
                                                            

                                            <Carousel className="absolute top-16 left-0 right-0 buttom-0 bg-cover bg-gray-800/70 border-4 h-4/5 w-full z-0 rounded-xl p-2 shadow-lg"
                                                    navigation={({ setActiveIndex, activeIndex, length }) => (

                                                        <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-3">
                                                        
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
                                                        
                                                    )}
                                                >
                                                    {/* p.s. ภาพโหลดช้ามาก */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/01-1-scaled.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/02-1-scaled.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 2"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/03-1-scaled.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 3"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/04-scaled.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 4"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/05-scaled.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 5"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/06-scaled.jpg?fit=1030%2C687&ssl=1"
                                                    alt="image 6"
                                                    className="ml-80 h-full w-2/3 object-cover pt-2"
                                                />
                                            </Carousel>
                                            <button
                                                            className="absolute pt-4 top-20 right-10 text-white/90 text-bold cursor-pointer text-4xl"
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
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/01-1-scaled.jpg?fit=1030%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/01-1-scaled.jpg?fit=1030%2C687&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/02-1-scaled.jpg?fit=1030%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/02-1-scaled.jpg?fit=1030%2C687&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/03-1-scaled.jpg?fit=1030%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/03-1-scaled.jpg?fit=1030%2C687&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/04-scaled.jpg?fit=1030%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/04-scaled.jpg?fit=1030%2C687&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/05-scaled.jpg?fit=1030%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/05-scaled.jpg?fit=1030%2C687&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/06-scaled.jpg?fit=1030%2C687&ssl=130%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/06-scaled.jpg?fit=1030%2C687&ssl=130%2C687&ssl=1'
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