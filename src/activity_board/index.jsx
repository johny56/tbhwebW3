import React, { useState } from 'react';
import Navbar from 'components/navbar';
import { Link } from 'react-router-dom';


const pageData = [
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1R5UA-WR0il_GxollPD_1iKR7Iyp0fv7Z',
            linkUrl: '/Gcg',
            date: '6 กันยายน 2556',
            content: 'เมื่อวันที่ 6 กันยายน 2566 ที่ผ่านมานี้ กรมพัฒนาธุรกิจการค้า เมื่อวันที่ 6 กันยายน 2566 ที่ผ่านมานี้ กรมพัฒนาธุรกิจการค้า เมื่อวันที่ 6 กันยายน 2566 ที่ผ่านมานี้ กรมพัฒนาธุรกิจการค้า เมื่อวันที่ 6 กันยายน 2566 ที่ผ่านมานี้ กรมพัฒนาธุรกิจการค้า',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1uV1p8BvjJ7YCt8aV3LVBoJzkqR7sMrRC',
            linkUrl: '/KaizenAward',
            date: '11 สิงหาคม 2566',
            content: 'ผู้จัดการโรงงานสาขาทุ่งสง คุณสมชาย มโนสถาพร พร้อมทีม . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1mLyMYsN_r8_8DcsQL5pgLwu9LaxZdKe5',
            linkUrl: '/HappyWork',
            date: 'Birthday Gift',
            content: 'ในฐานะองกรณ์ที่ให้ความสำคัญกับความสุขในการทำงานและให้ . . .',
        },
    ],
                            // second line


    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1E0QGiOlxbvNez0fuJ2dmwATSWCyB9YgW',
            linkUrl: '/qcctrain',
            date: '28 มิถุนายน 2556',
            content: 'บริษัทยางไทยปักษ์ใต้ ไม่เพียงแต่ให้ความใส่ใจคุณภาพของ . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1wXiE2q9FDaqVAsb-yUtmiC2irq88TmSY',
            linkUrl: '/songkran',
            date: '12 เมษายน 2556',
            content: 'พนักงานและคณะผู้บริหารทุกคนร่วมสนุกสนานกับกิจกรรมวันขึ้นปีใหม่ . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1hcn58n29VCeGM7IyBMnRAFTL6yoSBBbp',
            linkUrl: '/efforts',
            date: '2 กุมภาพันธ์ 2556',
            content: 'กลุ่มบริษัท ยางไทยปักษ์ใต้ จำกัด ประกอบไปด้วย 5 สาขาคือ . . .',
        },
    ],
    
                            //    ----------------------page2-------------------
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1aQGNHf8NgD-DqlpsJiDNm0PQjm6uB2P5',
            linkUrl: '/newyear23',
            date: '20 มกราคม 2556',
            content:  'กลุ่มบริษัท ยางไทยปักษ์ใต้ จำกัด สำนักงานใหญ่ ฉลองเทศกาลตรุษจีนในวันที่ . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=15OtZ05_KnSZsnbylHV569areZGWTwjVG',
            linkUrl: '/Bigcleaning',
            date: '11 พฤศจิกายน2565',
            content: 'บริษัทยางไทยปักษ์ใต้มีการส่งเสริมให้นำ 5ส มาใช้ โดยมีการจัดการประกวด . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1kzoMY9lRNNNjVOS_zp8oyzwunL5nrJ-T',
            linkUrl: '/thungSong5S',
            date: '2 พฤศจิกายน 2022',
            content: 'บริษัท ยางไทยปักษ์ใต้ จำกัด สาขา ทุ่งสง ได้ผ่านการตรวจจากคณะกรรมการประเมินการเข้าประกวก . . .',
        },
    ],
    
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=13narKpNafHSYxd3_7JCt94t-Esl0XOT2',
            linkUrl: '/bestsupply',
            date: 'Best Supplier',
            content: 'Best Supplier for Quality Performance Award',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1oZumGmDWMQ0McrRNzStnkvC1wNdSvglk',
            linkUrl: '/newyear22',
            date: '28 มกราคม 2565',
            content: 'บริษัท ยางไทยปักษ์ใต้ จำกัด สำนักงานใหญ่ ได้จัดกิจกรรมไหว้ตรุษจีนต้อนรับปีขาล . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=14Ew_4A29zM0qqLEduDmdGpZWwomfC_rd',
            linkUrl: '/thungSong21',
            date: '18 มีนาคม 2021',
            content: 'BITECH Bangna, Bangkok — TBH Thung Song led by manager K. Somchai Manosathaporn . . .',
        },
    ],
    //--------------------page3--------------------------
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1aIPmOxtH0RLnbPIo0i9YAGpRfVXsEofS',
            linkUrl: 'https://example.com/page1',
            date: '24 กุมภาพันธ์ 2021',
            content:  'TECHNICAL SKILLS TRAINING . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1mzRux4q3KiyPOeLgFmY6UTCMkuuKXS4T',
            linkUrl: 'https://example.com/page1',
            date: '9 กุมภาพันธ์ 2021',
            content: 'CHINESE NEW YEAR 2021 . . .',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1XmK_upqXI3wrQgZM9PIFW-xyujYQhY6M',
            linkUrl: 'https://example.com/page1',
            date: '4 กุมภาพันธ์ 2021',
            content: 'LEAN PRODUCTION TRAINING . . .',
        },
    ],
    
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=13eJ90d2JmypI1R3KaVzC2-Kri_wWyLT0',
            linkUrl: 'https://example.com/page1',
            date: '23 ธันวาคม 2020',
            content: 'ISO TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1CAX3bp_nHZ_FciqKPA3MMbsZzP8OTPys',
            linkUrl: 'https://example.com/page1',
            date: '21 ธันวาคม 2020',
            content: 'SOFTSKILL TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1I7Eq5UacdelopFZVdvRIsAYCc9gwFMq9',
            linkUrl: 'https://example.com/page1',
            date: '17 ธันวาคม 2020',
            content: 'NEW YEARS PARTY',
        },
    ],
        //--------------------page 4-----------
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=17ma_TlaEH8VL91YD6-g-U2NPJgT6zfcT',
            linkUrl: 'https://example.com/page1',
            date: '4 ธันวาคม 2020',
            content: 'FIRE ESCAPE TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1947sdUloZpAEIeOtrAxuxsuW0BuxsElW',
            linkUrl: 'https://example.com/page1',
            date: '9 พฤศจิกายน 2020',
            content: 'OFFICE MERRIT',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1eftEZ0OiJLxMhdJIsuUpAp8kNX0t-Gp1',
            linkUrl: 'https://example.com/page1',
            date: '16 ตุลาคม 2020',
            content: 'NR PROPERTY TRAINING',
        },
    ],

    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1nA5u3SUlP7lmVXGIdS-f61z7i3BaOp4h',
            linkUrl: 'https://example.com/page1',
            date: '2 ตุลาคม 2020',
            content: 'ERGONOMIC TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1Y_1cy9LLAZsNqoQwe6o6AdnQv2PrjHRz',
            linkUrl: 'https://example.com/page1',
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
        {/* <nav className="flex flex-row bg-transition fixed top-0 w-full z-20">
            <Navbar />
        </nav> */}
            <div className="h-screen bg-cover bg-[url(https://drive.google.com/uc?export=view&id=18AJQk3aosy7D62EYxaIvwCi6jlVgxaG2)] pt-40">
                <div className="absolute flex flex-col text-white text-9xl font-black pl-96">
                    <p className="pl-48">COMPANY</p>
                    <p className="pl-96">ACTIVITIES</p>
                </div>

                <div className="flex justify-center bg-white h-full w-full text-back mt-96 pt-16">
                    <div className="flex flex-col gap-8">
                    <div className="flex flex-rows-3 gap-16">

                        {pageData[currentPage - 1].map((item, index) => (
                        <div key={index} className="relative h-full w-80 shadow-lg">
                            <Link to={item.linkUrl}>
                                <img className="h-56 w-80" src={item.imageUrl} alt="" />
                            </Link>
                            <div className="flex flex-col h-auto w-auto bg-white flex items-start justify-start transform pt-2 pl-4">
                            <div className="bg-green-800 h-8 w-40 pt-1 flex justify-center">
                                <h5 className="text-base font-bold tracking-tight text-white dark:text-white">{item.date}</h5>
                            </div>
                            <div className="whitespace-normal w-3/4 h-auto py-2">
                                <p className="line-clamp-2" >{item.content}</p>
                            </div>
                            </div>
                        </div>
                        ))}

                    </div>

                    <div className="flex flex-cols-3 gap-16">

                            {pageData[currentPage - 0].map((item, index) => (
                            <div key={index} className="relative h-full w-80 shadow-lg">
                                <Link to={item.linkUrl}>
                                    <img className="h-56 w-80" src={item.imageUrl} alt="" />
                                </Link>
                                <div className="flex flex-col h-auto w-auto bg-white flex items-start justify-start transform pt-2 pl-4">
                                <div className="bg-green-800 h-8 w-40 pt-1 flex justify-center">
                                    <h5 className="text-base font-bold tracking-tight text-white dark:text-white">{item.date}</h5>
                                </div>
                                <div className="whitespace-normal w-3/4 h-auto py-2">
                                <p className="line-clamp-2" >{item.content}</p>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>

                    </div>

                </div>
                    
            <div className="absolute h-12 w-screen end-0 flex justify-center p-4 pt-36 pb-12 mt-16">
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
