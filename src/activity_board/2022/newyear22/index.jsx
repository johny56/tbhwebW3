import React, {useState} from 'react';
import { Carousel } from "@material-tailwind/react";

export default function NewYear22(){

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
                    <div className="bg-white h-full w-full text-back text-start pt-12">
                        <div className="container mx-auto flex flex-col justify-center">
                            <div className="flex flex-row">
                                <div className="flex flex-col h-full w-1/2">
                                    <h1 className="text-3xl text-green-800 font-sans font-tt-hoves py-16 pt-20 mx-16">
                                    HAPPY CHINESE NEW YEAR 2022 CELEBRATIONL
                                    </h1>
                                    <div className="flex flex-col h-1/2 w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        HAPPY CHINESE NEW YEAR 2022 CELEBRATION<br></br>On 28 January 2022 , TBH Head office
                                        </h2><br></br>
                                        <p className="indent-6 mx-16"> Led by CEO Mr. Lee Keng Seng, head office management, branch management, and Teck Bee Hang Co., Ltd company employees. Gathered in front of the company to celebrate Chinese New Year to increase this year’s good fortune. So that all employees participate in the Chinese New Year celebrations to enhance the auspiciousness and enjoy the meal. Mr.Lee Keng Seng congratulated all employees: Happy Chinese new year! May all your wishes come true today, and bless you with health, wealth, and happiness.
                                        </p>
                                    </div>
                                    <br></br>
                            
                                    <div className="flex flex-col h-full w-full pt-12">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        ฉลองเทศกาลตรุษจีน ประจำปี 2565<br></br>28 มกราคม 2565 ณ สำนักงานใหญ่ บริษัท ยางไทยปักษ์ใต้ จำกัด
                                        </h2><br></br>
                                        <p className="indent-6 mx-16">บริษัท ยางไทยปักษ์ใต้ จำกัด สำนักงานใหญ่ ได้จัดกิจกรรมไหว้ตรุษจีนต้อนรับปีขาล นำโดยประธานกรรมการ Mr.Lee Keng Seng ผู้บริหารสำนักงานใหญ่ เพื่อให้พนักงานทุกคนได้มีส่วนร่วมในการไหว้ตรุษจีนเพื่อเสริมศิริมงคลและร่วมรับประทานอาหารร่วมกัน โดย Mr.Lee Keng Seng ได้กล่าวอวยพรพนักงานทุกท่าน ซินเจียยู่อี่ ซินนี้ฮวดไช้ คิดหวังสิ่งใดขอให้สมหวังสมปรารถนาในปีใหม่นี้ มีแต่ความสุขมั่งคั่ง โชคดีร่ำรวยตลอดปี
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 w-1/2 pt-16">
                                    {selectedImage ? (
                                            
                                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-transition h-full w-full">
                                                            

                                            <Carousel className="absolute top-40 left-0 right-0 buttom-0 bg-gray-200/90 border-4 h-3/4 w-full z-0 rounded-xl p-2"
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
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/01-4.jpg?fit=1030%2C686&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/02-4.jpg?fit=1030%2C686&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/03-4.jpg?fit=1030%2C686&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/05-2.jpg?fit=1030%2C686&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/06-2.jpg?fit=1030%2C686&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/04-2.jpg?fit=1030%2C686&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                            </Carousel>
                                            <button
                                                            className="absolute pt-4 top-40 right-10 text-gray-700 text-bold cursor-pointer text-4xl"
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
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/01-4.jpg?fit=1030%2C686&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/01-4.jpg?fit=1030%2C686&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/02-4.jpg?fit=1030%2C686&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/02-4.jpg?fit=1030%2C686&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/03-4.jpg?fit=1030%2C686&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/03-4.jpg?fit=1030%2C686&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/05-2.jpg?fit=1030%2C686&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/05-2.jpg?fit=1030%2C686&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/06-2.jpg?fit=1030%2C686&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/06-2.jpg?fit=1030%2C686&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/04-2.jpg?fit=1030%2C686&ssl=130%2C687&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/04-2.jpg?fit=1030%2C686&ssl=130%2C687&ssl=1'
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
