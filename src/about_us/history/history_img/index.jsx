import React, { useState }  from 'react';
// import data from "./data.json";
// import { Carousel } from 'react';

import picture_1 from "../asset/รูปที่ใส่ในปุ่ม+/Lee01.jpg";
import picture_2 from "../asset/รูปที่ใส่ในปุ่ม+/Lee02.jpg";
import picture_3 from "../asset/รูปที่ใส่ในปุ่ม+/Lee03.png";
import picture_4 from "../asset/รูปที่ใส่ในปุ่ม+/Lee04.jpg";
import picture_5 from "../asset/รูปที่ใส่ในปุ่ม+/Lee06.jpg";
import picture_6 from "../asset/รูปที่ใส่ในปุ่ม+/Lee07.jpg";
import picture_7 from "../asset/รูปที่ใส่ในปุ่ม+/Lee08.jpg";
import picture_8 from "../asset/รูปที่ใส่ในปุ่ม+/Lee09.jpg";
import picture_9 from "../asset/รูปที่ใส่ในปุ่ม+/Lee10.jpeg";
import picture_10 from "../asset/รูปที่ใส่ในปุ่ม+/Lee11.jpg";
import picture_11 from "../asset/รูปที่ใส่ในปุ่ม+/Lee12.jpg";

import picture_12 from "../asset/รูปที่ใส่ในปุ่ม+/1000 (1).webp";
import picture_13 from "../asset/รูปที่ใส่ในปุ่ม+/1000 (2).webp";
import picture_14 from "../asset/รูปที่ใส่ในปุ่ม+/1000 (3).webp";
import picture_15 from "../asset/รูปที่ใส่ในปุ่ม+/1000 (4).webp";
import picture_16 from "../asset/รูปที่ใส่ในปุ่ม+/1000 (5).webp";
import picture_17 from "../asset/รูปที่ใส่ในปุ่ม+/1000.webp";
import picture_18 from "../asset/รูปที่ใส่ในปุ่ม+/101-1-1030x696.jpg";
import picture_19 from "../asset/รูปที่ใส่ในปุ่ม+/102-1-1030x693.jpg";
import picture_20 from "../asset/รูปที่ใส่ในปุ่ม+/104-1-1030x696.jpg";

import picture_21 from "../asset/รูปที่ใส่ในปุ่ม+/100-2-1030x693.jpg";
import picture_22 from "../asset/รูปที่ใส่ในปุ่ม+/106-1-1030x699.jpg";
import picture_23 from "../asset/รูปที่ใส่ในปุ่ม+/109-1-1030x693.jpg";
import picture_24 from "../asset/รูปที่ใส่ในปุ่ม+/114-1-1030x693.jpg";
import picture_25 from "../asset/รูปที่ใส่ในปุ่ม+/202-1-1030x738.jpg";
import picture_26 from "../asset/รูปที่ใส่ในปุ่ม+/203-1-1030x741.jpg";
import picture_27 from "../asset/รูปที่ใส่ในปุ่ม+/206-1-1030x747.jpg";
import picture_28 from "../asset/รูปที่ใส่ในปุ่ม+/207-1-1030x741.jpg";
import picture_29 from "../asset/รูปที่ใส่ในปุ่ม+/210-1-1030x736.jpg";
import picture_30 from "../asset/รูปที่ใส่ในปุ่ม+/211-1-1030x734.jpg";
import picture_31 from "../asset/รูปที่ใส่ในปุ่ม+/212-1-1030x736.jpg";
import picture_32 from "../asset/รูปที่ใส่ในปุ่ม+/214-1-1030x736.jpg";

