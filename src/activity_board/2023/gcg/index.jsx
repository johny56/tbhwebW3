import React from 'react';
import img1 from '../../asset/3.webp'

export default function Gcg(){

    return (

        <div>
            <div className="bg-cover bg-white h-full w-full pt-36">
                <div className="flex flex-row justify-center item-center">
                    <h1 className="text-bold text-4xl">GOOD CORPORATE GOVERNANCE STANDARD 2023</h1>
                </div>
                {/* backbutton */}
                    <div className="flex justify-end pr-12">
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
                <div className="flex justify-center h-full w-full pb-8">
                    <img src={img1}/>
                </div>
                <div className="bg-white h-full w-2/3 ml-40 pt-24 pb-8">
                    <h2 className="text-bold text-2xl">GOOD CORPORATE GOVERNANCE STANDARD 2023</h2>
                    <h3 className="text-bold text-xl">On 6 September 2023 , The Department of Business Development, Ministry of Commerce</h3>
                    <p className="indent-8 pt-4">The Department of Business Development, Ministry of Commerce on September 6th, 2023, conducted a ceremony to honor the 2023 recipients of the Given Award for Good Corporate Governance Standards.
Teck Bee Hang Co., Ltd. has been awarded and certified a renowned “Good Corporate Governance Standards 2023” from the Department of Business Development, Ministry of Commerce. Promoting it as a business
role model in conducting business with integrity, and fairness, towards customers, community, and social responsibility. The Company complies with 6 principles of “Good Corporate Governance Standards”,
<br/>
1) Rule of Law,
<br/>
2) Morality,
<br/>
3) Transparency,
<br/>
4) Participation,
<br/>
5) Responsibility
<br/>
6) Value.
<br/>
         The Company has conducted business with integrity for more than 70 years and adheres to Good Corporate Governance at all times. This goodwill in conducting business has been able to promote confidence
among stakeholders. The Company is dedicated to upholding Good Corporate Governance and maintaining its values. As a result, the Company continues to expand and build a sustainable business as a component of Thailand’s overall economy.
                    </p>

                    <h2 className="text-bold text-2xl pt-8">มาตรฐานธรรมาภิบาลธุรกิจ</h2>
                    <h3 className="text-bold text-xl">6 กันยายน 2556 ณ กรมพัฒนาธุรกิจการค้า กระทรวงพาณิชย์</h3>
                    <p className="indent-10 pt-4">เมื่อวันที่ 6 กันยายน 2566 ที่ผ่านมานี้ กรมพัฒนาธุรกิจการค้า กระทรวงพาณิชย์ ได้จัดพิธีเชิดชูเกียรติ ให้แก่ธุรกิจที่ผ่านการรับรองตามเกณฑ์มาตรฐานธรรมาภิบาลธุรกิจ ประจำปี 2566
          บริษัท ยางไทยปักษ์ใต้ จำกัด ได้รับหนังสือรับรองและตราเครื่องหมาย “มาตรฐานธรรมาภิบาลธุรกิจ” จากกรมพัฒนาธุรกิจการค้า กระทรวงพาณิชย์ โดยยกให้เป็นต้นแบบธุรกิจที่จะเป็นแบบอย่างให้ธุรกิจอื่นๆ ในความซื่อสัตย์ ยุติธรรม และเป็นธรรม ต่อผู้บริโภค
ประชาชนทั่วไป รวมทั้งมีความรับผิดชอบต่อสังคม โดย บริษัท ยางไทยปักษ์ใต้ จำกัด ปฏิบัติตามหลักเกณฑ์มาตรฐานธรรมาภิบาลธุรกิจ ซึ่งมีทั้งหมด 6 หลัก ประกอบด้วย หลักนิติธรรม หลักคุณธรรม หลักความโปร่งใส หลักการมีส่วนร่วม หลักความรับผิดชอบ และหลักความคุ้มค่า
          บริษัทฯได้ดำเนินธุรกิจมายาวนานมากว่า 70 ปี ยึดหลักธรรมาภิบาลในการบริหารงานมาโดยตลอด เพื่อสร้างความเชื่อมั่นให้กับผู้มีส่วนได้ส่วนเสียทุกฝ่าย และพร้อมมุ่งมั่นในดำเนินธุรกิจตามหลักธรรมาภิบาลในการบริหารจัดการต่อไป ทั้งนี้จะช่วยสร้างการเติบโต
และความแข็งแกร่งให้กับธุรกิจและระบบเศรษกิจของชาติได้อย่างยั่งยืน
                    </p>
                </div>

            </div>
        </div>
    );
}