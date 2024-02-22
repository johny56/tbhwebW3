import React, { useState } from 'react';
import { Carousel } from "@material-tailwind/react";

export default function KaizenAward(){

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
                <div className="bg-cover h-screen w-full bg-[url(https://drive.google.com/uc?export=view&id=1VbqaCvp6OGGFT11eaatz_AqWai8yKYol)]">
                    <div className="bg-white h-full w-full text-back text-start pt-12">
                        <div className="container mx-auto flex flex-col justify-center">
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
                            <div className="flex flex-row">
                                <div className="flex flex-col h-full w-1/2 m-4">
                                    <h1 className="text-3xl text-green-800 font-sans font-tt-hoves py-16 mx-16">
                                    TBH WON THAILAND KAIZEN GOLDEN AWARD 2023
                                    </h1>

                                    <div className="flex flex-col h-full w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        TBH WON THAILAND KAIZEN GOLDEN AWARD 2023
                                        </h2>
                                        <h3 className="text-bold text-xl p-4">On 11 August 2023 , Bangkok International Trade and Exhibition Centre</h3>
                                        <p className="indent-8">Mr. Somchai Manosathaporn and his team won the gold medal in the Automatic Kaizen category of the THAILAND KAIZEN AWARD 2023 competition organized by the Technology Promotion Association (Thai-Japanese) by presenting the work “Auto Feed Transverser” under the slogan “Kaizen Ideas, generates inventions, and promotes innovation.”
           The Management team at Teck Bee Hang expects each staff member to contribute innovative ideas by developing personally and continuously enhancing the organization. By improving the production procedure. Unlocking the conventional approach to work improvement. In the direction of strengthening unique work that adds value to the organization.
           TBH would like to thank you for the team’s commitment to supporting our collaborative missions.
                                        </p>
                                    </div>
                                    <br></br>
                            
                                    <div className="flex flex-col h-full w-full pt-16">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        TBH คว้ารางวัล THAILAND KAIZEN GOLDEN AWARD 2023
                                        </h2>
                                        <h3 className="text-bold text-xl p-4">11 สิงหาคม 2566 ณ ศูนย์นิทรรศการและการประชุมไบเทคบางนา</h3>
                                        <p className="indent-8">ผู้จัดการโรงงานสาขาทุ่งสง คุณสมชาย มโนสถาพร พร้อมทีมแข่งขันร่วมนำเสนอผลงาน Kaizen โชว์ศักยภาพคว้ารางวัลเหรียญทอง ในงานแข่งขัน THAILAND KAIZEN AWARD 2023 ประเภทAutomatic Kaizen จัดโดยสมาคมส่งเสริมเทคโนโลยี (ไทย-ญี่ปุ่น) ณ ห้องแกรนด์ฮอลล์ ศูนย์นิทรรศการและการประชุมไบเทค บางนา กทม. โดยนำเสนอผลงานในชื่อ “Auto Feed Transverser” ภายใต้คำขวัญจากพนักงาน “ไคเซ็นรู้คิด สร้างสรรค์สิ่งประดิษฐ์ นำพานวัตกรรม”
           ผู้บริหารยางไทยปักษ์ใต้ คาดหวังให้พนักงานทุกคนมีแนวคิดริเริ่มสิ่งใหม่ๆ เพื่อนำมาพัฒนาตนเองและปรับปรุงองค์กรอย่างต่อเนื่อง พัฒนากระบวนการผลิต ปรับปรุงการทำงานจริงอย่างเป็นรูปธรรม ที่จะปลดล็อกกรอบความคิดการปรับปรุงการทำงานแบบเดิมๆ สู่การปรับปรุงงานที่เป็นอัตลักษณ์และสร้างมูลค่าให้กับองค์กร
           ทางTBHขอขอบคุณสำหรับความทุ่มเทในการทำงานเพื่อสนับสนุนการดำเนินงานด้วยกันมาตลอด
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 w-1/2 pt-16">
                                    {selectedImage ? (
                                            
                                            <div className="absolute top-20 left-0 right-0 bottom-0 bg-white h-full w-full">
                                                            

                                            <Carousel className="fixed item-center top-16 left-0 right-0 buttom-0 bg-cover bg-gray-800/70 h-full w-full z-0 rounded-xl"
                                                    navigation={({ setActiveIndex, activeIndex, length }) => (

                                                        // <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-3">
                                                        
                                                        <div className='fixed'>
                                                            <button
                                                                className="fixed h-10 w-10 text-center mt-4 border-2 top-32 right-5 text-red-300 text-extrabold cursor-pointer text-2xl rounded-full bg-red-500 hover:bg-red-700"
                                                                onClick={handleCloseCarousel}
                                                                >
                                                                X
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
                                                                activeIndex === i ? "w-16 bg-white z-30" : "w-12 bg-white/50"
                                                            }`}
                                                            onClick={() => setActiveIndex(i)}
                                                            />
                                                        ))}
                                                            

                                                        </div>
                                                        
                                                            
                                                        </div>
                                                        
                                                    )}
                                                >
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/01.png?fit=1030%2C773&ssl=1"
                                                    alt="image1"
                                                    className="ml-80 h-full w-2/3 object-cover scale-75 flex justify-center item-center"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/02-7.jpg?fit=1030%2C773&ssl=1"
                                                    alt="image2"
                                                    className="ml-96 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/03-7.jpg?fit=1030%2C772&ssl=1"
                                                    alt="image3"
                                                    className="ml-96 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/04-5.jpg?fit=1030%2C772&ssl=1"
                                                    alt="image4"
                                                    className="ml-96 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/08/5.png?fit=1030%2C773&ssl=1"
                                                    alt="image5"
                                                    className="ml-80 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/08/6.png?fit=1030%2C773&ssl=1"
                                                    alt="image6"
                                                    className="ml-80 h-full w-2/3 object-cover scale-75"
                                                />
                                            
                                            </Carousel>
                                            </div>
                                            
                                            
                                            ) : (
                                        <>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/01.png?fit=1030%2C773&ssl=1"
                                            alt="image1"
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/01.png?fit=1030%2C773&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/02-7.jpg?fit=1030%2C773&ssl=1"
                                            alt="image2"
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/02-7.jpg?fit=1030%2C773&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/03-7.jpg?fit=1030%2C772&ssl=1"
                                            alt="image3"
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/03-7.jpg?fit=1030%2C772&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/04-5.jpg?fit=1030%2C772&ssl=1"
                                            alt="image4"
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/04-5.jpg?fit=1030%2C772&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/08/5.png?fit=1030%2C773&ssl=1"
                                            alt="image5"
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/08/5.png?fit=1030%2C773&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/08/6.png?fit=1030%2C773&ssl=1"
                                            alt="image6"
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/08/6.png?fit=1030%2C773&ssl=1'
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
