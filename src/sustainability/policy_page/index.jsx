import React from "react";

import img from "../asset/BG_Policy.svg";

export const image01 = img;

const PolicyPage = () =>{

    return (
        
            // <div className="py-32 max-h-screen w-full bg-cover bg-[url(https://drive.google.com/uc?export=view&id=10pEUCBisG5dGQmrTeV-pskegypRqr_Rz)]">
            <div className="relative h-screen w-full overflow-hidden bg-green-200 z-0">
                <div className="absolute h-full w-auto scale-150 z-10">
                    <img className="h-full w-full" src={image01} alt=""/>
                </div>

                <div className="relative mt-24 pt-8 h-32 w-auto flex flex-row justify-center item-center z-20">
                    <h1 className="font-bold text-8xl text-white">POLICIES</h1>
                </div>

                <div className="relative flex flex-row h-full w-full z-20">

                    <div className="flex flex-col h-full w-1/2">
                    <div className="m-1 pl-56">
                        <div className="flex justify-center bg-green-900/80 h-12 w-full rounded-t-lg">
                            <h1 className="text-white text-xl font-bold m-2">GROUP POLICIES(HAC)</h1>
                        </div>
                        <div className="bg-contain flex flex-col justify-start bg-lime-100/90 h-36 w-full rounded-b-lg">

                            <div className="flex flex-row justify-start h-8 w-full pt-2">
                                <svg className="mx-1 h-8 w-8 text-green-700 scale-150 pl-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/08/Sustainability-Policy-SNRSCP-V6-Approved-and-Adopted-on-22-October-2021.pdf" className="font-thin text-green-900/80 ml-2">Sustainable Natural Rubber Supply Chain Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full pt-6">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/08/Halcyon-Anti-Corruption-and-Anti-Bribery-Policy.pdf" className="font-thin text-green-900/80">Anti-Corruption & Bribery Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full pt-6">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/08/Whistleblowing-Policy_Halcyon-Agri.pdf" className="font-thin text-green-900/80">Whistleblowing Policy</a>
                            </div>

                        </div>
                        
                    </div>
                    {/* TBH policies */}
                    <div className="m-2 pl-56 pt-2">
                            <div className="flex justify-center bg-green-900/80 h-12 w-full rounded-t-lg">
                                <h1 className="text-white text-xl font-bold p-2">TBH POLICIES</h1>
                            </div>
                            <div className="bg-transition flex flex-col justify-start bg-lime-100/90 h-72 w-full rounded-b-lg">

                            <div className="flex flex-row justify-start h-8 w-full py-2">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2021/11/%E0%B8%88%E0%B8%A3%E0%B8%A3%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%84%E0%B9%89%E0%B8%B2-TBH-Supplier-Code-of-Conduct.pdf" className="font-thin text-green-900/80">Supplier Code of Conduct</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-4">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2022/07/TBH-FI-007-WHISTLEBLOWING-POLICY.pdf" className="font-thin text-green-900/80">Whistleblowing Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full pt-6">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2022/07/TBH-FI-003-ANTI-FRAUD-CORRUPTION-AND-BRIBERY-POLICY.pdf" className="font-thin text-green-900/80">Fraud, Corruption And Bribery Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-2 pt-8">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2022/07/TBH-FI-004-CONFLICT-OF-INTEREST-POLICY.pdf" className="font-thin text-green-900/80">Conflict of Interest Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full pt-8">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/Corporate-Productivity-Policy-2023.pdf" className="font-thin text-green-900/80">Corporate Productivity Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full pt-10">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2022/07/IT-01-Information-Technology-Security-Policy.pdf" className="font-thin text-green-900/80">Information Technology Security Policy</a>
                            </div>

                        </div>
                        

                    </div>

                        
                </div>
                
                <div className="flex flex-col h-full w-full">
                    <div className="h-4/7 w-full p-2 pl-12">
                            <div className="flex justify-center bg-green-900/80 h-12 w-2/3 rounded-t-lg">
                                <h1 className="text-white text-xl font-bold p-2">HUMAN RESOURCES & CSR POLICIES</h1>
                            </div>
                            <div className="h-full w-2/3 bg-transition flex flex-col justify-start bg-lime-100/90 rounded-b-lg pb-4">

                            <div className="flex flex-row justify-start h-8 w-full py-1">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/Organizational-Governance-Policy.pdf" className="font-thin text-green-900/80">Organizational Governance Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-1">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/Human-Right-policy.pdf" className="font-thin text-green-900/80">Human Right Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-1">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/Labor-Practices-Policy.pdf" className="font-thin text-green-900/80">Labor Practices Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-1">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/Fair-Operating-Practice-Policy.pdf" className="font-thin text-green-900/80">Fair Operating Practice Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-1">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/Consumer-issues-Policy.pdf" className="font-thin text-green-900/80">Consumer lssues Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-1">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/Community-involvement-and-development-Policy.pdf" className="font-thin text-green-900/80">Community lnvolvement and Development Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-1">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/Human-Resource-Management-Policy.pdf" className="font-thin text-green-900/80">Human Resource Management Policy</a>
                            </div>

                        </div>

                        

                    </div>
                        <div className="flex flex-row h-64 w-full p-4 pl-12">
                            <div className="h-full w-96 bg-transition flex flex-col justify-start bg-lime-100/90 rounded-lg">
                            <div className="flex justify-center bg-green-900/80 h-12 w-full rounded-t-lg">
                                <h1 className="text-white text-xl font-bold p-2">EHS POLICIES</h1>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-2">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/TBH-Biodiversity-and-Zero-Deforestation-Policy.pdf" className="font-thin text-green-900/80">Biodiversity and Zero Deforestation Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-2">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/TBH-Carbon-Footprint-Policy.pdf" className="font-thin text-green-900/80">Carbon Footprint Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-2">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/TBH-OSH-Policy.pdf" className="font-thin text-green-900/80">OSH Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-2">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/07/TBH-Waste-Management-Policy.pdf" className="font-thin text-green-900/80">Waste Management Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-2">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/06/ENVIRONMENTAL_HEALTH_AND_SAFETY.pdf" className="font-thin text-green-900/80">Environmental Health and Safety Policy</a>
                            </div>

                        </div>
                        {/* card 5 */}
                        <div className="pl-12">
                        <div className="h-full w-80 bg-transition flex flex-col justify-start bg-lime-100/90 rounded-2xl">
                            <div className="flex justify-center bg-green-900/80 h-12 w-full rounded-t-lg">
                                <h1 className="text-white text-xl font-bold p-2">PRIVACY POLICIES</h1>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-1">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2023/08/Sustainability-Policy-SNRSCP-V6-Approved-and-Adopted-on-22-October-2021.pdf" className="font-thin text-green-900/80">Privacy Notice Policy</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-1">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://www.teckbeehang.com/wp-content/uploads/2022/06/Privacy-Notice-for-CCTV.pdf" className="font-thin text-green-900/80">Privacy Notice for CCTV</a>
                            </div>

                            <div className="flex flex-row justify-start h-8 w-full py-1">
                                <svg className="mx-1 h-8 w-8 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/>
                                </svg>
                                <a href="https://drive.google.com/uc?export=view&id=1w3Rm8HKx9BfTK0TcfQ4O7AlvrgfiSxw1/view?usp=sharing" className="font-thin text-green-900/80">Cookies Policy</a>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>

                </div>
                </div>

            
        
    );


};
export default PolicyPage;