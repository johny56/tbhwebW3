import React from "react";

const PolicyPage = () =>{

    return (
        
        <div className="h-screen w-full bg-lime-900/50">
            <div className="bg-cover bg-repeat-x h-full w-full bg-center bg-[url(https://drive.google.com/uc?export=view&id=1KVrNviFEcQ02gLS30r00p6NAHkXxgIEL)]">
                <div className="h-32 w-auto flex flex-row justify-center item-center pt-36">
                    <h1 className="font-bold text-8xl text-white">POLICIES</h1>
                </div>
                <div className="m-8 pl-56 pt-32">
                    <div className="bg-transition flex justify-center bg-lime-100/90 h-56 w-96 rounded-2xl">
                        <div className="flex justify-center bg-green-900/80 h-12 w-96 rounded-full">
                            <h1 className="text-white text-xl font-bold m-2">GROUP POLICIES(HAC)</h1>
                        </div>
                    </div>
                     
                </div>
            </div>

        </div>
        
    );


};
export default PolicyPage;