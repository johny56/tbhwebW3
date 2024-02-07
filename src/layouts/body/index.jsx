import Card from "about_us/core_value";
import Policy from "sustainability/policies";
import Activity from "about_us/company_activity";

import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
// import Product from "our_product/product";
// import FactoryClip from "about_us/factory";
// import CompanyStructure from "about_us/company_structure";

const Body = () => {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const targetId = hash.substring(1); // Remove the "#" symbol
          scrollToSection(targetId);
        }
      }, []);

      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const yOffset = -100; // Adjust as needed to fine-tune the scroll position
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };
      

    return (
      
        
          // <div className="bg-transition h-max z-40">
            <div className="bg-green-200 bg-local hover:bg-fixed top-0 w-full shadow-md">
        
              <body className="absolute buttom-0"> 

                <div className="h-screen">
                    {/* header space */}
                </div>
                <div id="factory-clip">
                    {/* <FactoryClip></FactoryClip> */}
                  </div>
  
                  {/* <div classsName="py-2 mt-2 z-20" id="core_value"> */}
                  <div id="core_value">
                      <Card></Card>
                  </div>
                  
                  <div classsName="m-2" id="product">
                      {/* <Product></Product> */}
                  </div>
  
                  <div id="policy">
                      <Policy></Policy>
                  </div>
  
                  <div className="" id="activity">
                    <Activity></Activity>
                  </div>

                  <div className="bg-[#273F02] text-white">
                    <div className="w-full container mx-auto flex flex-col text-center">
                        <div className="flex flex-row md:flex-row text-center text-lg md:text-left md:justify-between py-6">
                            
                            <Link className="font-sans font-tt-hoves text-white dark:text-white hover:underline" to="/Whistleblowing">WHISTLEBLOWIMG</Link>
                            <a href="" className="font-sans font-tt-hoves ">SUGGESTION/CUSTOMER COMPLAINTS</a>
                            <Link className="font-sans font-tt-hoves text-white dark:text-white hover:underline" to="/policy_page">PRIVACY POLICY | COOKIE POLICY</Link>
                            <Link className="font-sans font-tt-hoves text-white dark:text-white hover:underline" to="/tbhstaff">TBH STAFF</Link>
                            
                        </div>
                    </div>
                </div>
                
            </body>
              
                
            

    

        </div>
              
   
    );
  };
  
  export default Body;