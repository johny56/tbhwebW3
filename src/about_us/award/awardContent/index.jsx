import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import picture_1 from "../asset/letterA.png";

import picture_2 from "../asset/2023/Corporate_GOV_2023.png";
import picture_3 from "../asset/2023/ECOVADIS 2023.png";
import picture_4 from "../asset/2023/Fin_D_2023.png";
import picture_5 from "../asset/2023/จ้าง_คนพิการ_2023.png";

import picture_6 from "../asset/2022/2022_5S Award.png";
import picture_7 from "../asset/2022/2022_CSR-DIW AWARD.png";
import picture_8 from "../asset/2022/2022_DISABILITIES EMPOWERMENT.png";
import picture_9 from "../asset/2022/2022_Ecovadis.png";
import picture_10 from "../asset/2022/2022_Sufficient Economy Model.png";
import picture_11 from "../asset/2022/2022_THE GOOD LABOR PRACTICES.png";


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
  
]

export default function AwardContent() {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setIsCardVisible(!isCardVisible);
  };

    const awards2023 = [
        {
        title: "ECOVADIS",
        description: "Gold Medal by Ecovadis CSR assessment",
        imageUrl: picture_2,
        },
        {
        title: "GOOD CORPORATE GOVERNANCE 2023",
        description: "Teck Bee Hang Co.,Ltd",
        imageUrl: picture_3,
        },
        {
        title: "FIN.ดี HAPPY LIFE",
        description: "Teck Bee Hang Co.,Ltd",
        imageUrl: picture_4,
        },
        {
        title: "DISABILITIES EMPOWERMENT",
        description: "Teck Bee Hang Co.,Ltd",
        imageUrl: picture_5,
        },
    ];

  
    const awards2022 = [
        {
        title: "Thailand 5S Award(Gold Medal)",
        description: "Teck Bee Hang Co.,Ltd(Thungsong Branch)",
        imageUrl: picture_6,
        },
        {
        title: "CSR-DIW Award",
        description: "Teck Bee Hang Co.,Ltd(Pattani Branch)",
        description2: "Teck Bee Hang Co.,Ltd(Narathiwat Branch)",
        description3: "Teck Bee Hang Co.,Ltd(Yala Branch)",
        description4: "Teck Bee Hang Co.,Ltd(Thungsong Branch)",
        description5: "Teck Bee Hang Co.,Ltd(Suratthani Branch)",
        imageUrl: picture_7,
        },
        {
        title: "DISABILITIES EMPOWERMENT",
        description: "Teck Bee Hang Co.,Ltd(Head Office)",
        description1: "Teck Bee Hang Co.,Ltd(Pattani Branch)",
        description2: "Teck Bee Hang Co.,Ltd(Narathiwat Branch)",
        description3: "Teck Bee Hang Co.,Ltd(Yala Branch)",
        description4: "Teck Bee Hang Co.,Ltd(Thungsong Branch)",
        description5: "Teck Bee Hang Co.,Ltd(Suratthani Branch)",
        imageUrl: picture_8,
        },
        {
        title: "GOOD WORKERS FOLLOWING THE SUFFICIENCY ECONOMY WAY",
        description: "Teck Bee Hang Co.,Ltd(Thungsong Branch)",
        imageUrl: picture_11,
        },
        {
        title: "THE GOOD LABOR PRACTICES",
        description: "Teck Bee Hang Co.,Ltd(Narathiwat Branch)",
        imageUrl: picture_10,
        },
        {
        title: "ECOVADIS",
        description: "Bronze Medal by EcoVadis CS assessment",
        imageUrl: picture_9,
        },

    ];

  return (
    <>
      <div className="relative bg-cover h-screen w-full bg-white">
        <div className="pt-20 pl-16">

          <div className="flex flex-row justify-center h-full w-auto">
              <div className="relative h-28 w-32 p-2 pl-8">
                  {/* <img className="h-full w-full" src={picture_1} alt=""/> */}
                  {/* <h1 className="text-9xl font-bold outline-3 text-stroke-black scale-150 p-1.5">A */}
                  {/* <h1 className="absolute top-3.5 left-12 scale-125 text-9xl font-bold drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] font-outline-4 text-white z-10">A</h1> */}
                  {/* </h1> */}
                  
              </div>

              <div className="flex flex-row items-center justify-center text-black">
                  <h2 className="text-6xl font-bold pr-2">AWARDS &</h2>
                  <h2 className="text-6xl font-bold">ACHIEVEMENTS</h2>
              </div>
          </div>
          
          <div className="relative inline-block text-left">
            <button
              onClick={toggleCard}
              type="button"
              className="p-3 h-12 w-36 bg-white rounded-lg shadow-lg text-gray-800 text-2xl font-bold"
            >
              {selectedYear}
              <FontAwesomeIcon className="pl-8 fa-1x text-gray-800" icon={faChevronDown} />
            </button>
            {isCardVisible && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1">
                  <button
                    onClick={() => handleYearChange("2023")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    2023
                  </button>
                  <button
                    onClick={() => handleYearChange("2022")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    2022
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedYear === "2023" && (
          <div className={`card transition-opacity duration-300 bg-white`}>
            {awards2023.map((award, index) => (
              <div key={index} className="relative bg-white shadow-md flex flex-col h-full w-full pt-4 py-8">
                <div className="flex flex-row gap-2 h-full w-auto m-2">
                  <div className="h-full w-2/6 bg-transition pl-32">
                    <img className="h-1/3 w-96" src={award.imageUrl} alt={`Award ${index}`} />
                  </div>
                  <div className="flex flex-col h-full w-4/6 bg-white text-start pl-32 pt-28">
                    <h1 className="text-4xl font-bold text-back pr-80">{award.title}</h1>
                    <h2 className="text-2xl font-normal text-gray-700">{award.description}</h2>
                  </div>
                </div>
                <div className="h-0.5 w-full bg-gray-100 mt-24"></div>
              </div>
            ))}
          </div>
        )}

        {selectedYear === "2022" && (
          <div className={`card transition-opacity duration-300 bg-white mt-12`}>
            {awards2022.map((award, index) => (
              <div key={index} className="relative bg-white shadow-md flex flex-col h-full w-full pt-8 py-28">
                <div className="flex flex-row gap-2 h-full w-auto m-2">
                  <div className="h-96 w-auto bg-transition pl-32">
                    <img className="h-full w-full" src={award.imageUrl} alt={`Award ${index}`} />
                  </div>
                  <div className="flex flex-col h-full pt-16 w-4/6 bg-white text-start mt-4 pl-32">
                    <h1 className="text-4xl font-bold text-back pr-80">{award.title}</h1>
                    <h2 className="text-2xl font-normal text-gray-700">{award.description}</h2>
                    <h3 className="text-2xl font-normal text-gray-700">{award.description1}</h3>
                    <h4 className="text-2xl font-normal text-gray-700">{award.description2}</h4>
                    <h5 className="text-2xl font-normal text-gray-700">{award.description3}</h5>
                    <h6 className="text-2xl font-normal text-gray-700">{award.description4}</h6>
                    <h7 className="text-2xl font-normal text-gray-700">{award.description5}</h7>
                  </div>
                </div>
                  <div className="h-0.5 w-full bg-gray-100 mt-24"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}