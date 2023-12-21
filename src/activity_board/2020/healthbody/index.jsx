import React, {useState} from 'react';
import { Carousel } from "@material-tailwind/react";

export default function Healthbody(){

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
                    <div className="bg-white h-full w-full text-back text-start pt-32">
                        <div className="container mx-auto flex flex-col justify-center">
                            <h1 className="text-3xl text-green-800 font-sans font-tt-hoves mx-16">
                            HEALTHY BODY
                            </h1>
                            <div className="flex flex-col">
                                
                                    <div className="flex flex-col h-full w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        Hatyai, Hatyai, Songkhla 05 May, 2020
                                        </h2>
                                        
                                    </div>

                                    
                                    
                

                                    <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-2 w-full pt-16">
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
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_0.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_0.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_1.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_2.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                    />
                                                {/* ----------------------1------------ */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_3.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_4.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_2.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_51.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                    />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_65.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                    />
                                                {/* --------------------2-------------- */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_69.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_79.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_89.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                    />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_98.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                    />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_99.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                    />
                                                {/* --------------------3-------------- */}
                                                
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
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_0.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_0.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_0.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_0.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_1.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_1.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_2.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_2.jpg?resize=845%2C684&ssl=1'
                                                    )
                                                }
                                                />
                                        </div>
                                        {/* -----------------------------------1--------------------------------------- */}
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_3.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_3.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_4.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_4.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_2.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_2.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_51.jpg?resize=495%2C400&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_51.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_65.jpg?resize=495%2C400&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_65.jpg?resize=495%2C400&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        {/* -----------------------------------2--------------------------------------- */}
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_69.jpg?resize=495%2C400&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_69.jpg?resize=495%2C400&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_79.jpg?resize=495%2C400&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_79.jpg?resize=495%2C400&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_89.jpg?resize=495%2C400&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_89.jpg?resize=495%2C400&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_98.jpg?resize=495%2C400&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_98.jpg?resize=495%2C400&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_99.jpg?resize=495%2C400&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/CNY-2021_210209_99.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                        </div>
                                        {/* -----------------------------------3--------------------------------------- */}
                                        
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
                                {/* <div className="grid grid-flow-rows-5 grid-cols-5 grid-rows-2 gap-3 pt-12 pb-16">

                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_0.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_0.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_1.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_2.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>
                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_3.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>
                                    
                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_1_4.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>
                                    
                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_2.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_3.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_4.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>
                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_5.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_7.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_6.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_8.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>

                                    <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                        <img className="h-56 w-full" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B9%88%E0%B8%B2-BMI-050520_210419_9.jpg?resize=845%2C684&ssl=1" alt=""/>
                                    </div>

                                </div> */}