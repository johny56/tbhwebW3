import React, { useState } from 'react';
import Navbar from 'components/navbar';

const pageData = [
    [
        {
        imageUrl: 'https://drive.google.com/uc?export=view&id=1R5UA-WR0il_GxollPD_1iKR7Iyp0fv7Z',
        date: '6 กันยายน 2556',
        content: 'เมื่อวันที่ 6 กันยายน 2566 ที่ผ่านมานี้ กรมพัฒนาธุรกิจการค้า . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1uV1p8BvjJ7YCt8aV3LVBoJzkqR7sMrRC',
            date: '11 สิงหาคม 2566',
            content: 'ผู้จัดการโรงงานสาขาทุ่งสง คุณสมชาย มโนสถาพร พร้อมทีม . . .',
        },
        {
        imageUrl: 'https://drive.google.com/uc?export=view&id=1mLyMYsN_r8_8DcsQL5pgLwu9LaxZdKe5',
        date: 'Employees’ Birthday Gift',
        content: 'ในฐานะองกรณ์ที่ให้ความสำคัญกับความสุขในการทำงานและให้ . . .',
        },
    ],
                            // second line


    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1E0QGiOlxbvNez0fuJ2dmwATSWCyB9YgW',
            date: '28 มิถุนายน 2556',
            content: 'บริษัทยางไทยปักษ์ใต้ ไม่เพียงแต่ให้ความใส่ใจคุณภาพของ . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1wXiE2q9FDaqVAsb-yUtmiC2irq88TmSY',
            date: '12 เมษายน 2556',
            content: 'พนักงานและคณะผู้บริหารทุกคนร่วมสนุกสนานกับกิจกรรมวันขึ้นปีใหม่ . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1hcn58n29VCeGM7IyBMnRAFTL6yoSBBbp',
            date: '2 กุมภาพันธ์ 2556',
            content: 'กลุ่มบริษัท ยางไทยปักษ์ใต้ จำกัด ประกอบไปด้วย 5 สาขาคือ . . .',
        },
    ],
    
                            //    ----------------------page2-------------------
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1aQGNHf8NgD-DqlpsJiDNm0PQjm6uB2P5',
            date: '20 มกราคม 2556',
            content:  'กลุ่มบริษัท ยางไทยปักษ์ใต้ จำกัด สำนักงานใหญ่ ฉลองเทศกาลตรุษจีนในวันที่ . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=15OtZ05_KnSZsnbylHV569areZGWTwjVG',
            date: '11 พฤศจิกายน 2565',
            content: 'บริษัทยางไทยปักษ์ใต้มีการส่งเสริมให้นำ 5ส มาใช้ โดยมีการจัดการประกวด . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1kzoMY9lRNNNjVOS_zp8oyzwunL5nrJ-T',
            date: '2-3 พฤศจิกายน  2022',
            content: 'บริษัท ยางไทยปักษ์ใต้ จำกัด สาขา ทุ่งสง ได้ผ่านการตรวจจากคณะกรรมการประเมินการเข้าประกวก . . .',
        },
    ],
    
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=13narKpNafHSYxd3_7JCt94t-Esl0XOT2',
            date: 'Best Supplier',
            content: 'Best Supplier for Quality Performance Award',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1oZumGmDWMQ0McrRNzStnkvC1wNdSvglk',
            date: '28 มกราคม 2565',
            content: 'บริษัท ยางไทยปักษ์ใต้ จำกัด สำนักงานใหญ่ ได้จัดกิจกรรมไหว้ตรุษจีนต้อนรับปีขาล . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=14Ew_4A29zM0qqLEduDmdGpZWwomfC_rd',
            date: '18 มีนาคม 2021',
            content: 'BITECH Bangna, Bangkok — TBH Thung Song led by manager K. Somchai Manosathaporn receives 5S Silver Award . . .',
        },
    ],
    //--------------------page3--------------------------
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1aIPmOxtH0RLnbPIo0i9YAGpRfVXsEofS',
            date: '24 กุมภาพันธ์ 2021',
            content:  'TECHNICAL SKILLS TRAINING . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1mzRux4q3KiyPOeLgFmY6UTCMkuuKXS4T',
            date: '9 กุมภาพันธ์ 2021',
            content: 'CHINESE NEW YEAR 2021 . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1XmK_upqXI3wrQgZM9PIFW-xyujYQhY6M',
            date: '4 กุมภาพันธ์ 2021',
            content: 'LEAN PRODUCTION TRAINING . . .',
        },
    ],
    
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=13eJ90d2JmypI1R3KaVzC2-Kri_wWyLT0',
            date: '23 ธันวาคม 2020',
            content: 'ISO TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1CAX3bp_nHZ_FciqKPA3MMbsZzP8OTPys',
            date: '21 ธันวาคม 2020',
            content: 'SOFTSKILL TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1I7Eq5UacdelopFZVdvRIsAYCc9gwFMq9',
            date: '17 ธันวาคม 2020',
            content: 'NEW YEARS PARTY',
        },
    ],
        //--------------------page 4-----------
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=17ma_TlaEH8VL91YD6-g-U2NPJgT6zfcT',
            date: '4 ธันวาคม 2020',
            content: 'FIRE ESCAPE TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1947sdUloZpAEIeOtrAxuxsuW0BuxsElW',
            date: '9 พฤศจิกายน 2020',
            content: 'OFFICE MERRIT',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1eftEZ0OiJLxMhdJIsuUpAp8kNX0t-Gp1',
            date: '16 ตุลาคม 2020',
            content: 'NR PROPERTY TRAINING',
        },
    ],

    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1nA5u3SUlP7lmVXGIdS-f61z7i3BaOp4h',
            date: '2 ตุลาคม 2020',
            content: 'ERGONOMIC TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1Y_1cy9LLAZsNqoQwe6o6AdnQv2PrjHRz',
            date: '5 พฤษภาคม 2020',
            content: 'HEALTHY BODY',
        },
    ],
    [
        
    ],
    
    
];

