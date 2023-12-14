import React, {useState} from 'react';
import { Carousel } from "@material-tailwind/react";

export default function HappyWork(){

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
                    <div className="bg-white h-full w-full text-back text-start pt-24">
                        <div className="container mx-auto flex flex-col justify-center">
                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <h1 className="text-3xl text-green-800 font-sans font-tt-hoves py-12 mx-16">
                                    HAPPY WORKPLACE<br />
                                    HAPPY HEART
                                    </h1>
                                    <div className="flex flex-col h-1/2 w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        HAPPY WORKPLACE HAPPY HEART<br />
                                        TBH head office<br />
                                        Employee's Birthday Gift:
                                        </h2>
                                        <p className="mx-16"> Sincere to say, as a happy workplace, we have always valued the diligent work of our team.

We aspire to fulfill a small role in their birthday anniversary celebration.

Employee birthday gifts are a token of our appreciation for the team.

Happy Heart, TBH!
                                        </p>
                                    </div>
                            
                                    <div className="flex flex-col h-full w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        มอบของขวัญวันคล้ายวันเกิดให้แก่พนักงาน<br />
                                        ณ สำนักงานใหญ่ บริษัทยางไทยปักษ์ใต้ จำกัด
                                        </h2>
                                        <p className="mx-16">ในฐานะองกรณ์ที่ให้ความสำคัญกับความสุขในการทำงานและให้ความสำคัญกับพนักงานเสมอมา เราคาดหวังว่าจะใช้โอกาสนี้มอบความสุขเล็กๆน้อยๆ ให้กับพนักงานในวันคล้ายวันเกิดเพื่อให้พนักงานได้สัมผัสและรู้สึกว่าบริษัทฯ ใส่ใจ ดูแลพนักงานอยู่เสมอ และถือโอกาสนี้มอบของขวัญแทนคำขอบคุณที่ตั้งใจทำงานอย่างเต็มที่เพื่อองกรณ์
          TBH ขอขอบคุณและขออวยพรพนักงานทุกคนให้มีความสุขในทุกๆวัน
                                        </p>
                                    </div>

                                </div>
                            <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 w-full">
                                    {selectedImage ? (
                                            
                                            <div className="absolute top-20 left-0 right-0 bottom-0 bg-white h-full w-full">
                                                            

                                            <Carousel className="absolute top-16 left-0 right-0 buttom-0 bg-gray-800/70 border-4 h-3/4 w-full z-0 rounded-xl p-2 shadow-lg"
                                                    navigation={({ setActiveIndex, activeIndex, length }) => (

                                                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-3">
                                                        
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
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/01-2.jpg?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/02-2.jpg?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/03-2.jpg?fit=1030%2C772&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/04-1.jpg?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/05-1.jpg?fit=1030%2C772&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/06-1.jpg?fit=1030%2C772&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
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
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/01-2.jpg?fit=1030%2C773&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/01-2.jpg?fit=1030%2C773&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/02-2.jpg?fit=1030%2C773&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/02-2.jpg?fit=1030%2C773&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/03-2.jpg?fit=1030%2C772&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/03-2.jpg?fit=1030%2C772&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/04-1.jpg?fit=1030%2C773&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/04-1.jpg?fit=1030%2C773&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/05-1.jpg?fit=1030%2C772&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/05-1.jpg?fit=1030%2C772&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/06-1.jpg?fit=1030%2C772&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/07/06-1.jpg?fit=1030%2C772&ssl=1'
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