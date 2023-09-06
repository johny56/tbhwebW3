import React from "react";

export default function FactoryClip(){

    
        return (

            
            <div className="relative h-screen">
                
                <iframe className="h-screen w-full"
                    src="https://www.youtube.com/embed/d25bccY87M4?si=Vsv5wtK0CM3hzaHD?modestbranding=1&rel=0"
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe> 

                {/* <iframe src="https://drive.google.com/file/d/1FYS0WQWXmYQ8YSjYHarWJMEW4AFRYlBA/preview" width="640" height="480" allow="autoplay"></iframe> */}
                {/* google drive iframe */}

                 {/* <div className="max-w-xl w-full">
                     <div className="relative">
                     <div className="plyr__video-embed" id="player">
                     <iframe src="https://drive.google.com/uc?export=view&id=1FYS0WQWXmYQ8YSjYHarWJMEW4AFRYlBA/preview" className="w-640 h-480" allow="autoplay"></iframe>
                    </div>
                     </div>
                 </div> */}
            </div>
            
           
            

       
    );
};

