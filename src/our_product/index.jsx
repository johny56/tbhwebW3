import React, {useState} from "react";
// import Carousel from "./component_p/Carousel";

const productImage = [
    [
      {
          name:'STR10',
          imageUrl: 'https://drive.google.com/uc?export=view&id=1IoSB-WGi7DrqQp4VUWjYp8me0uhXdCSu',
          dirt:'0.08',ash:'0.60',nitrogen:'0.60',volatile:'0.80',Po:'30',PRI:'50',
          
      },
      
    ],
    [
      {
          name:'STR20',
          imageUrl: 'https://drive.google.com/uc?export=view&id=1PfKAz9x_8GKbY0VyLYlXj8SCW-mmUrs-',
          dirt:'0.16',ash:'0.80',nitrogen:'0.60',volatile:'0.80',Po:'30',PRI:'40',
          
      },
      
    ],
    [
      {
          name:'Mixtures20',
          imageUrl: 'https://drive.google.com/uc?export=view&id=1y_Mv63WCCTfhymINmR8uvQ0ptdS_Kjc4',
          dirt:'0.16',ash:'0.80',nitrogen:'0.60',volatile:'0.80',Po:'30',PRI:'40',
          
      },
      
    ],
    [
      {
          name:'STR20CV',
          imageUrl: 'https://drive.google.com/uc?export=view&id=1-GU2ZF2o5QznCUiB6TFncXS6ccz4SLjO',
          dirt:'0.16',ash:'0.80',nitrogen:'0.60',volatile:'0.80',Po:'-',PRI:'40',
          
      },
      
    ],
    [
      {
          name:'STR10',
          imageUrl: 'https://drive.google.com/uc?export=view&id=1IoSB-WGi7DrqQp4VUWjYp8me0uhXdCSu',
          dirt:'0.08',ash:'0.60',nitrogen:'0.60',volatile:'0.80',Po:'30',PRI:'50',
          
      },
      
    ],
    [
      {
          name:'STR20',
          imageUrl: 'https://drive.google.com/uc?export=view&id=1PfKAz9x_8GKbY0VyLYlXj8SCW-mmUrs-',
          dirt:'0.16',ash:'0.80',nitrogen:'0.60',volatile:'0.80',Po:'30',PRI:'40',
          
      },
      
    ],
    [
      {
          name:'Mixtures20',
          imageUrl: 'https://drive.google.com/uc?export=view&id=1y_Mv63WCCTfhymINmR8uvQ0ptdS_Kjc4',
          dirt:'0.16',ash:'0.80',nitrogen:'0.60',volatile:'0.80',Po:'30',PRI:'40',
          
      },
      
    ],
    [
      {
          name:'STR20CV',
          imageUrl: 'https://drive.google.com/uc?export=view&id=1-GU2ZF2o5QznCUiB6TFncXS6ccz4SLjO',
          dirt:'0.16',ash:'0.80',nitrogen:'0.60',volatile:'0.80',Po:'-',PRI:'40',
          
      },
      
    ],
    
  ];

