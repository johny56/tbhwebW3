import React, {useState} from 'react';
import { Carousel } from "@material-tailwind/react";

export default function Efforts(){

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
                                    <h1 className="text-3xl text-green-800 font-sans font-tt-hoves py-16 mx-16">
                                    TECK BEE HANG CO., LTD RECEIVED A SPECIAL PLAQUE FOR ITS EFFORTS IN PROMOTING THE EMPLOYMENT OF PEOPLE WITH DISABILITIES. POWERING INNOVATION FOR ACCESSIBLE AND FAIR EMPLOYMENT.
                                    </h1>

                                    <div className="flex flex-col h-full w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        TBH RECEIVED A SPECIAL PLAQUE FOR ITS EFFORTS IN PROMOTING THE EMPLOYMENT OF PEOPLE WITH DISABILITIES. POWERING INNOVATION FOR ACCESSIBLE AND FAIR EMPLOYMENT.
                                        </h2>
                                        <h3 className="text-bold text-xl p-4">On 2 Febuary 2023 , Prince of Songkla University’s 60th Anniversary of His Majesty the King’s Accession to the Throne International Convention Centre
                                        </h3>
                                        <p className="indent-8">On February 2, 2023, representatives Mr. Narongrit Songpan and Ms. Chutinthorn Poolsawat received the prize plaque. Supporting the hiring of disabled people at the Prince of Songkla University’s 60th Anniversary of His Majesty the King’s Accession to the Throne International Convention Centre.
 The Deputy Permanent Secretary of the Ministry of Social Development and Human Security planned and supervised this event. The impaired person received a certificate of honour as part of the event. As an illustration, a certificate of honour was given to a group that helps disabled persons. Outstanding advocate for those who have impairments. A plaque honouring governmental and private organisations that offer accessibility features for people with disabilities. Companies that encourage hiring people with impairments Evidence of vocational training and the volume of goods produced by people with disabilities. The event will offer general health screenings, dental care, a stage show, raffle prizes, and souvenirs to attendees with impairments.
                                        </p>
                                    </div>
                                    <br></br>
                            
                                    <div className="flex flex-col h-full w-full pt-12">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        รับโล่เกียรติคุณในงานวันคนพิการสากลประจำปี 2565 ณ ศูนย์ประชุมนานาชาติฉลองสิริราชสมบัติครบ 60 ปี มหาวิทยาลัยสงขลานครินทร์
                                        </h2>
                                        <h3 className="text-bold text-xl p-4">วันที่ 2 กุมภาพันธ์ 2556 ณ ศูนย์ประชุมนานาชาติฉลองสิริราชสมบัติครบ 60 ปี มหาวิทยาลัยสงขลานครินทร์
                                        </h3>
                                        <p className="indent-8">กลุ่มบริษัท ยางไทยปักษ์ใต้ จำกัด ประกอบไปด้วย 5 สาขาคือ สุราษฏร์ธานี ทุ่งสง ปัตตานี ยะลา นราธิวาส และ สำนักงานใหญ่ ได้เข้าร่วมการสนับสนุนการจ้างงานคนพิการและเข้ารับโล่เกียรติคุณ ภายใต้ชื่องาน การปฏิรูปสู่การพัฒนาเพื่อคนทั้งมวล: พลังนวัตกรรมสู่โลกที่เข้าถึงได้และเป็นธรรม
เมื่อวันที่พฤหัสบดี ที่ 2 กุมภาพันธ์ 2566 นายณรงค์ฤทธิ์ สงปานและนางสาวชุตินธร พูลสวัสดิ์ เป็นตัวแทนเข้ารับโล่เกียรติคุณ สนับสนุนการจ้างงานคนพิการ ณ ศูนย์ประชุมนานาชาติฉลองสิริราชสมบัติครบ 60 ปี มหาวิทยาลัยสงขลานครินทร์
การจัดงานในครั้งนี้มีรองปลัดกระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์ เป็นประธานในพิธี ภายในงานได้มีการมอบประกาศเกียรติคุณแก่คนพิการตัวอย่าง มอบประกาศเกียรติคุณองค์กรคนพิการตัวอย่าง บุคคลตัวอย่างที่สนับสนุนงานด้านคนพิการ โล่ประกาศเกียรติคุณหน่วยงานภาครัฐและเอกชนตัวอย่างที่จัดสิ่งอำนวยความสะดวกแก่คนพิการ สถานประกอบการที่สนับสนุนงานด้านคนพิการ การสาธิตการฝึกอาชีพและจำนวนผลิตภัณฑ์ฝีมือคนพิการ การตรวจสุขภาพทั่วไป บริการทันตกรรม การแสดงบนเวที และการจับฉลากของขวัญและมอบของที่ระลึกแก่คนพิการที่มาร่วมงาน                              
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-3 w-1/2 pt-16">
                                    {selectedImage ? (
                                            
                                            <div className="absolute top-20 left-0 right-0 bottom-0 bg-white h-full w-full">
                                                            

                                            <Carousel className="absolute top-16 left-0 right-0 buttom-0 bg-gray-800/90 border-4 h-3/4 w-full z-0 rounded-xl p-2"
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
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111816-scaled.jpg?fit=773%2C1030&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-contain"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_110945-scaled.jpg?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_1109390-scaled.jpg?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111027-scaled.jpg?fit=773%2C1030&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_131231-01-scaled.jpeg?fit=773%2C1030&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-contain"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111551-1-scaled.jpg?fit=1030%2C773&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-contain"
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
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111816-scaled.jpg?fit=773%2C1030&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111816-scaled.jpg?fit=773%2C1030&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111027-scaled.jpg?fit=773%2C1030&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111027-scaled.jpg?fit=773%2C1030&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_131231-01-scaled.jpeg?fit=773%2C1030&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_131231-01-scaled.jpeg?fit=773%2C1030&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_110945-scaled.jpg?fit=1030%2C773&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_110945-scaled.jpg?fit=1030%2C773&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_1109390-scaled.jpg?fit=1030%2C773&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_1109390-scaled.jpg?fit=1030%2C773&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111551-1-scaled.jpg?fit=1030%2C773&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111551-1-scaled.jpg?fit=1030%2C773&ssl=1'
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

{/* <div className="grid grid-flow-col-dense grid-cols-2 grid-rows-3  w-1/2">

    <div className="relative overflow-hidden hover:opacity-75 transition p-4 hover:absolute top-0 left-0 right-0 end-10 hover:z-10 hover:bg-gray-100  hover:scale-75">
        <img className="h-auto w-full rounded-lg" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111816-scaled.jpg?fit=773%2C1030&ssl=1" alt=""/>
    </div>

    <div className="relative overflow-hidden hover:opacity-75 transition p-4 hover:absolute top-0 left-0 right-0 end-10 hover:z-10 hover:bg-gray-100  hover:scale-75">
        
        <img className="h-auto w-full rounded-lg" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_110945-scaled.jpg?fit=1030%2C773&ssl=1" alt=""/>
    </div>
    <div className="relative overflow-hidden hover:opacity-75 transition p-4 hover:absolute top-0 left-0 right-0 end-10 hover:z-10 hover:bg-gray-100  hover:scale-75">
        <img className="h-auto w-full rounded-lg" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_1109390-scaled.jpg?fit=1030%2C773&ssl=1" alt=""/>   
    </div>

    <div className="relative overflow-hidden hover:opacity-75 transition p-4 hover:absolute top-0 left-0 right-0 end-10 hover:z-10 hover:bg-gray-100  hover:scale-75">
        <img className="h-auto w-full rounded-lg" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111027-scaled.jpg?fit=773%2C1030&ssl=1" alt=""/>
    </div>

    <div className="relative overflow-hidden hover:opacity-75 transition p-4 hover:absolute top-0 left-0 right-0 end-10 hover:z-10 hover:bg-gray-100  hover:scale-75">
        <img className="h-auto w-full rounded-lg" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_131231-01-scaled.jpeg?fit=773%2C1030&ssl=1" alt=""/>
    </div>

    <div className="relative overflow-hidden hover:opacity-75 transition p-4 hover:absolute top-0 left-0 right-0 end-10 hover:z-10 hover:bg-gray-100  hover:scale-75">
        <img className="h-auto w-full rounded-lg" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/02/20230202_111551-1-scaled.jpg?fit=1030%2C773&ssl=1" alt=""/>
    </div>

</div> */}
