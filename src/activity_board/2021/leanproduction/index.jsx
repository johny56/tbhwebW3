import React, {useState} from 'react';
import { Carousel } from "@material-tailwind/react";

export default function Leanproduction(){

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
                            <h1 className="text-3xl text-green-800 font-sans font-tt-hoves mx-16">
                            LEAN PRODUCTION TRAINING
                            </h1>
                            <div className="flex flex-col">
                                
                                    <div className="flex flex-col h-full w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        Hatyai, Songkhla 04 February, 21
                                        </h2>
                                        
                                    </div>
                                    <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-2 w-full pt-16">
                                    {selectedImage ? (
                                        
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-transition h-full w-full">
                                                            

                                            <Carousel className="fixed item-center top-16 left-0 right-0 buttom-0 bg-gray-800/90 h-full w-full z-30"
                                                    navigation={({ setActiveIndex, activeIndex, length }) => (

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
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/1612515306724.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                {/* <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204114853-scaled.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover"
                                                /> */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204114907-scaled.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204114934-scaled.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                {/* ----------------------1------------ */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204115120-scaled.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204115142-scaled.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210205113349-scaled.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116923501488122.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                {/* --------------------2-------------- */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210205131748-scaled.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210219152938-scaled.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116923501488122.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                {/* --------------------3-------------- */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116925428492122.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_200380931316712.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_200384769078558.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116933966910738.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                {/* ------------------4---------------- */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_123790503826531.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_215010368686661.jpg?fit=1030%2C772&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_123796723252224.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_123797660300917.jpg?resize=845%2C684&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                {/* ------------------5---------------- */}
                                            </Carousel>   
                                            </div>
                                            
                                            ) : (
                                        <>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/1612515306724.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/1612515306724.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        {/* <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204114853-scaled.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204114853-scaled.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div> */}
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204114907-scaled.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204114907-scaled.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204114934-scaled.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204114934-scaled.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        {/* -----------------------------------1--------------------------------------- */}
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204115120-scaled.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204115120-scaled.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204115142-scaled.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210204115142-scaled.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210205113349-scaled.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210205113349-scaled.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116923501488122.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116923501488122.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        {/* -----------------------------------2--------------------------------------- */}
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210205131748-scaled.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210205131748-scaled.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210219152938-scaled.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20210219152938-scaled.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116923501488122.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116923501488122.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116923501488122.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116923501488122.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        {/* -----------------------------------3--------------------------------------- */}
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116925428492122.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116925428492122.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_200380931316712.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_200380931316712.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_200384769078558.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_200384769078558.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116933966910738.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116933966910738.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        {/* -----------------------------------4--------------------------------------- */}
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116925428492122.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116925428492122.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_200380931316712.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_200380931316712.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_200384769078558.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_200384769078558.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                            <img
                                            className="h-auto max-w-full rounded-lg"
                                            src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116933966910738.jpg?resize=845%2C684&ssl=1"
                                            alt=""
                                            onClick={() =>
                                                handleImageClick(
                                                'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/line_116933966910738.jpg?resize=845%2C684&ssl=1'
                                                )
                                            }
                                            />
                                        </div>
                                        {/* -----------------------------------5--------------------------------------- */}
                                        
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