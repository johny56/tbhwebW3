import React, {useState} from 'react';
import { Carousel } from "@material-tailwind/react";

export default function Ergonomic(){

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
                            ERGONOMIC TRAINING
                            </h1>
                            <div className="flex flex-col">
                                
                                    <div className="flex flex-col h-full w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                        02 Oct, 20 TBH Head Office
                                        </h2>
                                        
                                    </div>
                                    <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-2 w-full pt-16">
                                    {selectedImage ? (
                                        
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-transition h-full w-full">
                                                            

                                            <Carousel className="absolute top-40 left-0 right-0 buttom-0 bg-gray-800/90 border-4 h-3/4 w-full z-0 rounded-xl p-2"
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
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/1601629093393.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002141819-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002141842-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002141911-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                {/* ----------------------1------------ */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002142719-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002145340-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002145704-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002152049-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
                                                />
                                                {/* --------------------2-------------- */}
                                                <img
                                                    src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002152314-scaled.jpg?resize=495%2C400&ssl=1"
                                                    alt="image 1"
                                                    className="ml-80 h-full w-2/3 object-cover"
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
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/1601629093393.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                        'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/1601629093393.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002141819-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002141819-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002141842-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002141842-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002141911-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002141911-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            {/* -----------------------------------1--------------------------------------- */}
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002142719-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002142719-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002145340-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002145340-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002145704-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002145704-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002152049-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002152049-scaled.jpg?resize=495%2C400&ssl=1'
                                                    )
                                                }
                                                />
                                            </div>
                                            {/* -----------------------------------2--------------------------------------- */}
                                            <div className="relative overflow-hidden hover:opacity-75 transition p-4">
                                                <img
                                                className="h-auto max-w-full rounded-lg"
                                                src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002152314-scaled.jpg?resize=495%2C400&ssl=1"
                                                alt=""
                                                onClick={() =>
                                                    handleImageClick(
                                                    'https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2021/04/IMG20201002152314-scaled.jpg?resize=495%2C400&ssl=1'
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