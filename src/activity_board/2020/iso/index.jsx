import React, {useState} from 'react';
import { Carousel } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Isotrainning(){

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
                <div className="bg-cover h-screen">
                {/* bg-[url(https://drive.google.com/uc?export=view&id=1VbqaCvp6OGGFT11eaatz_AqWai8yKYol)] */}
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
                            ISO TRAINING
                            </h1>
                            <div className="flex flex-col">
                                
                                    <div className="flex flex-col h-full w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        Hatyai, Songkhla 23 December, 2020
                                        </h2>
                                        
                                    </div>

                                    <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-2 w-full pt-16">
                                    {selectedImage ? (
                                        
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-transition h-full w-full">
                                                            

                                            <Carousel className="fixed top-16 left-0 right-0 buttom-0 bg-gray-800/90 h-full w-full z-20 item-center"
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

                                                        <div className="fixed bottom-4 left-2/4 z-30 flex -translate-x-2/4 gap-3">
                                                        
                                                        {new Array(length).fill("").map((_, i) => (
                                                            <span
                                                            key={i}
                                                            className={`block h-2.5 border-2 cursor-pointer rounded-2xl transition-all content-[''] item-center ${
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
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208092239-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208102350-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208103750-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208111833-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                {/* ----------------------1------------ */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208111914-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208132824-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75" 
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208135350-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101628-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                {/* --------------------2-------------- */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101646-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101652-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101657-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209135309-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201222144230-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-72 h-full w-2/3 object-cover scale-75"
                                                />
                                                {/* ----------------------3------------ */}
                                                </Carousel> 
                                                </div>
                                                
                                                ) : (
                                            <>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208092239-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                        'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208092239-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208102350-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208102350-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208103750-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208103750-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208111833-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208111833-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            {/* -----------------------------------1--------------------------------------- */}
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208111914-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208111914-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208132824-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208132824-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208135350-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201208135350-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101628-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101628-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            {/* -----------------------------------2--------------------------------------- */}
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101646-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101646-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101652-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101652-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101657-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209101657-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209135309-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201209135309-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201222144230-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201222144230-scaled.jpg?resize=495%2C400&ssl=1'
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