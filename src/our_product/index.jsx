import React, {useState} from "react";
import { Link } from "react-router-dom";
import Packing from "./packing";
import Product_Roll from "./product _roll";
import Product_Rolltest from "./product _roll/test";
// import Carousel from "./component_p/Carousel";

  const PRITspec = [
    [
      {
          name:'PRIT',
          imageUrl: 'https://drive.google.com/uc?export=view&id=1YzxZ2MirclJyI98j0oY1JFISAuIrdCxG',
          
      },
      
    ],
    
  ];

  const INEspec = [
    [
      {
        name:'INE',
        imageUrl: 'https://drive.google.com/uc?export=view&id=1vc104kTA6ah_F2FuGEicJCsYNKCJR7dm',
        
      },
    ],
  ];



  function Productpage(){
    
    
        const [currentProduct, setCurrentProduct] = useState(5);
        const [currentSpec, setCurrentSpec] = useState(1);
        // const [isOpen, setisOpen] = useState(false);

        // function handleClick() {
        //   setisOpen(!isOpen);
        //   console.log("helloworld");
        // }
        // const handleClick = ({ isOpen }) => {
        //   return (
        //     <div className={isOpen ? 'translate-x-96' : ''}>
        //       <img src="https://drive.google.com/uc?export=view&id=1IoSB-WGi7DrqQp4VUWjYp8me0uhXdCSu" alt="Your Image" />
        //     </div>
        //   );
        // };

        const handleCardChange = (product) => {
          
          setCurrentProduct(product);
          if(currentProduct <= 1){
            setCurrentProduct(product + 5);
          }else if(currentProduct > 7){
            setCurrentProduct(product - 5);
          }
          console.log(currentProduct);
        };

        const handleSpecChange = (spec) => {
          console.log(currentSpec);
          setCurrentSpec(spec);
          if(currentSpec > 1)setCurrentSpec(1);
          if(currentSpec < 0)setCurrentSpec(0);
        };

       
            return (

                <div className="relative h-screen bg-white">
                
                <div className="flex flex-col w-full h-full pt-24">
                

                  <div className="bg-contain bg-no-repeat h-full w-full bg-[url(https://drive.google.com/uc?export=view&id=1YuEwCgokxtAKC82Hxb3H0ATiP3QOS_LJ)]">

                      <div className="flex flex-col h-24 mt-36 pt-14">

                          <div className="flex flex-row pl-32 pt-64">
                              <h1 className="h-full w-auto text-8xl font-bold text-stroke text-green-900 lg:ml-96">OUR</h1>
                              <h1 className="h-full w-auto text-8xl text-green-900 font-bold">PRODUCT</h1>
                          </div>
                          <div className="flex flex-col h-96 w-auto pt-4 pb-16 pl-96">
                              <p className="indent-6 text-green-900 text-xl line-clamp-3 pl-28 ml-32">To Produce Standard Thai Rubber(STR) that
                              <br/>Consistently Satiefies or Exceeds Customer's 
                              <br/>Requirements Through Continuous Improvement</p>
                          </div>
                            
                            <div>
                              <div>
                                <Product_Roll/>
                                {/* <Product_Rolltest/> */}
                          

                           

                          
                              

                            </div>
                            </div>

                            <div className="h-screen w-full bg-white pt-96 mt-72">
                                  <div className="flex flex-col">
                                    <div className="flex flex-row justify-center item-center">
                                      <div className="h-20 w-auto text-6xl font-bold text-stroke text-green-900">SPEC</div>
                                      <div className="h-20 w-auto text-6xl font-bold text-green-900 pl-4">Approved</div>
                                    </div>

                                    <div className="relativeb h-screen w-full bg-white">


                                      <div className="h-12 w-full flex justify-center">
                                        <div className="flex flex-row justify-center h-12 w-80 rounded-full bg-gray-400">
                                          <button onClick={() => handleSpecChange(currentSpec - 1)} className="btn btn-warning text-2xl text-white font-medium px-4 hover:bg-green-800 rounded-full">RRIT SPEC</button>
                                          <button onClick={() => handleSpecChange(currentSpec + 2)} className="btn btn-success text-2xl text-white font-medium px-4 ml-4 hover:bg-green-800 rounded-full">INE SPEC</button>
                                          </div>


                                        </div>
                                        <div className="h-2/3 w-2/3 mt-2 ml-72">
                                          {currentSpec <= 0 &&PRITspec.map((item) => (

                                            <div className="flex justify-center h-full w-auto hover:scale-125 hover:translate-y-20">
                                              <img src="https://drive.google.com/uc?export=view&id=1YzxZ2MirclJyI98j0oY1JFISAuIrdCxG"/>
                                              {/* <img src={item.imageUrl}/> */}
                                            </div>
                                          ))}
                                          {currentSpec > 0 &&INEspec.map((item) => (

                                            <div className="flex justify-center h-full w-auto hover:scale-125 hover:translate-y-20">
                                              <img src="https://drive.google.com/uc?export=view&id=1vc104kTA6ah_F2FuGEicJCsYNKCJR7dm"/>
                                              {/* <img src={item.imageUrl}/> */}
                                            </div>
                                          ))}
                                        </div>
                                        
                                      </div>
                                      <p className="flex justify-end pr-28 text-2xl font-normal h-12 w-full">NEED MORE INFORMATION? FEEL FREE TO CONTACT US</p>
                                    </div>
                                    
                                    <Packing/>
                                    

                                </div>
                                </div>
                        </div>
                        </div>
                      

              </div>

          );

}
export default Productpage;
