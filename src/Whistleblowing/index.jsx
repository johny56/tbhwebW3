import React from "react";
import Form from "./complaint_form";

// import { useState } from "react";

import imgBg from "./asset/Backgroung Whistle Blower.jpg";
import imgBg2 from "./asset/Background Whistle Blower part 2.jpg";

export const img1 = imgBg;
export const img2 = imgBg2;


export default function Whistleblowing() {



  return (

    

      <div className="relative h-screen">


        <div
          className="relative h-full w-full bg-fixed bg-cover z-0"
        >
        <img className="h-full w-full" src={imgBg} alt=""/>
          <div className="absolute top-24 left-96 h-full w-auto flex justify-center items-center">
            <h2 className="text-8xl font-sans font-bold font-tt-hoves text-green-900">
              WHISTLEBLOWING
            </h2>
          </div>
      </div>


      <div className="relative w-full h-full bg-cover z-0">

          <div className="absolute h-full w-full z-10 bg-center">
            <img className="h-full w-full" src={imgBg2} alt=""/>
          </div>

        <div className="relative container mx-auto text-black px-16 pt-16 z-20 scale-95">
          <h1 className="font-extrabold">1. Principle and justification</h1>
          <p className="text-left indent-8">The policy for handling complaints has been established by Teck Bee Hang Co.,
Ltd., attempting to conduct business that upholds ethical standards in addition to
effective corporate governance If a whistleblower is identified, ensure a fair
investigation to reach an equitable outcome. To satisfy the convenience requirements
of both internal and external complainants.</p><br/><br/>
                    <h2 className="font-extrabold">2. Whistleblower Protection and Confidentiality</h2>
                    <p className="text-left indent-8">To protect the legal rights of truthful information providers and complainants. The
company will keep the complainant&#39;s or informant&#39;s identity, address, and other
information private. And maintain the privacy of the complainant&#39;s and informant&#39;s
information It won&#39;t impede the reporter&#39;s work or have any unfavorable
consequences based on the list of clues, Only individuals in charge of investigating
complaints will be allowed access to such information by the Company. The given
information will be kept private. Don&#39;t disclose information to anyone who doesn&#39;t
need it. Unless it is a disclosure made in accordance with a legal obligation.</p>
                    <br/>
                    <h3 className="font-extrabold">3. Guidelines for filing complaints</h3>
                    <p className="text-left indent-8">To receive information, submit an email to whistleblower@teckbeehang.com Then,
without notifying the source of complaint information, the chairman of the board of
directors and/or the chairman of the audit committee will assess the subject of the
complaint and pass the complaints to the authorized person in accordance with the
responsible unit that received the complaints. Until the conclusion of the complaints
process,CEO and Auditing Committee will conduct an investigation. The Company
may invite independent investigators, such as the Board of Directors, auditors,
internal auditors, forensic inspectors, police, and Ministry of Commerce and
Revenue divisions, to join in the inquiry if the report is essential or has legal ramifications.</p>
                <br/><br/>
                <h4 className="font-extrabold">4. Methods for submitting grievances</h4>
                <p className="text-left indent-8">The complainant must provide all relevant information, including their name,
address, and contact information. And addressed to the Audit Committee before
being sent Addressed to:<br/>
Teck Bee Hang Co., Ltd.&#39;s<br/>
CEO and Deputy CEO.<br/>
Location: 157 Niphat Uthit 2 Road, Hat Yai District, Songkhla 90110<br/><br/>
You may also use an online system to file complaints.
<a className="font-bold"> https://teckbeehang.com/whistleblower/</a></p>
                <br/>
                
                <h5 className="font-bold">5.</h5>
                <p className="text-left font-normal inline">
The company investigates and handles complaints. The investigation results
should go to the appropriate agencies to report for the right people.
Send the complainant an email to let them know what we did and inform the
executives of the activities&#39; results for acknowledgment.</p>
        </div>
    </div> 


    <div className="relative w-full h-screen bg-scroll bg-cover z-0 overflow-hidden">

          <div className="absolute h-screen w-full z-10 bg-center">
            <img className="h-full w-full" src={imgBg2} alt=""/>
          </div>

          <div className="relative h-full w-full overflow-hidden bg-white z-10 mt-24">
              
            <div className="relative bg-cover h-full w-full z-20 mt-6">
            <div className="text-back text-start">

            <div className="absolute h-full w-full top-0 flex flex-col justify-center z-30">

            
                <Form/>
                
                
            </div>
            
            </div>
            </div>
          </div>

          </div>

        

    </div>

        
  );
}

