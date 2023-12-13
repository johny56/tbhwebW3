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
                            <h1 className="text-3xl text-green-800 font-sans font-tt-hoves py-24 mx-16">
                            TBH WON THAILAND KAIZEN GOLDEN AWARD 2023
                            </h1>
                            <div className="flex flex-row">
                                <div className="flex flex-col h-full w-1/2 m-4">

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
                                
                                <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 w-1/2">
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
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/01.png?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/02-7.jpg?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/03-7.jpg?fit=1030%2C772&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/04-5.jpg?fit=1030%2C772&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/08/5.png?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/08/6.png?fit=1030%2C773&ssl=1"
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
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/09/01.png?fit=1030%2C773&ssl=1"
                                            alt=""
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
                                            alt=""
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
                                            alt=""
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
                                            alt=""
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
                                            alt=""
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
                                            alt=""
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