import picture_33 from "../asset/รูปที่ใส่ในปุ่ม+/6085093_f4939feccb962096e81406.jpg";
import picture_34 from "../asset/รูปที่ใส่ในปุ่ม+/6085093_f4939feccb962096e81f07.jpg";
import picture_35 from "../asset/รูปที่ใส่ในปุ่ม+/6085093_f4939feccb962096e82d08.jpg";
import picture_36 from "../asset/รูปที่ใส่ในปุ่ม+/6085093_f4939feccb962096e83d09.jpg";
import picture_37 from "../asset/รูปที่ใส่ในปุ่ม+/download (1).jpeg";
import picture_38 from "../asset/รูปที่ใส่ในปุ่ม+/20191104_101022-1030x579.jpg";
// import { image01 } from '..';

// export const image01 = img;

// import img from "../asset/รูปที่ใส่ในปุ่ม+/"

    const History_img = () =>{

        const [selectedImage, setSelectedImage] = useState("1");
        const [isCardVisible, setIsCardVisible] = useState(false);
      
        const toggleCard = (image) => {
          setIsCardVisible(!isCardVisible);
          setSelectedImage(image);
        };

        const data = ["1","2","3","4","5","6","7","8","9","10",
                        "11","12","13","14","15","16","17","18","19",
                        "20","21","22","23","24","25","26","27","28",
                        "29","30","31","32","33","34","35","36","37",
                        "38"
        ];
      
        const handleImageLeft = () => {
            var index=selectedImage;
            var i=0;
            while(data[i] != index){
                data[i] = data[i];
                i++;
            }
            setSelectedImage(data[i-1]);
          
        };

        const handleImageRight = () => {
            var index=selectedImage;
            var i=0;
            while(data[i] != index){
                data[i] = data[i];
                i++;
            }
            setSelectedImage(data[i+1]);
          
        };
    
        return (


            <div className="relative bg-cover h-screen bg-red-200">

                
                {isCardVisible && (
                    <div className="fixed auto-scroll h-full w-full bg-gray-500/90 z-20 mt-24">
                        <button
                            onClick={toggleCard}
                            type="button"
                            className="absolute right-10 top-10 h-12 w-12 bg-red-600 rounded-lg shadow-lg text-white text-4xl font-extrabold border-2 pb-2 hover:bg-red-700"
                            >x
                        </button>
                        
                        <button
                        
                            onClick={handleImageLeft}
                            type="button"
                            className="absolute left-64 top-72 h-32 w-12 pb-2 z-20"
                            >
                            <svg class="h-16 w-16 text-white bg-gray-800 rounded-full hover:bg-green-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
                            </svg>

                        </button>
                        <button
                            onClick={handleImageRight}
                            type="button"
                            className="absolute right-64 top-72 h-32 w-12 pb-2 z-20"
                            >
                            <svg class="h-16 w-16 text-white bg-gray-800 rounded-full hover:bg-green-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </button>
                        <div className='relative -top-5 flex justify-center m-20 h-3/4 w-auto'>

                            {selectedImage === "1" && (
                                <img className="h-full w-auto border-4" src={picture_1} alt=""/>
                            )}
                            {selectedImage === "2" && (
                                <img className="h-full w-auto border-4" src={picture_2} alt=""/>
                            )}
                            {selectedImage === "3" && (
                                <img className="h-full w-auto border-4" src={picture_3} alt=""/>
                            )}
                            {selectedImage === "4" && (
                                <img className="h-full w-auto border-4" src={picture_4} alt=""/>
                            )}
                            {selectedImage === "5" && (
                                <img className="h-full w-auto border-4" src={picture_5} alt=""/>
                            )}
                            {selectedImage === "6" && (
                                <img className="h-full w-auto border-4" src={picture_6} alt=""/>
                            )}
                            {selectedImage === "7" && (
                                <img className="h-full w-auto border-4" src={picture_7} alt=""/>
                            )}
                            {selectedImage === "8" && (
                                <img className="h-full w-auto border-4" src={picture_8} alt=""/>
                            )}
                            {selectedImage === "9" && (
                                <img className="h-full w-auto border-4" src={picture_9} alt=""/>
                            )}
                            {selectedImage === "10" && (
                                <img className="h-full w-auto border-4" src={picture_10} alt=""/>
                            )}
                            {selectedImage === "11" && (
                                <img className="h-full w-auto border-4" src={picture_11} alt=""/>
                            )}
                            {selectedImage === "12" && (
                                <img className="h-full w-auto border-4" src={picture_12} alt=""/>
                            )}
                            {selectedImage === "13" && (
                                <img className="h-full w-auto border-4" src={picture_13} alt=""/>
                            )}
                            {selectedImage === "14" && (
                                <img className="h-full w-auto border-4" src={picture_14} alt=""/>
                            )}
                            {selectedImage === "15" && (
                                <img className="h-full w-auto border-4" src={picture_15} alt=""/>
                            )}
                            {selectedImage === "16" && (
                                <img className="h-full w-auto border-4" src={picture_16} alt=""/>
                            )}
                            {selectedImage === "17" && (
                                <img className="h-full w-auto border-4" src={picture_17} alt=""/>
                            )}
                            {selectedImage === "18" && (
                                <img className="h-full w-auto border-4" src={picture_18} alt=""/>
                            )}
                            {selectedImage === "19" && (
                                <img className="h-full w-auto border-4" src={picture_19} alt=""/>
                            )}
                            {selectedImage === "20" && (
                                <img className="h-full w-auto border-4" src={picture_20} alt=""/>
                            )}
                            {selectedImage === "21" && (
                                <img className="h-full w-auto border-4" src={picture_21} alt=""/>
                            )}
                            {selectedImage === "22" && (
                                <img className="h-full w-auto border-4" src={picture_22} alt=""/>
                            )}
                            {selectedImage === "23" && (
                                <img className="h-full w-auto border-4" src={picture_23} alt=""/>
                            )}
                            {selectedImage === "24" && (
                                <img className="h-full w-auto border-4" src={picture_24} alt=""/>
                            )}
                            {selectedImage === "25" && (
                                <img className="h-full w-auto border-4" src={picture_25} alt=""/>
                            )}
                            {selectedImage === "26" && (
                                <img className="h-full w-auto border-4" src={picture_26} alt=""/>
                            )}
                            {selectedImage === "27" && (
                                <img className="h-full w-auto border-4" src={picture_27} alt=""/>
                            )}
                            {selectedImage === "28" && (
                                <img className="h-full w-auto border-4" src={picture_28} alt=""/>
                            )}
                            {selectedImage === "29" && (
                                <img className="h-full w-auto border-4" src={picture_29} alt=""/>
                            )}
                            {selectedImage === "30" && (
                                <img className="h-full w-auto border-4" src={picture_30} alt=""/>
                            )}
                            {selectedImage === "31" && (
                                <img className="h-full w-auto border-4" src={picture_31} alt=""/>
                            )}
                            {selectedImage === "32" && (
                                <img className="h-full w-auto border-4" src={picture_32} alt=""/>
                            )}
                            {selectedImage === "33" && (
                                <img className="h-full w-auto border-4" src={picture_33} alt=""/>
                            )}
                            {selectedImage === "34" && (
                                <img className="h-full w-auto border-4" src={picture_34} alt=""/>
                            )}
                            {selectedImage === "35" && (
                                <img className="h-full w-auto border-4" src={picture_35} alt=""/>
                            )}
                            {selectedImage === "36" && (
                                <img className="h-full w-auto border-4" src={picture_36} alt=""/>
                            )}
                            {selectedImage === "37" && (
                                <img className="h-full w-auto border-4" src={picture_37} alt=""/>
                            )}
                            {selectedImage === "38" && (
                                <img className="h-full w-auto border-4" src={picture_38} alt=""/>
                            )}


                        </div>
                     
                    </div>
                )}

                <div className="bg-white h-full w-full text-back text-start pt-12">
                    <div className="flex justify-end pr-12 pt-20">
                        <a href="/history"
                            className="inline-flex items-center border border-green-500 px-3 py-1.5 rounded-md text-green-700 hover:bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                                </path>
                            </svg>
                            <span className="ml-1 font-bold text-lg text-green-700">Back</span>
                        </a>
                    </div>
        
                    <div className="container mx-auto flex flex-col justify-center">
                        <h1 className="h-full w-full font-bold text-black text-6xl">LEE INN TONG</h1>
                        <p className="h-full w-full font-sans font-tt-hoves text-black text-lg pt-2">- FOUNDER OF TECK BEE HANG -</p>
                        <div className="flex flex-col">
                            
                        {/* <button
                            onClick={toggleCard}
                            type="button"
                            className="p-3 h-12 w-36 bg-blue-300 rounded-lg shadow-lg text-gray-800 text-2xl font-bold"
                            >
                        </button> */}
                            
                            <div className="grid grid-flow-rows-5 grid-cols-6 grid-rows-2 gap-3 pt-12 pb-16">
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition" >
                                <img className="h-56 w-full" src={picture_1} alt="" onClick={()=>toggleCard("1")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_2} alt="" onClick={()=>toggleCard("2")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_3} alt="" onClick={()=>toggleCard("3")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_4} alt="" onClick={()=>toggleCard("4")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_5} alt="" onClick={()=>toggleCard("5")}/>
                            </div>
                        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_6} alt="" onClick={()=>toggleCard("6")}/>
                            </div>
                            
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_7} alt="" onClick={()=>toggleCard("7")}/>
                            </div>
                            
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_8} alt="" onClick={()=>toggleCard("8")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_9} alt="" onClick={()=>toggleCard("9")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_10} alt="" onClick={()=>toggleCard("10")}/>
                            </div>
                        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_11} alt="" onClick={()=>toggleCard("11")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_12} alt="" onClick={()=>toggleCard("12")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_13} alt="" onClick={()=>toggleCard("13")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_14} alt="" onClick={()=>toggleCard("14")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_15} alt="" onClick={()=>toggleCard("15")}/>
                            </div>
        
                        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_16} alt="" onClick={()=>toggleCard("16")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_17} alt="" onClick={()=>toggleCard("17")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_18} alt="" onClick={()=>toggleCard("18")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_19} alt="" onClick={()=>toggleCard("19")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_20} alt="" onClick={()=>toggleCard("20")}/>
                            </div>
        
                            
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_21} alt="" onClick={()=>toggleCard("21")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_22} alt="" onClick={()=>toggleCard("22")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_23} alt="" onClick={()=>toggleCard("23")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_24} alt="" onClick={()=>toggleCard("24")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_25} alt="" onClick={()=>toggleCard("25")}/>
                            </div>
        
                    
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_26} alt="" onClick={()=>toggleCard("26")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_27} alt="" onClick={()=>toggleCard("27")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_28} alt="" onClick={()=>toggleCard("28")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                <img className="h-56 w-full" src={picture_29} alt="" onClick={()=>toggleCard("29")}/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition" onClick={()=>toggleCard("30")}>
                                <img className="h-56 w-full" src={picture_30} alt=""/>
                            </div>
                
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition" onClick={()=>toggleCard("31")}>
                                <img className="h-56 w-full" src={picture_31} alt=""/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition" onClick={()=>toggleCard("32")}>
                                <img className="h-56 w-full" src={picture_32} alt=""/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition" onClick={()=>toggleCard("33")}>
                                <img className="h-56 w-full" src={picture_33} alt=""/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition" onClick={()=>toggleCard("34")}>
                                <img className="h-56 w-full" src={picture_34} alt=""/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition" onClick={()=>toggleCard("35")}>
                                <img className="h-56 w-full" src={picture_35} alt=""/>
                            </div>
        
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition" onClick={()=>toggleCard("36")}>
                                <img className="h-56 w-full" src={picture_36} alt=""/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition" onClick={()=>toggleCard("37")}>
                                <img className="h-56 w-full" src={picture_37} alt=""/>
                            </div>
        
                            <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition" onClick={()=>toggleCard("38")}>
                                <img className="h-56 w-full" src={picture_38} alt=""/>
                            </div>
        
        
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        );
        
}
    
export default History_img;