function Productpage(){

        const [currentProduct, setCurrentProduct] = useState(1);

        const handleCardChange = (product) => {
          console.log(currentProduct);
          setCurrentProduct(product);
          if(currentProduct > 4)setCurrentProduct(1);
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

                          <div id="card" className="h-screen w-full ">

                            <div className="h-full w-full flex flex-col">
                              <div className="flex flex-rows-3">

                              {productImage[currentProduct - 1].map((item, index) => (
                              <div key={index} className="relative flex justify-center item-center h-full w-1/4 pl-32">
                                      <div className="relative h-full w-56 pt-36">
                                      <div className="absolute ml-6 h-44 w-44 rounded-full bg-red-300/80"></div>
                                      <img className="absolute h-auto w-auto bg-transparent" src={item.imageUrl} alt="" />
                                    </div>
                                  
                              </div>
                              ))}

                              {productImage[currentProduct - 0].map((item, index) => (
                              <div key={index} className="relative flex justify-center item-center h-full w-2/4">
                                      <div className="relative h-full w-3/5">
                                      <div className="absolute ml-12 h-96 w-96 rounded-full bg-red-300/80"></div>
                                      <img className="absolute h-auto w-auto bg-transparent" src={item.imageUrl} alt="" />
                                    </div>
                                  
                              </div>
                              ))}

                              {productImage[currentProduct + 1].map((item, index) => (
                              <div key={index} className="relative flex justify-center item-center h-full w-1/4 pr-32">
                                      <div className="relative h-full w-56 pt-36">
                                      <div className="absolute ml-6 h-44 w-44 rounded-full bg-red-300/80"></div>
                                      <img className="absolute h-auto w-auto bg-transparent" src={item.imageUrl} alt="" />
                                    </div>
                                  
                              </div>
                              ))}

                              </div>

                            <div className="h-full w-full mt-12 pl-24 pt-28">
                              <div className="flex flex-rows-3">
                                
                                <div className="relative flex justify-center item-center h-full w-1/4 pt-24">

                                {productImage[currentProduct - 1].map((item, index) => (
                                  <div key={index} className="relative h-full w-56 text-center ml-16">
                                    <div className="absolute inset-0 h-16 w-44 text-3xl font-bold text-green-800">{item.name}</div>
                                    <p className="absolute top-10 right-5 h-56 w-64">
                                      Dirt (%wt,max) {item.dirt}<br/>
                                      Ash (%wt,max) {item.ash}<br/>
                                      Nitrogen (%wt,max) {item.nitrogen}<br/>
                                      Volatile Matter (%wt,max) {item.volatile}<br/>
                                      Po (Initial Plasticity) {item.Po}<br/>
                                      PRI Index (min) {item.PRI}<br/>
                                      Money (ML 1+4, 100C)-
                                    </p>
                                  </div>
                                ))}

                                </div>
                                
                                <div className="relative flex justify-center item-center h-full w-3/4 pt-24">

                                    {/* <div className="absolute left-56 h-12 w-12 bg-gray-500 rounded-full">L</div> */}
                                    
                                    <button
                                    onClick={() => handleCardChange(currentProduct - 1)}
                                    className={`absolute left-56 h-12 w-12 bg-gray-500 rounded-full
                                    }`}
                                    >
                                    <svg class="h-8 w-8 text-white ml-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                    </button>
                                    
                                    {/* <div className="absolute right-72 h-12 w-12 bg-gray-500 rounded-full">R</div> */}
                                    <button
                                    onClick={() => handleCardChange(currentProduct + 1)}
                                    className={`absolute right-72 h-12 w-12 bg-gray-500 rounded-full`}
                                    >
                                    <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                    </button>

                                  {productImage[currentProduct - 0].map((item, index) => (
                                  <div key={index} className="relative h-full w-56 text-center">
                                    <div className="absolute h-16 w-44 text-4xl font-bold text-green-800">{item.name}</div>
                                    <p className="absolute top-10 right-5 h-64 w-64 pt-4 text-lg">
                                    Dirt (%wt,max) {item.dirt}<br/>
                                      Ash (%wt,max) {item.ash}<br/>
                                      Nitrogen (%wt,max) {item.nitrogen}<br/>
                                      Volatile Matter (%wt,max) {item.volatile}<br/>
                                      Po (Initial Plasticity) {item.Po}<br/>
                                      PRI Index (min) {item.PRI}<br/>
                                      Money (ML 1+4, 100C)-
                                      </p>
                                  </div>
                                  ))}

                                </div>

                                <div className="relative flex justify-center item-center h-full w-1/4 pt-24">

                                {productImage[currentProduct + 1].map((item, index) => (
                                  <div key={index} className="relative h-full w-56 text-center mr-32">
                                    <div className="absolute inset-0 h-16 w-44 text-3xl font-bold text-green-800">{item.name}</div>
                                    <p className="absolute top-10 right-5 h-56 w-64">
                                      Dirt (%wt,max) 0.16<br/>
                                      Ash (%wt,max) 0.80<br/>
                                      Nitrogen (%wt,max) 0.60<br/>
                                      Volatile Matter (%wt,max) 0.80<br/>
                                      Po (Initial Plasticity) 30<br/>
                                      PRI Index (min) 40<br/>
                                      Money (ML 1+4, 100C)-
                                      </p>
                                  </div>
                                ))}

                                </div>

                              </div>
                              </div>

                            </div>
                            </div>
                      </div>

                  </div>

                </div>

                </div>
            

            );

        
}
export default Productpage;


