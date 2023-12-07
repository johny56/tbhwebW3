import React from 'react';

export default function Songkran(){

    const modal = document.getElementById("modal");

        // Get the modal image tag
    const modalImg = document.getElementById("modal-img");


    const showModall = (src) => {
        modal.classList.remove('hidden');
        modalImg.src = src;
    }

    const closeModal = () => {
        modal.classList.add('hidden');
    }

    return (

        <div>
            {/* <div className="relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden"> */}
            <div>
                <div className="bg-cover h-screen bg-[url(https://drive.google.com/uc?export=view&id=1VbqaCvp6OGGFT11eaatz_AqWai8yKYol)]">
                    <div className="bg-white h-full w-full text-back text-start pt-12">
                        <div className="container mx-auto flex flex-col justify-center">
                            <h1 className="text-3xl text-green-800 font-sans font-tt-hoves py-16 mx-16">
                            HAPPY SONGKRAN FESTIVAL
                            </h1>
                            <div className="flex flex-row">
                                <div className="flex flex-col h-full w-1/2">
                                    <div className="flex flex-col h-1/2 w-full">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                            HAPPY SONGKRAN FESTIVAL<br></br>On 12 April 2023 , TBH Head office
                                        </h2><br></br>
                                        <p className="mx-16 indent-5">All employees and the management team enjoyed in-house Thai new year activities by showering and blessing the water for the new year.
                                            Happy Songkran Festival to all our team!
                                        </p>
                                    </div>
                                    <br></br>
                            
                                    <div className="flex flex-col h-full w-full pt-32">
                                        <h2 className="text-xl text-green-800 font-sans font-tt-hoves mx-16">
                                            สงกรานต์มหาสนุก<br></br>12 เมษายน 2556 ณ สำนักงานใหญ่ บริษัทยางไทยปักษ์ใต้ จำกัด
                                        </h2><br></br>
                                        <p className="mx-16 indent-5">พนักงานและคณะผู้บริหารทุกคนร่วมสนุกสนานกับกิจกรรมวันขึ้นปีใหม่ไทยด้วยการสรงน้ำพระ
                                        และรับพรปีใหม่จากผู้บริหาร <br></br>สุขสันต์วันปีใหม่ไทยทุกคน!
                                        </p>
                                    </div>
                                </div>

                                


                                <div className="grid grid-cols-2 grid-rows-3 w-1/2 h-full">

                                    <div className="relative w-full h-auto overflow-hidden p-2 hover:absolute top-0 left-0 right-0 end-10 hover:z-10 hover:bg-gray-100  hover:scale-75">
                                        
                                        <img className="h-auto w-full rounded-lg p-2" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-01.jpg?fit=960%2C720&ssl=1" alt=""/>
                                    
                                    </div>
                                    
                                    <div className="relative w-full h-auto overflow-hidden p-2 hover:absolute top-0 left-0 right-0 end-10 hover:z-10 hover:bg-gray-100 hover:scale-75">
                                        
                                        <img className="h-auto w-full rounded-lg p-2" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-02.jpg?fit=960%2C720&ssl=1" alt=""/>
                                    </div>

                                    
                                    <div className="relative w-full h-auto overflow-hidden p-2 hover:absolute top-0 left-0 right-0 end-10 hover:z-10 hover:bg-gray-100 hover:scale-75">
                                        <img className="h-auto w-full rounded-lg p-2" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-03.jpg?fit=1030%2C773&ssl=1" alt=""/>
                                    </div>

                                    
                                    <div className="relative w-full h-auto overflow-hidden p-2 hover:absolute top-0 left-0 right-0 end-10 hover:z-10 hover:bg-gray-100 hover:scale-75">
                                        <img className="h-auto w-full rounded-lg p-2" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-04.jpg?fit=1030%2C773&ssl=1" alt=""/>
                                    </div>
                                    
                                    <div className="relative w-full h-auto overflow-hidden p-2 hover:absolute top-0 left-0 right-0 end-10 hover:z-10 hover:bg-gray-100 hover:scale-75">
                                        
                                        <img className="h-auto w-full rounded-lg p-2" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-05.jpg?fit=1030%2C481&ssl=1" alt=""/>
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