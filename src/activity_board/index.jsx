import React, { useState } from 'react';
// import Navbar from 'components/navbar';
import { Link } from 'react-router-dom';

import imgBg from './asset/_Company Activities.png'
import img1 from "./asset/3.webp";
import img2 from "./asset/kaizen.png";
import img3 from "./asset/welcomeTBH.png";
import img4 from "./asset/qcc.png";
import img5 from "./asset/songkran.png";
import img6 from "./asset/20230202_111551-1-scaled.png";

import img7 from "./asset/chNewyear.png";
import img8 from "./asset/bigclean.png";
import img9 from "./asset/5saward.png";

import img10 from "./asset/yokohama.png";
import img11 from "./asset/newyear22.png";

import img12 from "./asset/5saward20.png";
import img13 from "./asset/technical.png";
import img14 from "./asset/chnewyear21.png";
import img15 from "./asset/lean.png";

import img16 from "./asset/iso.png";
import img17 from "./asset/softskill.png";
import img18 from "./asset/newyearparty2020.png";

import img19 from "./asset/fireEscape.png";
import img20 from "./asset/merrit2.png";
import img21 from "./asset/nr.png";
import img22 from "./asset/ergonomic.png";
import img23 from "./asset/healtBody.png";



const pageData = [
    [
        {
            imageUrl: img1,
            linkUrl: '/Gcg',
            date: '6 September 2023',
            // content: 'The Department of Business Development, Ministry of Commerce on September 6th, 2023, conducted a ceremony to honor the 2023 recipients of the Given Award for Good Corporate Governance Standards.Teck Bee Hang Co., Ltd. has been awarded and certified a renowned “Good Corporate Governance Standards 2023” from the Department of Business Development, Ministry of Commerce.',
            content: 'GOOD CORPORATE GOVERNANCE STANDARD 2023',
        },
        {
            imageUrl: img2,
            linkUrl: '/KaizenAward',
            date: '11 August 2023',
            // content: 'Mr. Somchai Manosathaporn and his team won the gold medal in the Automatic Kaizen category of the THAILAND KAIZEN AWARD 2023 competition organized by the Technology Promotion Association (Thai-Japanese) by presenting the work “Auto Feed Transverser” under the slogan “Kaizen Ideas, generates inventions, and promotes innovation.”The Management team at Teck Bee Hang expects each staff member to contribute innovative ideas by developing personally and continuously enhancing the organization.',
            content: 'TBH WON THAILAND KAIZEN GOLDEN AWARD 2023',
        },
        {
            imageUrl: img3,
            linkUrl: '/HappyWork',
            date: 'Birthday Gift',
            content:'HAPPY WORKPLACE HAPPY HEART',
            // content: 'Sincere to say, as a happy workplace, we have always valued the diligent work of our team.We aspire to fulfill a small role in their birthday anniversary celebration.',
        },
    ],
                            // second line
    [
        {
            imageUrl: img4,
            linkUrl: '/qcctrain',
            date: '28 June 2023',
            content: 'THE QUALITY CONTROL CIRCLE TRAINING',
            // content: 'We continue to reskill and upskill our employees. This year, we are expanding and educating the entire organization on the QCC (Quality Control Circle) program. We are committed to continuous service and product improvement based on employee feedback.',
        },
        {
            imageUrl: img5,
            linkUrl: '/songkran',
            date: '12 April 2023',
            content: 'HAPPY SONGKRAN FESTIVAL',
            // content: 'All employees and the management team enjoyed in-house Thai new year activities by showering and blessing the water for the new year.',
        },
        {
            imageUrl: img6,
            linkUrl: '/efforts',
            date: '2 February 2023',
            content: 'TECK BEE HANG CO., LTD RECEIVED A SPECIAL PLAQUE FOR ITS EFFORTS IN PROMOTING THE EMPLOYMENT OF PEOPLE WITH DISABILITIES. POWERING INNOVATION FOR ACCESSIBLE AND FAIR EMPLOYMENT.'
            // content: 'On February 2, 2023, representatives Mr. Narongrit Songpan and Ms. Chutinthorn Poolsawat received the prize plaque.',
        },
    ],
    
                            //    ----------------------page2-------------------
    [
        {
            imageUrl: img7,
            linkUrl: '/newyear23',
            date: '20 January 2023',
            content: 'HAPPY CHINESE NEW YEAR 2023 CELEBRATIONL',
            // content:  'On Friday, January 20, 2023, led by Chairman Mr. Lee Keng Seng, head office management, branch management,and Teck Bee Hang Co.,',
        },
        {
            imageUrl: img8,
            linkUrl: '/Bigcleaning',
            date: '11 November 2022',
            content: 'BIG CLEANING DAY 2022',
            // content: 'Teck Bee Hang Co., Ltd. encourages employees to adopt 5S as the company’s guiding principle by organising an annual 5S competition. Employees at the head office join',
        },
        {
            imageUrl: img9,
            linkUrl: '/thungSong5S',
            date: '2 November 2022',
            content: 'TBH THUNG SONG RECEIVES 5S GOLD',
        },
    ],
    
    [
        {
            imageUrl: img10,
            linkUrl: '/bestsupply',
            date: 'Best Supplier',
            content: 'Best Supplier for Quality Performance Award',
        },
        {
            imageUrl: img11,
            linkUrl: '/newyear22',
            date: '28 January 2022',
            content: 'HAPPY CHINESE NEW YEAR 2022 CELEBRATIONL'
            // content: 'Led by CEO Mr. Lee Keng Seng, head office management, branch management, and Teck Bee Hang Co., Ltd company employees.',
        },
        {
            imageUrl: img12,
            linkUrl: '/thungSong21',
            date: '18 March 2021',
            content: 'TBH THUNG SONG RECEIVES 5S GOLD',
        },
    ],
    //--------------------page3--------------------------
    [
        {
            imageUrl: img13,
            linkUrl: '/Technical',
            date: '24 February 2021',
            content:  'TECHNICAL SKILLS TRAINING',
        },
        {
            imageUrl: img14,
            linkUrl: '/Chnewyear21',
            date: '9 February 2021',
            content: 'CHINESE NEW YEAR 2021',
        },
        {
            imageUrl: img15,
            linkUrl: '/Leanproduction',
            date: '4 February 2021',
            content: 'LEAN PRODUCTION TRAINING',
        },
    ],
    
    [
        {
            imageUrl: img16,
            linkUrl: '/Isotraining',
            date: '23 December 2020',
            content: 'ISO TRAINING',
        },
        {
            imageUrl: img17,
            linkUrl: '/Softskill',
            date: '21 December 2020',
            content: 'SOFTSKILL TRAINING',
        },
        {
            imageUrl: img18,
            linkUrl: '/Newyear20',
            date: '17 December 2020',
            content: 'NEW YEARS PARTY',
        },
    ],
        //--------------------page 4-----------
    [
        {
            imageUrl: img19,
            linkUrl: '/Fireescape',
            date: '4 December 2020',
            content: 'FIRE ESCAPE TRAINING',
        },
        {
            imageUrl: img20,
            linkUrl: '/Merritpage',
            date: '9 November 2020',
            content: 'OFFICE MERRIT',
        },
        {
            imageUrl: img21,
            linkUrl: '/Nrtraining',
            date: '16 October 2020',
            content: 'NR PROPERTY TRAINING',
        },
    ],

    [
        {
            imageUrl: img22,
            linkUrl: '/Ergonomic',
            date: '2 October 2020',
            content: 'ERGONOMIC TRAINING',
        },
        {
            imageUrl: img23,
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
            <div className="relative h-screen w-full bg-white">
                {/* <div className="h-full w-full bg-contain bg-no-repeat bg-center bg-[url(https://drive.google.com/uc?export=view&id=1Iq3t9w9bNbyIfyvfSYQlaRl6v8_IpAOc)]"> */}
                <div className="h-auto w-full bg-contain"> 
                    <img className="h-auto w-full" src={imgBg} alt=""/>

                </div>

                <div className="flex justify-center bg-white h-full w-full text-back pt-20">
                    <div className="flex flex-col gap-4">
                    <div className="flex flex-rows-3 gap-x-20">

                        {pageData[currentPage - 1].map((item, index) => (
                        <div key={index} className="relative h-full w-80 shadow-lg">
                            <Link to={item.linkUrl}>
                                <img className="h-56 w-80" src={item.imageUrl} alt="" />
                            
                            <div className="flex flex-col h-auto w-auto bg-white flex items-start justify-start transform pt-2 pl-4">
                            <div className="bg-green-800 h-8 w-40 pt-1 flex justify-center">
                                <h5 className="text-base font-bold tracking-tight text-white dark:text-white">{item.date}</h5>
                            </div>
                            <div className="whitespace-normal w-full h-auto pr-3 py-2">
                                <p className="text-sm line-clamp-2" >{item.content}</p>
                            </div>
                            </div>
                            </Link>
                        </div>
                        ))}

                    </div>

                    <div className="flex flex-cols-3 gap-20 pt-12">

                            {pageData[currentPage - 0].map((item, index) => (
                            <div key={index} className="relative h-full w-80 shadow-lg">
                                <Link to={item.linkUrl}>
                                    <img className="h-56 w-80" src={item.imageUrl} alt="" />
                                
                                <div className="flex flex-col h-auto w-auto bg-white flex items-start justify-start transform pt-2 pl-4">
                                <div className="bg-green-800 h-8 w-40 pt-1 flex justify-center">
                                    <h5 className="text-base font-bold tracking-tight text-white dark:text-white">{item.date}</h5>
                                </div>
                                <div className="whitespace-normal w-full h-auto pr-3 py-2">
                                <p className="text-sm line-clamp-2">{item.content}</p>
                                </div>
                                </div>
                                </Link>
                            </div>
                            ))}
                        </div>

                    </div>

                </div>
                    
            <div className="relative h-6 w-full flex justify-center">
                <ul className="absolute -top-24 list-style-none flex">
                <li>
                                    <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    className={`relative block rounded bg-transparent px-6 text-sm text-neutral-600 transition-all duration-300 hover:bg-green-300 dark:hover:text-white ${
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
                                        className={`relative block rounded bg-transparent px-8 text-sm text-neutral-600 transition-all duration-300 ${
                                        currentPage === page ? 'bg-green-500 round-lg dark:text-white dark:bg-neutral-700' : 'hover:bg-green-300 dark:hover:text-white'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                    </li>
                                ))}
                                <li>
                                    <button
                                    onClick={() => handlePageChange(currentPage + 2)}
                                    className={`relative block rounded bg-transparent px-6 text-sm text-neutral-600 transition-all duration-300 hover:bg-green-300 dark:hover:text-white`}
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
