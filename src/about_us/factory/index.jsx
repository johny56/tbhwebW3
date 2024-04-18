import React from "react";

// import video from "./asset/";

// export const factoryVideo = video;

export default function FactoryClip(){

    
        return (

            
            <div className="relative h-screen mb-8">
                
                {/* <iframe className="h-screen w-full"
                    //src="https://www.youtube.com/embed/d25bccY87M4?si=Vsv5wtK0CM3hzaHD?modestbranding=1&rel=0"
                    src="https://youtu.be/embed/d25bccY87M4"
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; gyroscope;"
                    allowfullscreen>
                </iframe> */}
                <iframe 
                    className="h-screen w-full"
                    src="https://www.youtube-nocookie.com/embed/d25bccY87M4?si=0A1i1k2ztD6INJGq" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
                
            </div>
            
           
            

       
    );
};