export default function ActivityBoard() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    console.log(currentPage);
    setCurrentPage(page);
    if(currentPage > 6)setCurrentPage(1);
  };

  return (
    <div>
      <nav className="flex flex-row bg-transition fixed top-0 w-full z-20">
                <Navbar />
            </nav>
            <div className="h-screen bg-cover bg-[url(https://drive.google.com/uc?export=view&id=18AJQk3aosy7D62EYxaIvwCi6jlVgxaG2)] pt-28">
                <div className="absolute flex flex-col text-white text-9xl font-black pl-96">
                    <p className="pl-48">COMPANY</p>
                    <p className="pl-96">ACTIVITIES</p>
                </div>

                <div className="flex justify-center bg-white h-full w-full text-back mt-96 pt-16">
                    <div className="flex flex-col gap-8">
                    <div className="flex flex-rows-3 gap-16">

                        {pageData[currentPage - 1].map((item, index) => (
                        <div key={index} className="relative h-full w-80 shadow-lg">
                            <img className="h-56 w-80" src={item.imageUrl} alt="" />
                            <div className="flex flex-col h-auto w-auto bg-white flex items-start justify-start transform pt-2 pl-4">
                            <div className="bg-green-800 h-8 w-36 pt-1 pl-2">
                                <h5 className="text-base font-bold tracking-tight text-white dark:text-white">{item.date}</h5>
                            </div>
                            <div className="whitespace-normal w-3/4 h-auto">
                                <p className="text-base/6 pt-2 ml-2 pb-2 text-black dark:text-gray-400">{item.content}</p>
                            </div>
                            </div>
                        </div>
                        ))}

                    </div>

                    <div className="flex flex-cols-3 gap-16">

                            {pageData[currentPage - 0].map((item, index) => (
                            <div key={index} className="relative h-full w-80 shadow-lg">
                                <img className="h-56 w-80" src={item.imageUrl} alt="" />
                                <div className="flex flex-col h-auto w-auto bg-white flex items-start justify-start transform pt-2 pl-4">
                                <div className="bg-green-800 h-8 w-36 pt-1 pl-2">
                                    <h5 className="text-base font-bold tracking-tight text-white dark:text-white">{item.date}</h5>
                                </div>
                                <div className="whitespace-normal w-3/4 h-auto">
                                    <p className="text-base/6 pt-2 ml-2 pb-2 text-black dark:text-gray-400">{item.content}</p>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>

                    </div>

                </div>
                    
            <div className="absolute h-12 w-screen end-0 flex justify-center p-4 ">
                <ul className="list-style-none flex">
                <li>
                                    <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    className={`relative block rounded bg-transparent px-3 text-sm text-neutral-600 transition-all duration-300 ${
                                        currentPage === 1 ? 'pointer-events-none text-neutral-300' : 'hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'
                                    }`}
                                    >
                                    &laquo;
                                    </button>
                                </li>
                                {[1, 2, 3, '...',].map((page) => (
                                    <li key={page}>
                                    <button
                                        onClick={() => handlePageChange(page)}
                                        className={`relative block rounded bg-transparent px-3 text-sm text-neutral-600 transition-all duration-300 ${
                                        currentPage === page ? 'bg-neutral-100 dark:text-white dark:bg-neutral-700' : 'hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                    </li>
                                ))}
                                <li>
                                    <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    className={`relative block rounded bg-transparent px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white`}
                                    >
                                    &raquo;
                                    </button>
                                </li>
                </ul>
            </div>

        
        </div>                            
    </div>
  );
}
