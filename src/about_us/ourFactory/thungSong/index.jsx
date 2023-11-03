import React  from "react";

export default function ThungSongfac() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
    
        if (section) {
          const yOffset = -100; // Adjust as needed to fine-tune the scroll position
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        

            <div>
                <div className="h-screen w-full overflow-clip">
                    <div className="bg-cover bg-no-repeat bg-center h-full w-auto bg-[url(https://drive.google.com/uc?export=view&id=1R6DC-8e0Y2gnkM1vMWH_pbw_rnOYrmyS)]">
                    
                    <div className="relative flex flex-col pt-24 pl-32">
                        <h1 className="font-black text-8xl text-white pt-10">THUNG SONG</h1>
                    </div>
                    <div className="md:h-3/5 w-auto flex flex-row justify-center space-x-32 lg:h-1/2 w-full mt-16">
                        <div className="h-full w-auto p-4">
                            <img className="h-full w-96" src="https://drive.google.com/uc?export=view&id=1vVdiz5ZIFuKFqtQuonx4JQnJMsiVzbCc"/>
                        
                        </div>
                        <div className="h-full w-auto p-4">
                            <img className="h-full w-96" src="https://drive.google.com/uc?export=view&id=1hdF-GQs906ST762TP-OpALahfAIOVXUV"/>
                        </div>
                    </div>
                    </div>
                    

                </div>
            </div>

            

    );

}