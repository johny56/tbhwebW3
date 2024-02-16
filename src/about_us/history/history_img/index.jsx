import React from 'react';

// import img from "../asset/รูปที่ใส่ในปุ่ม+/"

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

// export const image01 = img;

export const images = [
    picture_1,
    picture_2,
    picture_3,
    picture_4,
    picture_5,
    picture_6,
    picture_7,
    picture_8,
    picture_9,
    picture_10,
    picture_11,
    picture_12,
    picture_13,
    picture_14,
    picture_15,
    picture_16,
    picture_17,
    picture_18,
    picture_19,
    picture_20,

    picture_21,
    picture_22,
    picture_23,
    picture_24,
    picture_25,
    picture_26,
    picture_27,
    picture_28,
    picture_29,
    picture_30,
    picture_31,
    picture_32,

    picture_33,
    picture_34,
    picture_35,
    picture_36,
    picture_37,
    picture_38,
]

export default function History_img(){

    return (

        <div>
            <div>
                {/* <div className="bg-cover h-screen bg-[url(https://drive.google.com/uc?export=view&id=1VbqaCvp6OGGFT11eaatz_AqWai8yKYol)]"> */}
                <div className="relative bg-cover h-screen bg-red-200">
                    {/* <div className="absolute h-full w-full">
                        <img className="h-full w-full" src={image01} alt=""/>
                    </div> */}
                    <div className="bg-white h-full w-full text-back text-start pt-12">
                        {/* backbutton */}
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
                        {/* backbutton */}

                        <div className="container mx-auto flex flex-col justify-center">
                            <h1 className="h-full w-full font-bold text-black text-6xl">LEE INN TONG</h1>
                            <p className="h-full w-full font-sans font-tt-hoves text-black text-lg pt-2">- FOUNDER OF TECK BEE HANG -</p>
                            <div className="flex flex-col">
                                
                                
                                <div className="grid grid-flow-rows-5 grid-cols-5 grid-rows-2 gap-3 pt-12 pb-16">

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_1} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_2} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_3} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_4} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_5} alt=""/>
                                </div>
                            {/* line2 */}
                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_6} alt=""/>
                                </div>
                                
                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_7} alt=""/>
                                </div>
                                
                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_8} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_9} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_10} alt=""/>
                                </div>
                            {/* line3 */}
                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_11} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_12} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_13} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_14} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_15} alt=""/>
                                </div>

                            {/* line4 */}
                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_16} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_17} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_18} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_19} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_20} alt=""/>
                                </div>

                                {/* line5 */}
                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_21} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_22} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_23} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_24} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_25} alt=""/>
                                </div>

                            {/* line6 */}
                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_26} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_27} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_28} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_29} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_30} alt=""/>
                                </div>
                                {/* line3 */}
                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_31} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_32} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_33} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_34} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_35} alt=""/>
                                </div>

                            {/* line4 */}
                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_36} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_37} alt=""/>
                                </div>

                                <div className="relative h-56 w-full overflow-hidden hover:opacity-75 transition">
                                    <img className="h-56 w-full" src={picture_38} alt=""/>
                                </div>


                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}