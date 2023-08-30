import Card from "about_us/core_value";
import Product from "our_product/product";
import Policy from "sustainability/policies";
import FactoryClip from "about_us/factory";
import Activity from "about_us/company_activity";
import WorkOpputunity from "work_opp";

import React from 'react';

const Body = () => {

    return (
      
        
          // <div className="bg-transition h-max z-40">
            <div className="bg-green-200 bg-local hover:bg-fixed top-0 w-full shadow-md">
        
              <body className="absolute buttom-0"> 

                <div className="h-screen">
                    header space
                </div>
                <div id="factory-clip">
                    <FactoryClip></FactoryClip>
                  </div>
  
                  {/* <div classsName="py-2 mt-2 z-20" id="core_value"> */}
                  <div id="core_value">
                      <Card></Card>
                  </div>
                  
                  <div classsName="m-2" id="product">
                      <Product></Product>
                  </div>
  
                  <div id="policy">
                      <Policy></Policy>
                  </div>
  
                  
  
                  <div id="activity">
                    <Activity></Activity>
                  </div>

                  <div className="bg-[#273F02] text-white">
                    <div className="w-full container mx-auto flex flex-col text-center">
                        <div className="flex flex-row md:flex-row text-center text-lg md:text-left md:justify-between py-6">
                            <a href="#" class="uppercase ">WHISTLEBLOWER</a>
                            <a href="#" class="uppercase ">SUGGESTION/CUSTOMER COMPLAINTS</a>
                            <a href="#" class="uppercase ">PRIVACY POLICY | COOKIE POLICY</a>
                            <a href="#" class="uppercase ">TBH STAFF</a>
                            
                        </div>
                    </div>
                </div>
                
            </body>
              
                
            

    

        </div>
              
   
    );
  };
  
  export default Body;