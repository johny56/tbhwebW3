import React, { useState } from 'react';
import Navbar from 'components/navbar';
import { Link } from 'react-router-dom';


const pageData = [
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1R5UA-WR0il_GxollPD_1iKR7Iyp0fv7Z',
            linkUrl: '/Gcg',
            date: '6 September 2023',
            content: 'The Department of Business Development, Ministry of Commerce on September 6th, 2023, conducted a ceremony to honor the 2023 recipients of the Given Award for Good Corporate Governance Standards.Teck Bee Hang Co., Ltd. has been awarded and certified a renowned “Good Corporate Governance Standards 2023” from the Department of Business Development, Ministry of Commerce.',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1uV1p8BvjJ7YCt8aV3LVBoJzkqR7sMrRC',
            linkUrl: '/KaizenAward',
            date: '11 August 2023',
            content: 'Mr. Somchai Manosathaporn and his team won the gold medal in the Automatic Kaizen category of the THAILAND KAIZEN AWARD 2023 competition organized by the Technology Promotion Association (Thai-Japanese) by presenting the work “Auto Feed Transverser” under the slogan “Kaizen Ideas, generates inventions, and promotes innovation.”The Management team at Teck Bee Hang expects each staff member to contribute innovative ideas by developing personally and continuously enhancing the organization.',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1mLyMYsN_r8_8DcsQL5pgLwu9LaxZdKe5',
            linkUrl: '/HappyWork',
            date: 'Birthday Gift',
            content: 'Sincere to say, as a happy workplace, we have always valued the diligent work of our team.We aspire to fulfill a small role in their birthday anniversary celebration.',
        },
    ],
                            // second line
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1E0QGiOlxbvNez0fuJ2dmwATSWCyB9YgW',
            linkUrl: '/qcctrain',
            date: '28 June 2023',
            content: 'We continue to reskill and upskill our employees. This year, we are expanding and educating the entire organization on the QCC (Quality Control Circle) program. We are committed to continuous service and product improvement based on employee feedback.',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1wXiE2q9FDaqVAsb-yUtmiC2irq88TmSY',
            linkUrl: '/songkran',
            date: '12 April 2023',
            content: 'All employees and the management team enjoyed in-house Thai new year activities by showering and blessing the water for the new year.',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1hcn58n29VCeGM7IyBMnRAFTL6yoSBBbp',
            linkUrl: '/efforts',
            date: '2 February 2023',
            content: 'On February 2, 2023, representatives Mr. Narongrit Songpan and Ms. Chutinthorn Poolsawat received the prize plaque.',
        },
    ],
    
                            //    ----------------------page2-------------------
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1aQGNHf8NgD-DqlpsJiDNm0PQjm6uB2P5',
            linkUrl: '/newyear23',
            date: '20 January 2023',
            content:  'On Friday, January 20, 2023, led by Chairman Mr. Lee Keng Seng, head office management, branch management,and Teck Bee Hang Co.,',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=15OtZ05_KnSZsnbylHV569areZGWTwjVG',
            linkUrl: '/Bigcleaning',
            date: '11 November 2022',
            content: 'Teck Bee Hang Co., Ltd. encourages employees to adopt 5S as the company’s guiding principle by organising an annual 5S competition. Employees at the head office join',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1kzoMY9lRNNNjVOS_zp8oyzwunL5nrJ-T',
            linkUrl: '/thungSong5S',
            date: '2 November 2022',
            content: 'TBH THUNG SONG RECEIVES 5S GOLD',
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
            date: '28 January 2023',
            content: 'Led by CEO Mr. Lee Keng Seng, head office management, branch management, and Teck Bee Hang Co., Ltd company employees.',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=14Ew_4A29zM0qqLEduDmdGpZWwomfC_rd',
            linkUrl: '/thungSong21',
            date: '18 March 2021',
            content: 'TBH THUNG SONG RECEIVES 5S GOLD',
        },
    ],
    //--------------------page3--------------------------
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1aIPmOxtH0RLnbPIo0i9YAGpRfVXsEofS',
            linkUrl: '/Technical',
            date: '24 February 2021',
            content:  'TECHNICAL SKILLS TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1mzRux4q3KiyPOeLgFmY6UTCMkuuKXS4T',
            linkUrl: '/Chnewyear21',
            date: '9 February 2021',
            content: 'CHINESE NEW YEAR 2021',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1XmK_upqXI3wrQgZM9PIFW-xyujYQhY6M',
            linkUrl: '/Leanproduction',
            date: '4 February 2021',
            content: 'LEAN PRODUCTION TRAINING',
        },
    ],
    
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=13eJ90d2JmypI1R3KaVzC2-Kri_wWyLT0',
            linkUrl: '/Isotraining',
            date: '23 December 2020',
            content: 'ISO TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1CAX3bp_nHZ_FciqKPA3MMbsZzP8OTPys',
            linkUrl: '/Softskill',
            date: '21 December 2020',
            content: 'SOFTSKILL TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1I7Eq5UacdelopFZVdvRIsAYCc9gwFMq9',
            linkUrl: '/Newyear20',
            date: '17 December 2020',
            content: 'NEW YEARS PARTY',
        },
    ],
        //--------------------page 4-----------
    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=17ma_TlaEH8VL91YD6-g-U2NPJgT6zfcT',
            linkUrl: '/Fireescape',
            date: '4 December 2020',
            content: 'FIRE ESCAPE TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1947sdUloZpAEIeOtrAxuxsuW0BuxsElW',
            linkUrl: '/Merritpage',
            date: '9 November 2020',
            content: 'OFFICE MERRIT',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1eftEZ0OiJLxMhdJIsuUpAp8kNX0t-Gp1',
            linkUrl: '/Nrtraining',
            date: '16 October 2020',
            content: 'NR PROPERTY TRAINING',
        },
    ],

    [
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1nA5u3SUlP7lmVXGIdS-f61z7i3BaOp4h',
            linkUrl: '/Ergonomic',
            date: '2 October 2020',
            content: 'ERGONOMIC TRAINING',
        },
        {
            imageUrl: 'https://drive.google.com/uc?export=view&id=1Y_1cy9LLAZsNqoQwe6o6AdnQv2PrjHRz',
            linkUrl: '/Healthbody',
            date: '5 May 2020',
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
            <div className="h-screen bg-fixed bg-white">
                <div className="h-full w-full bg-contain bg-no-repeat bg-center bg-[url(https://drive.google.com/uc?export=view&id=1Iq3t9w9bNbyIfyvfSYQlaRl6v8_IpAOc)]">

                </div>

                <div className="flex justify-center bg-white h-full w-full text-back">
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
                            <div className="whitespace-normal w-full h-auto pr-3 py-2">
                                <p className="text-sm line-clamp-2" >{item.content}</p>
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
                                <div className="whitespace-normal w-full h-auto pr-3 py-2">
                                <p className="text-sm line-clamp-2">{item.content}</p>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>

                    </div>

                </div>
                    
            <div className="h-12 w-full flex justify-center pb-4">
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
                                {[1, 2, 3, 4, 5, 6, 7,].map((page) => (
                                    <li key={page}>
                                    <button
                                        onClick={() => handlePageChange(page)}
                                        className={`relative block rounded bg-transparent px-3 text-sm text-neutral-600 transition-all duration-300 ${
                                        currentPage === page ? 'bg-green-500 round-lg dark:text-white dark:bg-neutral-700' : 'hover:bg-green-300 dark:hover:text-white'
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
