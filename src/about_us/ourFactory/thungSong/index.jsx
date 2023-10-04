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
                <div className="relative bottom-0 left-0 right-0 top-0 h-screen w-full">
                    <div className="bg-cover h-full w-auto bg-[url(https://drive.google.com/uc?export=view&id=1R6DC-8e0Y2gnkM1vMWH_pbw_rnOYrmyS)]">
                    <div className="relative h-64 w-3/5 flex flex-col pt-36 pl-24">
                        <img className="h-full w-auto" src="https://drive.google.com/uc?export=view&id=1JEO0r52LNIDKn0yS6gS6BGG_42_fStAL"/>
                    </div>

                    <div className="flex flex-row justify-center pt-12">
                        <div className="h-1/2 w-auto p-4">
                            <img className="h-full w-auto" src="https://drive.google.com/uc?export=view&id=1ZoLwmpOLg5zyBg9U-Y7_BU2izrlpz11L"/>
                        
                        </div>
                        <div className="h-1/2 w-auto pb-4">
                            <img className="h-full w-auto" src="https://drive.google.com/uc?export=view&id=1NGSKEbc9cOEXbl8FbR4AkPW10Fv_Rb5o"/>
                        </div>
                    </div>
                    </div>
                    {/* <li>
                    <a
                    href="/ourFactory"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 z-30"
                    onClick={() => scrollToSection('cardContent')}
                    >
                    back-----------------------!!!!!!!!!
                    </a>
                    </li> */}
                    {/* link back */}

                </div>
            </div>

            

    );

}